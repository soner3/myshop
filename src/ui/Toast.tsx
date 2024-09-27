"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Toast() {
  return <ToastContainer position="bottom-center" autoClose={2000} />;
}
