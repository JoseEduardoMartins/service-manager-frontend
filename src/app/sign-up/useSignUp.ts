import { AuthContext } from "@/contexts/AuthContext";
import { delay } from "@/utils/delay-utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { signUpSchema } from "./schemas";
import { SignUpType } from "./types";

export const useSignUp = () => {
  const router = useRouter();
  const { signUp } = useContext(AuthContext);

  const methods = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
  });

  const handleSubmit = async (data: SignUpType) => {
    try {
      await signUp(data);

      alert("sucesso");

      await delay(5000);

      router.push("/confirm-sign-up");
    } catch (error) {
      console.log(error);

      alert("error");
    }
  };

  return {
    methods,
    handleSubmit,
  };
};
