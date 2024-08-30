import { Table } from "@/components";
import { Page } from "@/components/page";

export default function Services() {
  const colums = [
    {
      key: "name",
      label: "Nome",
    },
    {
      key: "recommendedPrice",
      label: "Preço Remendado",
    },
    {
      key: "action",
      label: "Ações",
    },
  ];

  return (
    <Page>
      <Table title="Serviços" colums={colums} rows={[]} />
    </Page>
  );
}
