import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StatusCardProps {
  status: "green" | "yellow" | "red";
  bankName: string;
}

const StatusCard = ({ status, bankName }: StatusCardProps) => {
  const statusConfig = {
    green: {
      icon: CheckCircle2,
      title: "Congratulations! Your account is DBT-Ready.",
      description: "Your bank account is properly linked and ready to receive Direct Benefit Transfers.",
      bgColor: "bg-success/10",
      borderColor: "border-success",
      textColor: "text-success",
      iconColor: "text-success",
    },
    yellow: {
      icon: AlertTriangle,
      title: "Action Required! Your DBT status is unconfirmed.",
      description: "Your account needs verification. Please follow the recommended steps below.",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500",
      textColor: "text-yellow-700 dark:text-yellow-400",
      iconColor: "text-yellow-500",
    },
    red: {
      icon: XCircle,
      title: "Urgent! Your account is NOT ready for DBT.",
      description: "Your bank account is not properly configured for DBT. Immediate action required.",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive",
      textColor: "text-destructive",
      iconColor: "text-destructive",
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Card className={`${config.bgColor} ${config.borderColor} border-2 shadow-lg`}>
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-full ${config.bgColor}`}>
            <Icon className={`w-8 h-8 ${config.iconColor}`} />
          </div>
          <div className="flex-1">
            <CardTitle className={`text-2xl mb-2 ${config.textColor}`}>
              {config.title}
            </CardTitle>
            <CardDescription className="text-base">
              {config.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground font-medium">Bank Name:</span>
            <Badge variant="outline" className="text-base px-3 py-1">
              {bankName}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
