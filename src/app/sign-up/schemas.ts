import { formatPhone } from "@/utils/formatters/number-formatter";
import { z } from "zod";

export const signUpSchema = z.object({
  name: z
    .string({
      message: "Campo de preenchimento obrigatório",
    })
    .min(1, "Campo precisa de no minimo 1 caracter")
    .max(150, "Campo pode ter no maximo 150 caracteres"),
  birthdate: z.coerce
    .string()
    .date()
    .refine((date) => new Date(date) < new Date(), {
      message: "Campo deve ser uma data menor que a atual",
    })
    .refine((date) => new Date(date) > new Date("1900-01-01"), {
      message: "Campo deve ser uma data maior que ",
    }),
  phone: z
    .string({
      message: "Campo de preenchimento obrigatório",
    })
    .min(17, "Campo precisa de no minimo 17 caracters")
    .max(19, "Campo pode ter no maximo 19 caracteres")
    .refine((value) => formatPhone(value)),
  taxId: z.string({
    message: "Campo de preenchimento obrigatório",
  }),
  email: z
    .string({
      message: "Campo de preenchimento obrigatório",
    })
    .email({
      message: "Campo deve ser um e-mail valido",
    })
    .min(1, "Campo precisa de no minimo 1 caracter")
    .max(150, "Campo pode ter no maximo 150 caracteres"),
  password: z
    .string({
      message: "Campo de preenchimento obrigatório",
    })
    .min(8, "Campo precisa de no minimo 8 caracteres")
    .max(50, "Campo pode ter no maximo 50 caracteres"),
});
