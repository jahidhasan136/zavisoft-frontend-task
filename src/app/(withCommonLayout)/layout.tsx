import Navbar from "@/src/components/shared/navbar/Navbar";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        <Navbar />
        <div> {children}</div>
      </div>
    </>
  );
};

export default CommonLayout;
