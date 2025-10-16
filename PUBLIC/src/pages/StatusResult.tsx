import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import StatusCard from "@/components/StatusCard";
import AISahayakChat from "@/components/AISahayakChat";

const StatusResult = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status") || "green";
  const bankName = searchParams.get("bank") || "State Bank of India";

  const showChat = status === "yellow" || status === "red";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <StatusCard status={status as "green" | "yellow" | "red"} bankName={bankName} />
          {showChat && <AISahayakChat status={status as "yellow" | "red"} />}
        </div>
      </div>
    </div>
  );
};

export default StatusResult;
