"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

/**
 * Ist eine Third Party Library, die kleine Nachrichten anzeigt
 * stellt mir die toast Methode zur verfügung mit der man ein solche Benachrichtigung
 * anzeigen kann.
 */

export default function Toast() {
  return <ToastContainer position="bottom-center" autoClose={2000} />;
}
