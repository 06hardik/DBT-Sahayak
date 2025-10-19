import { useEffect, useState } from "react";
import StatusCard from "@/components/StatusCard";
import AISahayakChat from "@/components/AISahayakChat";
import Header from "@/components/Header"; // Or your main nav component

// A type definition for clarity
interface VerificationResult {
  status: "green" | "yellow" | "red";
  bankName: string | null;
  aadhaarLast4: string;
}

const StatusResultPage = () => {
  const [result, setResult] = useState<VerificationResult | null>(null);

  // This useEffect hook runs once when the page loads
  useEffect(() => {
    // 1. Get the raw data string from localStorage
    const savedResultString = localStorage.getItem('verificationResult');
    
    // 2. If data exists, parse it and set it to our state
    if (savedResultString) {
      try {
        const parsedResult = JSON.parse(savedResultString);
        
        // Convert status to lowercase to match the StatusCard component's expectation
        parsedResult.status = parsedResult.status.toLowerCase();
        
        setResult(parsedResult);

        // Optional: Clear the item so it's not shown again on a simple page refresh
        // localStorage.removeItem('verificationResult');

      } catch (error) {
        console.error("Failed to parse verification result from localStorage", error);
        // Handle potential corrupted data in localStorage
        setResult(null);
      }
    }
  }, []); // The empty array [] means this effect runs only once

  // If there's no result after checking localStorage, guide the user back
  if (!result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-2xl font-bold">No verification result found.</h1>
        <p className="mt-2 text-slate-600">Please go back to the homepage to check your status first.</p>
        <a href="/" className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg">
          Go to Homepage
        </a>
      </div>
    );
  }

  // If a result IS found, render the correct components
  const showChat = result.status === "yellow" || result.status === "red";

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center text-slate-800">Your Verification Result</h2>
          
          {/* Pass the correct, state-managed props to the StatusCard */}
          <StatusCard 
            status={result.status} 
            bankName={result.bankName} 
            aadhaarLast4={result.aadhaarLast4}
          />
          
          {showChat && <AISahayakChat status={result.status} />}
        </div>
      </main>
    </div>
  );
};

export default StatusResultPage;