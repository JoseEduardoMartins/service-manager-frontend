import { List } from "@/components";

export default function Services() {
  const headerList = [
    {
      label: "Nome",
      value: "name",
    },
    {
      label: "Preço Remendado",
      value: "recommendedPrice",
    },
  ];

  return (
    <div className="w-full h-full p-8">
      <List title={"Seus Serviços"} headerList={headerList} />
    </div>
  );
}
