import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import React from "react";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
