import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [aadhaar, setAadhaar] = useState("");
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{12}$/.test(aadhaar)) {
      setError("Please enter a valid 12-digit Aadhaar number.");
      return;
    }
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/v1/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ aadhaarNumber: aadhaar }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Verification failed.");
      }

      localStorage.setItem('verificationResult', JSON.stringify({
        status: result.data.status,
        bankName: result.data.bankName,
        aadhaarLast4: aadhaar.slice(-4)
      }));

      window.location.href = '/status';

    } catch (err) {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-white" style={{backgroundImage: 'linear-gradient(rgba(226, 232, 240, 0.5) 1px, transparent 1px), linear-gradient(to right, rgba(226, 232, 240, 0.5) 1px, transparent 1px)', backgroundSize: '2rem 2rem'}} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
          Is Your Scholarship Account DBT-Ready?
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-slate-600">
          Get an instant and free answer. Enter your Aadhaar number below to check your status now.
        </p>
        
        <div className="mt-10 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="text"
              value={aadhaar}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 12);
                setAadhaar(value);
                if (error) setError("");
              }}
              className="w-full px-5 py-7 text-lg border-2 border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
              placeholder="Enter 12-digit Aadhaar Number"
            />
            <Button type="submit" className="w-full sm:w-auto font-bold rounded-lg px-8 py-7 text-lg transition shadow-md hover:shadow-lg flex-shrink-0">
              Check Status Now
            </Button>
          </form>
          
          {error && <p className="text-red-600 text-sm mt-2 text-left">{error}</p>}
          
          <p className="mt-4 text-sm text-slate-500 flex items-center justify-center">
            <Lock className="w-4 h-4 mr-2 text-slate-400" />
            100% Secure & Confidential. We never store your Aadhaar number.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;