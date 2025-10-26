import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, Link, Banknote, FileSignature, CircleHelp, Bold } from "lucide-react";

const AadhaarVsDBT = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Why Was My Scholarship Delayed?
            </h2>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              A simple 'linked' account is not enough. Your account must be 'DBT-Enabled' (seeded) to receive funds directly. Here's the difference.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* CARD 1: Aadhaar-Linked (The Problem) */}
            <Card className="border-2 border-slate-200 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                    <Link className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Aadhaar-Linked</h3>
                </div>
                
                <p className="text-slate-600 mb-6">
                  This only proves your identity (KYC). It <span className="font-bold">does not</span> authorize the bank to accept government payments for you.
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Used for basic KYC verification.</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 font-medium">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Cannot receive scholarship money.</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CARD 2: DBT-Enabled (The Solution) */}
            <Card className="border-2 border-blue-500 bg-blue-50 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Banknote className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">DBT-Enabled (Seeded)</h3>
                </div>
                
                <p className="text-slate-700 mb-6">
                  This gives your bank permission to accept government funds on your behalf. <span className="font-bold">This is what you need.</span>
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Can receive all government scholarships directly.</span>
                  </div>
                   <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Ensures instant and successful fund transfers.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How to Enable Section */}
          {/* How to Enable Section */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-slate-900">How to Enable DBT on Your Account</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center relative">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                    {/* --- ADDED relative z-10 --- */}
                    <div className="relative z-10 flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full border-4 border-white shadow-md">
                        <CircleHelp size={32}/>
                    </div>
                    <h4 className="mt-4 font-semibold text-slate-800 text-lg">Visit Your Bank</h4>
                    <p className="text-sm text-slate-600 mt-1">Go to your home bank branch where you opened your account.</p>
                </div>
                {/* Connecting Arrow */}
                <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-1/3 border-t-2 border-slate-300 border-dashed" style={{ marginLeft: '-16.66%'}} />
                
                {/* Step 2 */}
                <div className="flex flex-col items-center">
                    {/* --- ADDED relative z-10 --- */}
                    <div className="relative z-10 flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full border-4 border-white shadow-md">
                        <FileSignature size={32}/>
                    </div>
                    <h4 className="mt-4 font-semibold text-slate-800 text-lg">Request DBT Seeding</h4>
                    <p className="text-sm text-slate-600 mt-1">Ask to fill the "Aadhaar Seeding Consent Form" for DBT.</p>
                </div>
                 {/* Connecting Arrow */}
                <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-1/3 border-t-2 border-slate-300 border-dashed" style={{ marginLeft: '16.66%'}} />

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                    {/* --- ADDED relative z-10 --- */}
                    <div className="relative z-10 flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full border-4 border-white shadow-md">
                        <CheckCircle2 size={32}/>
                    </div>
                    <h4 className="mt-4 font-semibold text-slate-800 text-lg">Verify on DBT-Sahayak</h4>
                    <p className="text-sm text-slate-600 mt-1">After 48 hours, use our tool again to confirm the status is GREEN.</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AadhaarVsDBT;