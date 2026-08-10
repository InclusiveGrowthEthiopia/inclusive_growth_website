"use client";

import { PropsWithChildren } from "react";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen" tabIndex={-1}>{children}</main>
      <Footer />
    </>
  );
};
