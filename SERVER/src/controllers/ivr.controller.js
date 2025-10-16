import { asyncHandler } from "../utils/asyncHandler.js";
import { Verification } from "../models/verification.model.js";
import geoip from "geoip-lite";
import twilio from "twilio";

// This is the TwiML VoiceResponse object from the Twilio helper library
const { VoiceResponse } = twilio.twiml;

const mockNpcApiCall = (aadhaarNumber) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const statuses = [
                { status: "GREEN", bankName: "State Bank of India" },
                { status: "YELLOW", bankName: "Punjab National Bank" },
                { status: "RED", bankName: null }
            ];
            const randomResult = statuses[Math.floor(Math.random() * statuses.length)];
            resolve(randomResult);
        }, 500); // Shorter delay for IVR
    });
};

const handleIVRWebhook = asyncHandler(async (req, res) => {
    const twiml = new VoiceResponse();
    const digits = req.body.Digits;

    if (!digits) {
        const gather = twiml.gather({
            numDigits: 12, 
            action: '/api/v1/ivr/webhook', 
            method: 'POST',
            timeout: 15 
        });
        
        gather.say({ voice: 'alice', language: 'hi-IN' }, 
            'DBT Sahayak mein aapka swagat hai.'
        );
        gather.say({ voice: 'alice', language: 'en-IN' }, 
            'Welcome to DBT Sahayak.'
        );
        gather.say({ voice: 'alice', language: 'hi-IN' }, 
            'Kripya apna 12 anko ka Aadhaar number darj karein.'
        );
        gather.say({ voice: 'alice', language: 'en-IN' },
            'Please enter your 12 digit Aadhaar number.'
        );

        twiml.say('We did not receive any input. Goodbye!');
        twiml.hangup();
    } 

    else {
        const aadhaarNumber = digits;

        const verificationResult = await mockNpcApiCall(aadhaarNumber);

        const ip = req.ip || req.socket.remoteAddress;
        const geo = geoip.lookup(ip);
        const userRegion = geo ? `${geo.city}, ${geo.region}` : "IVR Call";
        
        await Verification.create({
            status: verificationResult.status,
            bankName: verificationResult.bankName,
            region: userRegion
        });
        
        twiml.say({ voice: 'alice', language: 'en-IN' }, 'Thank you.');

        switch (verificationResult.status) {
            case 'GREEN':
                twiml.say({ voice: 'alice', language: 'hi-IN' }, 
                    'Aapka bank account DBT ke liye poori tarah se taiyaar hai. Aapko kuch aur karne ki zaroorat nahi hai.'
                );
                twiml.say({ voice: 'alice', language: 'en-IN' }, 
                    'Your bank account is fully ready for DBT. You do not need to take any further action.'
                );
                break;
            case 'YELLOW':
                twiml.say({ voice: 'alice', language: 'hi-IN' }, 
                    'Aapka Aadhaar link hai, lekin DBT status anischit hai. Kripya apni bank shaakha mein jaakar iski pushti karein.'
                );
                twiml.say({ voice: 'alice', language: 'en-IN' }, 
                    'Your Aadhaar is linked, but the DBT status is unconfirmed. Please visit your bank branch to confirm.'
                );
                break;
            case 'RED':
                twiml.say({ voice: 'alice', language: 'hi-IN' }, 
                    'Zaroori soochna. Aapka account DBT ke liye seed nahi hai. Scholarship prapt karne ke liye, kripya turant apne bank mein sampark karein.'
                );
                 twiml.say({ voice: 'alice', 'language': 'en-IN' }, 
                    'Important Information. Your account is not seeded for DBT. To receive your scholarship, please contact your bank immediately.'
                );
                break;
            default:
                 twiml.say({ voice: 'alice', 'language': 'en-IN' }, 
                    'We could not process your request at this time. Please try again later.'
                );
                break;
        }

        twiml.say({ voice: 'alice', language: 'en-IN' }, 'Thank you for using DBT Sahayak. Goodbye.');
        twiml.hangup();
    }

    res.type('text/xml');
    res.status(200).send(twiml.toString());
});

export { handleIVRWebhook };