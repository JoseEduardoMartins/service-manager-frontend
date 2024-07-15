"use client";

import { SideBar } from "@/components";
import { ServiceManagerLayoutType } from "./types";

const ServiceManagerLayout = ({ children }: ServiceManagerLayoutType) => {
  return (
    <main className="w-full min-h-screen p-8 flex flex-row gap-8">
      <div className="basis-1/5 border">
        <SideBar />
      </div>
      <div className="basis-4/5 border">{children}</div>
    </main>
  );
};

export default ServiceManagerLayout;
