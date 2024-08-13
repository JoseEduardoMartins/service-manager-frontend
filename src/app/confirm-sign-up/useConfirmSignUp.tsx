import { AuthContext } from "@/contexts/AuthContext";
import { delay } from "@/common/delay-utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { confirmSignUpSchema } from "./shemas";
import { ConfirmSignUpType } from "./types";

export const useConfirmSignUp = () => {
  const router = useRouter();
  const { confirmSignUp } = useContext(AuthContext);

  const methods = useForm<ConfirmSignUpType>({
    resolver: zodResolver(confirmSignUpSchema),
  });

  const handleSubmit = async (data: ConfirmSignUpType) => {
    try {
      await confirmSignUp(data);

      alert("sucesso");

      await delay(5000);

      router.push("/sign-in");
    } catch (error) {
      alert("erro");
    }
  };

  return {
    methods,
    handleSubmit,
  };
};
