import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div className="pb-10">Company Financials Cheat Sheets For Newbies In Investing 🐣</div>
      <div role="tablist" className="tabs tabs-boxed">
  <a role="tab" className="tab tab-active">🇺🇸 US Company Financials Cheat Sheets</a>
  <a role="tab" className="tab">🇹🇷 TR Company Financials Cheat Sheets</a>
</div>
    </main>
  );
}
