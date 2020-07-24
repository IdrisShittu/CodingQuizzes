function centuryFromYear(year) {
  if(year%100 == 0 )return year/100
  return Number((year/100 +1).toFixed(0))
}