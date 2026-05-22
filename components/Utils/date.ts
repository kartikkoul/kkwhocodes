export const reducePeriodInMonths = (
  months: number
): { months: number; years: number } => {
  let years = 0;
  while (months > 12) {
    months -= 12;
    years += 1;
  }
  return { months, years };
};

export default reducePeriodInMonths;
