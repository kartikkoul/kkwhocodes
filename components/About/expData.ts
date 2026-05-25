import { reducePeriodInMonths } from "../Utils/date";

const formatPeriod = (date1: Date, date2?: Date): string => {
    const leftParts = date1.toDateString().split(" ");
    const leftBound = `${leftParts[1]} ${leftParts[3]}`;
  
    let rightBound: string;
    let period: number;
  
    if (date2 instanceof Date) {
      const rightParts = date2.toDateString().split(" ");
      rightBound = `${rightParts[1]} ${rightParts[3]}`;
      period = Math.floor(
        Math.abs(date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24) / 30,
      );
    } else {
      const presentDate = new Date();
      rightBound = "Present";
      period = Math.floor(
        Math.abs(presentDate.getTime() - date1.getTime()) /
          (1000 * 60 * 60 * 24) /
          30,
      );
    }
  
    let periodString: string;
    if (period > 12) {
      const { months, years } = reducePeriodInMonths(period);
      periodString = `${years} years, ${months} months`;
    } else {
      periodString = `${period} months`;
    }
  
    return `${leftBound} - ${rightBound} (${periodString})`;
  };

export const expData =[
    {
      id: 1,
      title: "Web Developer",
      company: "Tech Table",
      period: formatPeriod(new Date(2021, 0, 1), new Date(2021, 6, 1)),
      imageUrl: "/assets/images/techtableicon.png",
    } ,
    {
      id: 2,
      title: "Freelancer",
      company: "Self-Employed",
      period: formatPeriod(new Date(2021, 7, 1), new Date(2022, 3, 11)),
      imageUrl: "/assets/images/stay-at-home.png",
    },
    {
      id: 3,
      title: "SDE-1",
      company: "AVRL",
      period: formatPeriod(new Date(2022, 3, 11)),
      imageUrl: "/assets/images/avrl.jpg",
    }
  ];