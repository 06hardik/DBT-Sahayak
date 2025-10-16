const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">DBT-Sahayak</h3>
              <p className="text-primary-foreground/80">
                Empowering students with instant DBT-Aadhaar verification and AI-powered guidance.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Community Forum</li>
                <li>Contact Support</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
            <p>&copy; 2025 DBT-Sahayak. Empowering financial inclusion through technology.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
