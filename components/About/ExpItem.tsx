import Image from "next/image";

export interface ExpItemProps {
  id?: number;
  title: string;
  company: string;
  period: string;
  imageUrl: string;
}

const ExpItem = ({ title, company, period, imageUrl }: ExpItemProps) => {
  return (
    <div className="flex w-full min-w-0 items-center justify-between gap-2">
      <div className="min-w-0 flex-1">
        <h3 className="m-0 text-[0.9rem] font-medium leading-snug text-[#bba2ff] [text-shadow:0px_0px_1px_#bba2ff] sm:text-[1rem]">
          {title}{" "}
          <small className="text-[0.85em]">at {company}</small>
        </h3>
        <p className="m-0 text-[0.6rem] leading-tight text-[#817997] sm:text-[0.65rem]">
          {period}
        </p>
      </div>
      <div className="ml-2 h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-[#817997] bg-[#e1dee9] sm:ml-4">
        <Image src={imageUrl} width={32} height={32} alt={company} />
      </div>
    </div>
  );
};

export default ExpItem;
