import { AlertCircle, Users, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Problem = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            The Challenge
          </h2>
          <p className="text-xl text-muted-foreground">
            Millions of students face scholarship disbursement delays due to lack of awareness 
            about the difference between Aadhaar-linked and DBT-enabled bank accounts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Awareness Gap
              </h3>
              <p className="text-muted-foreground">
                Students don't understand the critical difference between Aadhaar linking 
                and DBT enablement, causing payment failures.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Limited Access
              </h3>
              <p className="text-muted-foreground">
                Rural students without smartphones or internet struggle to verify 
                their account status, widening the digital divide.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <TrendingDown className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Delayed Benefits
              </h3>
              <p className="text-muted-foreground">
                Scholarship delays impact student welfare and educational progress, 
                causing unnecessary hardship and administrative burden.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Problem;
