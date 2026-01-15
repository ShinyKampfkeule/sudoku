interface Props {
  number: string;
  activeField: number;
  index: number;
}

export const SolutionField = ({ number, activeField, index }: Props) => {
  let numberClasses = `w-12 h-12 rounded-xl flex justify-center items-center ${
    activeField === index && "border-white border-2"
  }`;

  if (number !== "x") {
    switch (number) {
      case "1":
        numberClasses += " bg-[#4152F1] border-[#1E298E] border-1";
        break;
      case "2":
        numberClasses += " bg-[#009700] border-[#006200] border-1";
        break;
      case "3":
        numberClasses += " bg-[#790CFF] border-[#2E065F] border-1";
        break;
      case "4":
        numberClasses += " bg-[#DA8F03] border-[#9B6500] border-1";
        break;
      case "5":
        numberClasses += " bg-[#FF60DF] border-[#993585] border-1";
        break;
      case "6":
        numberClasses += " bg-[#46B57A] border-[#1F5237] border-1";
        break;
      case "7":
        numberClasses += " bg-[#E23250] border-[#621623] border-1";
        break;
      case "8":
        numberClasses += " bg-[#23B0B7] border-[#0E4A4D] border-1";
        break;
      case "9":
        numberClasses += " bg-[#933EC8] border-[#39174E] border-1";
        break;
    }
  }

  return (
    <div className={numberClasses}>
      {number !== "x" && <span className="text-3xl text-white">{number}</span>}
    </div>
  );
};
