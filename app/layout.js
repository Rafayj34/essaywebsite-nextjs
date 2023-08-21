import Navbar from "@/components/Navbar";

import { Footer } from "@/components/Footer";
import TawkToMessenger from "@/components/Tawkto";
import ScrollTopButton from '@/components/Scrolltotop';
import { Poppins } from "next/font/google";
import Whatsapp from "@/components/Whatsapp";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
});

export const metadata = {
  title: "Best Essay Writer",
  description: "UK's Best Essay Writers Offer the best Essay writing service at a cheap price. Order Now and get professional Essay help services.",
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title:"Best Essay Writing Service UK at Cheap With Best Essay Writers",
    description: "UK's Best Essay Writers Offer the best Essay writing service at a cheap price. Order Now and get professional Essay help services.",
    siteName: "Best Essay Writer",
    images: '/og-image.png',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} `}>
        <div className="flex ">
          <Navbar />
        </div>

        {children}
        <ScrollTopButton />
        <Footer />
        <TawkToMessenger />
        <Whatsapp />
      </body>
    </html>
  );
}
