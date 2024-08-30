import { ReactNode } from "react";
import { Title } from "../title";
import { Description } from "./description";

type PageType = {
  title?: string;
  description?: string;
  children: ReactNode;
};

export const Page = ({ title, description, children }: PageType) => (
  <div className="w-full h-full p-8 flex flex-col gap-4">
    {title && description && (
      <div className="flex flex-col gap-1">
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
      </div>
    )}
    <div>{children}</div>
  </div>
);
