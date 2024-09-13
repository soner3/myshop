import { CircularProgress } from "@mui/material";

export default function PageLoadingSpinner() {
  return (
    <section className="flex h-screen items-center justify-center">
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#e11d48" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        size={100}
        sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
      />
    </section>
  );
}
