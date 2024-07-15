import { AuthContext } from "@/contexts/AuthContext";
import { delay } from "@/utils/delay-utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { signInSchema } from "./schemas";
import { SignInType } from "./types";

export const useSignIn = () => {
  const router = useRouter();
  const { signIn } = useContext(AuthContext);

  const methods = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
  });

  const handleSubmit = async (data: SignInType) => {
    try {
      await signIn(data);

      alert("sucesso");

      await delay(5000);

      router.push("/service-manager");
    } catch (error) {
      alert("erro");
    }
  };

  return {
    methods,
    handleSubmit,
  };
};
