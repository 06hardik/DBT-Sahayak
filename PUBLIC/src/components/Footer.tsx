import { ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto text-center">
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShieldCheck className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-bold text-white">DBT-Sahayak</h3>
          </div>

          <p className="max-w-xl mx-auto text-sm text-slate-400 mb-6">
            A secure, student-focused utility to provide instant clarity on Aadhaar-DBT seeding status.
          </p>
          
          <div className="border-t border-slate-700 pt-6 text-xs">
            <p className="mb-2">
              This is a prototype developed for the Smart India Hackathon 2025. This is not an official government website.
            </p>
            <p>&copy; 2025 Team [The Altruists]. All Rights Reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;