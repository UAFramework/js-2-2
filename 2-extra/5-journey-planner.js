/*
  This exercise was also in JS1 week 4, but you didn't know about objects yet.
  It's more clear with objects than with arrays!
  Feel free to look at your solution to that one to help you out - you already did this once!
  -----------------------------------------------------------------------
  Write a function journeyPlanner that:
  - Accepts two paramters:
    1) An object where the keys are locations and the values are arrays of the transportation modes you can use to get there.
       e.g.
       {
           Angel: ["tube", "bus"],
           "London Bridge": ["tube", "river boat"],
       }
    2) A string containing a transport mode
       e.g. "bus"
  - Returns an array of where I can go if I only want to use a specific mode of transport.
  NOTE: Only the location names should be returned, as strings.
  When you finish the exercise, think about how this solution is different to your last solution.
  What's better about each approach?
*/
// Previous solution
// function journeyPlanner(locations, transportMode) {
//   let availableLocations = [];
//   for (let place in locations) {
//     if (locations[place].includes(transportMode)) {
//       availableLocations.push(place);
//     }
//   }
//   return availableLocations;
// }

function journeyPlanner(locations, transportMode) {
  let availableLocations = [];
  availableLocations = Object.entries(locations)
    .filter(([location, transport]) => transport.includes(transportMode))
    .flatMap(([location, transport]) => location)
  return availableLocations;
}

/* ======= TESTS - DO NOT MODIFY ===== 
- To run the tests for this exercise, run `npm test -- --testPathPattern journey-planner.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/
const londonLocations = {
  Angel: ["tube", "bus"],
  "London Bridge": ["tube", "river boat"],
  "Tower Bridge": ["tube", "bus"],
  Greenwich: ["bus", "river boat"],
};

test("journeyPlanner function works - case 1", () => {
  expect(journeyPlanner(londonLocations, "river boat")).toEqual([
    "London Bridge",
    "Greenwich",
  ]);
});

test("journeyPlanner function works - case 2", () => {
  expect(journeyPlanner(londonLocations, "bus")).toEqual([
    "Angel",
    "Tower Bridge",
    "Greenwich",
  ]);
});

test("journeyPlanner function works - case 3", () => {
  expect(journeyPlanner(londonLocations, "tube")).toEqual([
    "Angel",
    "London Bridge",
    "Tower Bridge",
  ]);
});
