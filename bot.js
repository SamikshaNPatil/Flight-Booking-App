// bot.js
const flights = require('./flightData');

function searchFlights(from, to, date) {
  return flights.filter(
    f =>
      f.from.toLowerCase() === from.toLowerCase() &&
      f.to.toLowerCase() === to.toLowerCase() &&
      f.date === date
  );
}

function getBestFlight(flightList) {
  return flightList.reduce((prev, curr) => (curr.price < prev.price ? curr : prev), flightList[0]);
}

function handleUserInput(input) {
  const travelRegex = /from (.+?) to (.+?) on (\d{4}-\d{2}-\d{2})/i;
  const match = input.match(travelRegex);

  if (match) {
    const [, from, to, date] = match;
    const availableFlights = searchFlights(from, to, date);

    if (availableFlights.length === 0) {
      return `No flights found from ${from} to ${to} on ${date}.`;
    }

    const bestFlight = getBestFlight(availableFlights);

    return (
      `Found ${availableFlights.length} flights from ${from} to ${to} on ${date}.\n` +
      `Best option: ${bestFlight.airline} @ ₹${bestFlight.price}\n` +
      `Do you want to book this ticket? (yes/no)`
    );
  }

  return "Please enter your travel details like: 'from Mumbai to Delhi on 2025-07-10'";
}

module.exports = { handleUserInput };
