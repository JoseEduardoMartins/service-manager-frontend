"use client";

import { FaPlus, FaSearch } from "react-icons/fa";

import { ReactNode } from "react";
import { Title } from "../title";
import { Button } from "../form";

type ColumsType = {
  key: string;
  label?: string;
  render?: ReactNode;
  formater?: (data: string | number | boolean) => ReactNode;
};

type ListType = {
  title?: string;
  colums: ColumsType[];
  rows: any[];
};

export const Table = ({ title, colums }: ListType) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        {title && <Title>{title}</Title>}
        <Button type="button">
          <FaPlus />
          Adicionar
        </Button>
      </div>

      <div className="flex flex-row gap-2 border border-transparent border-gray-400 rounded-lg">
        <div className="w-full border">filtro</div>
        <Button type="button">
          <FaSearch />
          Buscar
        </Button>
      </div>

      <table className="w-full border border-gray-400 rounded-lg text-white">
        <thead>
          <tr>
            {colums?.map((colum) => (
              <th key={colum.key}>{colum.label}</th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};
