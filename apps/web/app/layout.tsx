import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = { title: "Love Machine", description: "Neon dating slot" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0b0712] text-white antialiased">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(80%_40%_at_50%_-10%,rgba(255,60,0,0.25),transparent),radial-gradient(40%_40%_at_10%_10%,rgba(255,0,140,0.16),transparent)]" />
        <Navbar />
        <main className="relative z-10 mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
