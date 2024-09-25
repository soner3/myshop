import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Soner-MyShop",
    short_name: "MyShop",
    description: "Your one-stop shop for everything you need!",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "./apple-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "./icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "./favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
  };
}
