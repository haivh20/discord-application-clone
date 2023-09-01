"use client";
import React from "react";
import { CreateServerModal } from "@/components/modals/create-server-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
    </>
  );
};

export default ModalProvider;
