import { ReactNode } from "react";

type TitleType = {
  children: ReactNode;
};

export const Title = ({ children }: TitleType) => (
  <h1 className="text-white text-3xl">{children}</h1>
);
