import { PhoneMissed, PhoneOutgoing, MessageCircle } from "lucide-react";

const MissedCall = () => {
  return (
    <section className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Side: Explanation */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full mb-4">
              <PhoneMissed size={16} />
              <span className="font-semibold text-sm">Offline Access</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              No Internet? No Problem.
            </h2>
            <p className="text-slate-300 text-lg mb-6">
              You can check your DBT status from any basic phone with our free missed call service. Here’s how it works:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <p className="text-slate-200">Give a missed call to our helpline number.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <p className="text-slate-200">You will receive an automated call back instantly.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <p className="text-slate-200">Follow the voice instructions to enter your Aadhaar number and get your status.</p>
              </div>
            </div>
          </div>

          {/* Right Side: The Number */}
          <div className="bg-slate-700 border-2 border-slate-600 rounded-2xl p-8 text-center">
            <h3 className="text-lg text-slate-300 mb-2">Give a Missed Call To</h3>
            <div className="text-4xl sm:text-5xl font-bold text-white tracking-widest bg-slate-900/50 p-6 rounded-lg border border-slate-500">
              +91 11 4084 XXXX
            </div>
             <p className="mt-4 text-xs text-slate-400">This is a demo number. This service is completely free of charge.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissedCall;