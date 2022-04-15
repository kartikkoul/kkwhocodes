const reducePeriodInMonths = (months)=>{
    if(months>12){
      months -= 12;
      periodInYears++;
      return reducePeriodInMonths(months);
    }
    return months
  }

export default reducePeriodInMonths;