import { Inter } from "next/font/google";
import "./globals.css";
import  SessionProvider  from "@/app/utils/SessionProvider"
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amazon 2.0",
  description: "An e-commerce marketplace made with Next.js",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionProvider session={session}>
          <div>
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
