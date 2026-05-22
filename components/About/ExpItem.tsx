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
    <div className="flex w-full items-center justify-between">
      <div>
        <h3 className="m-0 text-[1rem] font-medium text-[#bba2ff] [text-shadow:0px_0px_1px_#bba2ff]">
          {title} <small>at {company}</small>
        </h3>
        <p className="m-0 text-[0.75rem] text-[#817997]">{period}</p>
      </div>
      <div className="ml-4 h-8 w-8 overflow-hidden rounded-full border-2 border-[#817997] bg-[#e1dee9]">
        <Image src={imageUrl} width={32} height={32} alt={company} />
      </div>
    </div>
  );
};

export default ExpItem;
