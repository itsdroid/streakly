import "./globals.css";
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0f1115] text-[#e6e6e6]">
        <div className="flex min-h-screen">
          <Navbar/>
          <main className="flex-1 p-5">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
