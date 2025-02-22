"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DoctorHeader, PatientHeader } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Baseline from "@/components/Baseline/Baseline";
import { UserProvider, useUser } from "@/context/UserContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function LayoutContent({ children }) {
  const { role } = useUser();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col items-center justify-center`}>
        <ToastContainer />
        {role === "doctor" ? (
          <DoctorHeader />
        ) : (
          <>
            {" "}
            <PatientHeader /> <Baseline />
          </>
        )}

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <LayoutContent>{children}</LayoutContent>
    </UserProvider>
  );
}
