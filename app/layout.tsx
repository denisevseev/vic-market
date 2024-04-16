// import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import FooterTopBox from "./components/FooterTopBox/FooterTopBox";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import { ProvidersReactQuery } from "./providersReactQuery";

// export const metadata: Metadata = {
//   title: "Victorum marketplace",
//   description: "Viktorum marketplace",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <link rel="icon" href="/favicon.png" sizes="any" />
          <ProvidersReactQuery>
            <Navigation />
            {children}
            <div className="footer-main">
              <FooterTopBox />
              <Footer />
            </div>
          </ProvidersReactQuery>
        </body>
      </ThemeRegistry>
    </html>
  );
}
