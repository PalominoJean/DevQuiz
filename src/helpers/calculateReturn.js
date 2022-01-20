export const calculateReturn = (gasStations, costs, initialIndex) => {
  let currentTank = 0;
  let response = initialIndex;

  const stationsCosts = gasStations.map((el, index) => [
    Number(el),
    costs[index],
  ]);
  const stationsCostsOrdered = [
    ...stationsCosts.slice(initialIndex),
    ...stationsCosts.slice(0, initialIndex),
  ];

  stationsCostsOrdered.forEach((el) => {
    currentTank = currentTank + el[0];
    if (currentTank >= el[1]) {
      currentTank = currentTank - el[1];
    } else {
      response = -1;
      return;
    }
  });
  return response;
};
