"use client";
import Notification from "@/components/Notification";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";
import { Provider } from "react-redux";
import store from "@/utils/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pizza Favore",
  description: "Delicious Pizzas for you!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <AuthProvider>
            <QueryProvider>
              <div>
                <Notification />
                <Navbar />
                {children}
                <Footer />
              </div>
            </QueryProvider>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
