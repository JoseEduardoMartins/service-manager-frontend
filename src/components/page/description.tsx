import { ReactNode } from "react";

type DescriptionType = {
  children: ReactNode;
};

export const Description = ({ children }: DescriptionType) => (
  <div className="text-white text-md">{children}</div>
);
