import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import FooterTopBox from "./components/FooterTopBox/FooterTopBox";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Victorum marketplace",
  description: "Viktorum marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <Navigation />
          {children}
          <div className="footer-main">
            <FooterTopBox />
            <Footer />
          </div>
        </body>
      </ThemeRegistry>
    </html>
  );
}
