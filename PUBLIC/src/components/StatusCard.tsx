import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatusCardProps {
  status: "green" | "yellow" | "red";
  bankName: string | null; // Allow bankName to be null
  aadhaarLast4: string; // Add this prop to show the last 4 digits
}

const StatusCard = ({ status, bankName, aadhaarLast4 }: StatusCardProps) => {
  const statusConfig = {
    green: {
      icon: CheckCircle2,
      title: "Congratulations! Your account is DBT-Ready.",
      description: "No further action is needed. Your scholarship funds will be transferred to this account successfully.",
      borderColor: "border-t-8 border-green-500",
      iconColor: "text-green-600",
      iconBgColor: "bg-green-100",
    },
    yellow: {
      icon: AlertTriangle,
      title: "Action Recommended",
      description: "While your Aadhaar is linked, your DBT status is unconfirmed. To be safe, we strongly recommend visiting your bank to ensure everything is ready for your scholarship.",
      borderColor: "border-t-8 border-yellow-500",
      iconColor: "text-yellow-600",
      iconBgColor: "bg-yellow-100",
    },
    red: {
      icon: XCircle,
      title: "Urgent Action Required",
      description: "Your account is NOT ready to receive scholarship funds. Please visit your nearest bank branch immediately to get this fixed.",
      borderColor: "border-t-8 border-red-500",
      iconColor: "text-red-600",
      iconBgColor: "bg-red-100",
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Card className={`shadow-xl ${config.borderColor} transition-all`}>
      <CardContent className="p-8 text-center">
        
        {/* Simplified Icon and Title Layout */}
        <div className={`mx-auto h-20 w-20 flex items-center justify-center rounded-full ${config.iconBgColor}`}>
          <Icon className={`w-12 h-12 ${config.iconColor}`} />
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mt-6">
          {config.title}
        </h2>
        
        <p className="text-slate-600 mt-2 max-w-lg mx-auto leading-relaxed">
          {config.description}
        </p>
        
        {/* Details Section with improved logic and styling */}
        <div className="mt-8 bg-slate-50 border border-slate-200 rounded-lg p-4 text-left text-base space-y-2">
          <div className="flex justify-between">
            <span className="text-slate-500">Aadhaar Number</span>
            <span className="font-mono font-semibold text-slate-800">XXXX XXXX {aadhaarLast4}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Linked Bank</span>
            {bankName ? (
              <span className="font-semibold text-slate-800">{bankName}</span>
            ) : (
              <span className="font-semibold text-red-600">Not Found</span>
            )}
          </div>
           <div className="flex justify-between">
            <span className="text-slate-500">DBT Status</span>
            <span className={`font-bold ${config.iconColor}`}>{status.toUpperCase()}</span>
          </div>
        </div>
        
      </CardContent>
    </Card>
  );
};

export default StatusCard;