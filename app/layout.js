import "./globals.css";
import { Playfair_Display, Lora, Great_Vibes } from "next/font/google";
import { Navbar } from "../components/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const lora = Lora({
  subsets: ["latin", "italic"],
  weight: ["400", "500"],
  variable: "--font-lora",
});
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

export const metadata = {
  title: "Dfl-collection Boutique",
  description: "Modern women's clothing store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={`${playfair.variable} ${lora.variable} ${greatVibes.variable} no-horizontal-overflow`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="bg-pink-100 text-pink-800 py-4 mt-8 ">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Dfl-collection Boutique. All rights reserved.</p>
      </div>
    </footer>
  );
}
