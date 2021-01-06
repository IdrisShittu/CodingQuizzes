function ascDesNone(arr, str) {
 return arr.sort((a, b) => {
      if (str === "Asc") {
        return a - b;
      } else if (str === "Des") {
        return b - a;
      } else {
        return arr;
      }
    });
  };