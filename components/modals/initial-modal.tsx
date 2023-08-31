"use client";
import {
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogFooter,
  Dialog,
} from "@/components/ui/dialog";

export const InitialModal = () => {
  return (
    <Dialog open>
      <DialogContent className="bg-white text-black p-0 overflow-hidden ">
        <DialogHeader>Customize yout server</DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
