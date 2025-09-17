import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/ui/navbar";
import { ThemeProvider } from "@/components/theme-provider"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CinderChest",
  description: "A cursed ledger forged in shadows, where every relic, weapon, and potion is bound by code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className='flex min-h-full flex-col bg-[#f5f5f5]'>
           <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {/* Wrap children to ensure a single element */}
          <div>
                
          {children}</div>
        </main>
              </ThemeProvider>
      </body>

    </html>
  );
}
