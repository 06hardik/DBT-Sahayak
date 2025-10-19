import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // This `useEffect` hook pre-fills the credentials whenever the modal opens.
  // This is the key for making it easy for SIH evaluators.
  useEffect(() => {
    if (isOpen) {
      setUsername("demo-official");
      setPassword("admin@1234");
    }
  }, [isOpen]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://dbt-sahayak-server.onrender.com/api/v1/gov/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem('accessToken', data.data.accessToken);
      toast({ title: "Login Successful", description: `Welcome, demo-official!` });
      
      window.location.href = '/dashboard'; 

    } catch (error) {
      toast({ title: "Login Failed", description: error.message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
           <img src="https://emblem.werindia.com/wp-content/uploads/2018/10/emblem-of-india-werindia.png" alt="Emblem of India" className="h-16 mx-auto mb-4" />
          <DialogTitle className="text-2xl">Official Dashboard Login</DialogTitle>
          <DialogDescription>Credentials are pre-filled for evaluation.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleLogin} className="space-y-6 px-4 pb-4">
          <div className="space-y-2">
            <label htmlFor="username">Username</label>
            <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin" /> : "Login"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;