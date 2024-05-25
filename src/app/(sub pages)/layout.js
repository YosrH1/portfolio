import HomeBtn from "@/components/HomeBtn";
import clsx from "clsx";
export default function SubPagesLayout({ children }) {
  return (
    <main className={clsx("font-lamoric","flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20")}>
      <HomeBtn />
      {children}
    </main>
  );
}
