import { http } from "../config/http";
import { GenericCreateResponse } from "@/common/interfaces/generic-response";

export type Service = {
  id?: number;
  name: string;
  description?: string;
  recommendedPrice: number;
  providerId: number;
};

type FindParams = {
  selects: string[];
  filters: {};
};

type FindResponse = Service[];

export const find = async (params: FindParams): Promise<FindResponse> => {
  const { data } = await http.get("/services");

  return data;
};

type SaveData = Omit<Service, "id">;

type SaveResponse = GenericCreateResponse;

export const save = async (body: SaveData): Promise<SaveResponse> => {
  const { data } = await http.post("/services", body);
  return data;
};

type UpdateData = Partial<Omit<Service, "id">>;

export const update = async (id: number, body: UpdateData): Promise<void> => {
  await http.put(`/services/${id}`, body);
};

export const remove = async (id: number) => {
  await http.delete(`/services/${id}`);
};
