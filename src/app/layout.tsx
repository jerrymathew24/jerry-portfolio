import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";
import CustomCursor from "../components/CustomCursor";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import SplashScreen from "../components/SplashScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jerry Mathew | Full Stack Developer",
  description: "Portfolio of Jerry Mathew, Full Stack Developer specializing in scalable web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth scroll-pt-16">
      <body className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col selection:bg-accent/20 selection:text-accent`}>
        <SplashScreen />
        <CustomCursor />
        <ParticleBackground />
        <Navbar />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
