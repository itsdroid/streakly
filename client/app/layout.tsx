import "./globals.css";
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" text-[#e6e6e6] bg-[#0f1115]">
        <div className="flex min-h-screen  bg-zinc-900">
          <Navbar/>
          <main className="flex-1 p-5">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
