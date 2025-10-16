import { Card, CardContent } from "@/components/ui/card";
import { Check, X, ArrowRight } from "lucide-react";

const AadhaarVsDBT = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Understanding the Difference
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Many students confuse Aadhaar-linked accounts with DBT-enabled accounts. 
              Here's what you need to know to receive your scholarships without delays.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-muted">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Aadhaar-Linked Account</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Your bank account has your Aadhaar number associated with it for identification purposes.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-foreground">Basic Aadhaar authentication</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-foreground">Used for KYC verification</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">NOT sufficient for receiving scholarships</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Cannot receive Direct Benefit Transfers</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/50 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">DBT-Enabled Account</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Your account is registered with NPCI's Aadhaar Mapper system to receive government benefits directly.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-foreground">Registered with NPCI for DBT</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-foreground">Can receive scholarships directly</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-foreground">Eligible for government subsidies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-foreground">Instant benefit transfers</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <ArrowRight className="w-8 h-8 text-primary flex-shrink-0" />
              <h3 className="text-2xl font-bold text-foreground">How to Enable DBT on Your Account</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h4 className="font-semibold text-foreground">Visit Your Bank</h4>
                <p className="text-sm text-muted-foreground">
                  Go to your bank branch where you have your savings account
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h4 className="font-semibold text-foreground">Submit Documents</h4>
                <p className="text-sm text-muted-foreground">
                  Provide your Aadhaar card and request DBT activation on your account
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h4 className="font-semibold text-foreground">Verify Status</h4>
                <p className="text-sm text-muted-foreground">
                  Use DBT-Sahayak to verify your DBT status after activation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AadhaarVsDBT;
