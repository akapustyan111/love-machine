export const metadata = { title: "Love Machine", description: "Dating slot demo" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="min-h-screen bg-black text-white">{children}</body></html>);
}
