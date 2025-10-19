import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import LoginModal from "@/components/LoginModal"; // We will update this file next

const Header = () => {
  // State to control the visibility of the login modal
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <header className="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <ShieldCheck className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-800">DBT-Sahayak</span>
          </div>

          {/* Login Button */}
          <div>
            <button
              onClick={() => setIsLoginModalOpen(true)} // Open the modal on click
              className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              Official Login
            </button>
          </div>
        </nav>
      </header>

      {/* The Modal Component itself */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default Header;