"use client";

import { Header } from "@/components/header";
import { SideBar } from "@/components";
import { ServiceManagerLayoutType } from "./types";
import { useState } from "react";

const ServiceManagerLayout = ({ children }: ServiceManagerLayoutType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <main className="min-w-screen max-w-screen min-h-screen max-h-screen flex flex-col">
      <Header />
      <div className="w-full h-screen flex flex-row">
        <div
          className="border-r border-gray-400 p-3"
          onMouseEnter={() => setIsOpened(true)}
          onMouseLeave={() => setIsOpened(false)}
        >
          <SideBar isOpened={isOpened} />
        </div>
        <div className="basis-full">{children}</div>
      </div>
    </main>
  );
};

export default ServiceManagerLayout;
