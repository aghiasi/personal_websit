export const formater = (param: any): number | undefined => {
  if (param % 1 !== 0) {
    const dec = param - Math.floor(param);
    const testCondition = parseFloat(dec.toFixed(2));
    if (testCondition >= 0.6) {
      const round = param - 0.6;
      return 1 + parseFloat(round.toFixed(2));
    }
  } else {
    return param;
  }
};
