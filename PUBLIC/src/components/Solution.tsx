import { CheckCircle2, Sparkles } from "lucide-react";

const Solution = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Innovation & Uniqueness</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                Smart, Universal & Proactive
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8">
                DBT-Sahayak is a multi-channel verification platform that bridges the digital divide 
                with instant diagnostics, universal access, and AI-powered governance.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-success" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      Instant Diagnostics
                    </h3>
                    <p className="text-muted-foreground">
                      Active tool for immediate, personalized solutions, replacing passive awareness campaigns.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-success" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      Universal Access
                    </h3>
                    <p className="text-muted-foreground">
                      Bridges the digital divide with internet-free, missed-call feature for every student.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-success" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      Smart Governance
                    </h3>
                    <p className="text-muted-foreground">
                      Intelligent chat support for students and automated insights for officials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-2xl p-8 border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Multi-Channel Verification
              </h3>
              
              <div className="space-y-4">
                <div className="bg-card p-4 rounded-lg border shadow-sm">
                  <div className="font-semibold text-foreground mb-1">📞 Missed Call</div>
                  <div className="text-sm text-muted-foreground">Works on any feature phone, no internet needed</div>
                </div>
                
                <div className="bg-card p-4 rounded-lg border shadow-sm">
                  <div className="font-semibold text-foreground mb-1">💬 SMS System</div>
                  <div className="text-sm text-muted-foreground">Instant status updates via text message</div>
                </div>
                
                <div className="bg-card p-4 rounded-lg border shadow-sm">
                  <div className="font-semibold text-foreground mb-1">🌐 Web Portal</div>
                  <div className="text-sm text-muted-foreground">Full-featured dashboard with AI assistant</div>
                </div>
                
                <div className="bg-card p-4 rounded-lg border shadow-sm">
                  <div className="font-semibold text-foreground mb-1">🤖 AI Sahayak</div>
                  <div className="text-sm text-muted-foreground">Gemini-powered conversational assistance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
