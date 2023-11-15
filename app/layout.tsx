import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "ALAMSYAH.ID",
  description:
    "ALAMSYAH.ID Menawarkan Premium Digital dan Solusi Terjangkau. Kami adalah pilihan terpercaya untuk akun premium seperti Netflix dan solusi virtual machine berkinerja tinggi seperti VPS, Remote Desktop, WHM, serta Cloud9 IDE. Produk berkualitas dengan harga terjangkau, hanya di ALAMSYAH.ID.",
  icons: {
    icon: [
      {
        url: "/icons/AHeaderLight.webp",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icons/AHeaderDark.webp",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
