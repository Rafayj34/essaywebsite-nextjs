import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer";
// import TawkToMessenger from "@/components/Tawkto";
import { Poppins } from "next/font/google";
import Whatsapp from "@/components/Whatsapp";
import "./globals.css";
const TawkToMessenger = dynamic(() => import('@/components/Tawkto'));

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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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

        <Footer />
        <TawkToMessenger />
        <Whatsapp />
      </body>
    </html>
  );
}
