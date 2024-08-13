import { find, Service } from "@/services";
import { useEffect, useState } from "react";

type Filters = Partial<Omit<Service, "id">>;

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [filters, setFilters] = useState<Filters>({});

  const loadService = async () => {
    try {
      const selects = ["id", "name", "recommendedPrice"];
      const response = await find({ selects, filters });

      setServices(response);
    } catch (error) {}
  };

  useEffect(() => {
    loadService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return { services, filters, setFilters };
};
