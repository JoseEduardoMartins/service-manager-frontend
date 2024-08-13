type headerListType = {
  label: string;
  value: string | number | boolean | Date;
};

type ListType = {
  title: string;
  headerList: headerListType[];
};

export const List = ({ title, headerList }: ListType) => {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <h1 className="text-white text-3xl font-bold">{title}</h1>
      <div className="w-full h-10 border rounded-lg"></div>
      <div className="w-full border rounded-lg"></div>
    </div>
  );
};
