"use client";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Cookie Agreement</DialogTitle>
      <DialogContent>
        <DialogContentText className="capitalize">
          If you are using this Website you have to agree with the fact that we
          are using Cookies. We do not save personal data.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <button
          className="mx-auto rounded-lg bg-rose-600 px-4 py-2 text-white shadow-lg hover:bg-rose-700 active:bg-rose-800"
          onClick={handleClose}
          autoFocus
        >
          Agree
        </button>
      </DialogActions>
    </Dialog>
  );
}
