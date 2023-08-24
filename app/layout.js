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
  canonical: 'https://scriptersltd.com/bestessaywriters/essay-editing-service/',
  alternates: {
    canonical: 'https://bestessaywriters.co.uk/essay-editing-service/'
  },
  openGraph: {
    title:"Top Rated Essay Editing Services by Top UK Nartive Essay Writers",
    description: "Get your Essay edited and proofread by UK's top Essay Editing Service. Our Top Rated Essay Writers provide 110% satisfaction guaranteed.",
    images: [
      {
        url: 'https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/Get-Essay-Editing-Service.jpg',
        width: 1200,
        height: 628,
        type: 'image/jpeg'
      }
    ],
    locale: 'en_US',
    type: 'article',
    url: 'https://bestessaywriters/essay-editing-service/'
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
  twitter: {
    card: 'summary_large_image',
    title: 'Best Essay Writer',
    description: 'The React Framework for the Web',
    creator: '@BestEssayWrit13',
    site: '@BestEssayWrit13',
    images: ['https://scriptersltd.com/bestessaywriters/wp-content/uploads/2023/02/Get-Essay-Editing-Service.jpg'],
    label1: "Est. Reading time",
    data1: "8 minutes",
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
