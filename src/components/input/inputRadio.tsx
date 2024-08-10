import { useFormContext } from "react-hook-form";
import { OptionType } from "../formField";

type CheckBoxType = {
  name: string;
  options: OptionType[];
  required?: boolean;
  dependencies?: Array<string>;
};

export const InputRadio = ({
  name,
  options,
  required,
  dependencies,
}: CheckBoxType) => {
  const { register, watch } = useFormContext();

  const values =
    dependencies && dependencies.length > 0 ? watch(dependencies) : [];

  const isDisabled =
    dependencies && dependencies.length > 0
      ? values.some((value) => !value)
      : false;

  return (
    <div className="w-full flex flex-row gap-5">
      {options?.map((option, index) => (
        <div className="flex flex-row gap-2 items-center" key={index}>
          <div className="flex items-center justify-center rounded-full bg-white w-[18px] h-[18px] m-[11px] hover:h-10 hover:w-10 hover:m-0 hover:bg-emerald-400 focus:outline-primary">
            <label className="flex justify-center align-center items-center rounded-full h-[18px] w-[18px] bg-white">
              <input
                className="appearance-none rounded-full h-2.5 w-2.5 border-none checked:border checked:border-2 checked:border-gray-500 checked:bg-emerald-500 peer relative"
                type="radio"
                {...register(name, {
                  required,
                })}
                value={option.value}
                disabled={isDisabled}
              />
              <div className="absolute m-auto w-[18px] h-[18px] border border-2 border-gray-600 rounded-full"></div>
            </label>
          </div>
          <label className="text-white">{option.label}</label>
        </div>
      ))}
    </div>
  );
};
