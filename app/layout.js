import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
