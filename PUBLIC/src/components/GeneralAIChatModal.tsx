import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import AISahayakChat from "@/components/AISahayakChat";

interface GeneralAIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GeneralAIChatModal = ({ isOpen, onClose }: GeneralAIChatModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px] p-0">
        {/* We are reusing the AISahayakChat component inside the modal */}
        {/* Notice we are NOT passing a status prop here */}
        <AISahayakChat />
      </DialogContent>
    </Dialog>
  );
};

export default GeneralAIChatModal;