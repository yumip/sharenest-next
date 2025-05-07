"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import {
  Modal,
  Box,
  Button,
  ModalProps,
  Typography,
  ButtonProps,
} from "@mui/material";

interface ModalContextType {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("BasicModal.* must be used within <BasicModal>");
  }
  return context;
}

interface BasicModalRootProps {
  trigger: ReactNode;
  children: ReactNode;
  modalProps?: Partial<ModalProps>;
}

function Root({ trigger, children, modalProps }: BasicModalRootProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalContext.Provider value={{ open, handleOpen, handleClose }}>
      {trigger}
      <Modal open={open} onClose={handleClose} {...modalProps}>
        <Box
          sx={{
            maxWidth: 500,
            width: "90%",
            p: 3,
            bgcolor: "background.paper",
            m: "auto",
            mt: "15%",
            borderRadius: 2,
          }}
        >
          {children}
        </Box>
      </Modal>
    </ModalContext.Provider>
  );
}

function Trigger(props: ButtonProps) {
  const { handleOpen } = useModalContext();
  return <Button onClick={handleOpen} {...props} />;
}

function Header({ title }: { title: string }) {
  return (
    <Typography variant="h6" mb={2}>
      {title}
    </Typography>
  );
}

function Body({ children }: { children: ReactNode }) {
  return <Box mb={2}>{children}</Box>;
}

function Footer({
  buttonText = "Submit",
  onSubmit,
}: {
  buttonText?: string;
  onSubmit: () => void;
}) {
  const { handleClose } = useModalContext();
  return (
    <Box display="flex" justifyContent="flex-end" gap={1}>
      <Button onClick={handleClose}>Cancel</Button>
      <Button variant="contained" onClick={onSubmit}>
        {buttonText}
      </Button>
    </Box>
  );
}

export const BasicModal = Object.assign(Root, {
  Trigger,
  Header,
  Body,
  Footer,
});
