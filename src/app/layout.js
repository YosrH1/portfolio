
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import Logo from "@/components/logo/Logo";


/* const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
}); */

export const metadata = {
  title: {
    template:
      "Elhamdouni Yosr",
    default:
      "My Portfolio",
  },
  description:
    "A unique creative portfolio designed by Elhamdouni Yosr ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx("font-lamoric",
          
          "bg-[#030014]/100 text-foreground "
        )}/* font-inter */
      >
        {children}
        <Sound/>
        <Logo/>
        <FireFliesBackground />
        
        <div id="my-modal" />
      </body>
    </html>
  );
}
