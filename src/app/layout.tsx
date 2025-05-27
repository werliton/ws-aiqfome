import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "@/components/ui/styles/globals.css";
import { Header } from "@/components/ui/layout/header/header";
import { Footer } from "@/components/ui/layout/footer/footer";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const nunitoMono = Nunito({
  variable: "--font-nunito-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "O aiqfome é o melhor app de delivery da sua cidade e região",
  description:
    "Peça seu delivery pelo aiqfome ou torne-se um lojista ou licenciado parceiro para fazer parte do 2º maior app de delivery do Brasil e líder do interior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={`${nunitoMono.variable} ${nunitoSans.variable} flex h-screen flex-col antialiased`}
      >
        <Header />
        {/* 960 width */}
        <main className="bg-background m-auto w-full max-w-[390px] flex-1 md:max-w-[960px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
