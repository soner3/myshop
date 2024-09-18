"use client";

import {
  Dialog,
  DialogActions,
  DialogContent,
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
      <DialogTitle className="dark:bg-slate-900 dark:text-white">
        Cookie Agreement
      </DialogTitle>
      <DialogContent className="dark:bg-slate-900">
        <p className="capitalize dark:text-white">
          If you are using this Website you have to agree with the fact that we
          are using Cookies. We do not save personal data.
        </p>
      </DialogContent>
      <DialogActions className="dark:bg-slate-900 dark:text-white">
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
