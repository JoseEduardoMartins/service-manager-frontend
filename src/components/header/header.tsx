import Image from "next/image";
import profile from "@/assets/user.png";

export const Header = () => {
  return (
    <header className="w-full h-16 p-3 border-b border-gray-400 flex justify-between items-center">
      <div className="text-2xl text-white">Gerenciador de Serviços</div>
      <div className="rounded-full bg-neutral-600 p-2">
        <Image
          src={profile}
          alt="Picture of the author"
          width={32}
          height={32}
        />
      </div>
    </header>
  );
};
