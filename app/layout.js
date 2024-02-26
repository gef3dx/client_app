import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth",
  description: "Auth Rest Django and NextJS",
};

export default function RootLayout({ children }) {
  return (
  <html lang="ru">
    <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
