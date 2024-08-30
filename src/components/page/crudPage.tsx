import { ReactNode } from "react";
import { Title } from "../title";
import { Description } from "./description";

type ActionProps = {
  icon: string;
  label: string;
  type: "button" | "iconButton";
  onClick: (value: any) => void;
};

type CrudPageProps = {
  icon: string;
  title: string;
  description?: string;
  actions: ActionProps[];
  children: ReactNode;
};

export const CrudPage = ({ title, description, children }: CrudPageProps) => (
  <div className="w-full h-full p-8 flex flex-col gap-4">
    <div className="flex flex-col gap-1">
      <div>
        <Title>{title}</Title>
      </div>
      {description && <Description>{description}</Description>}
    </div>
    <div>{children}</div>
  </div>
);
