import React from "react";

// Hover over the variable to see the type that typescript presumes
const carMakers = ["Ford", "Mercedes", "Audi"];
const dates = [new Date(), new Date()];
const carsByMake = [["Ford"], ["Bentley"], ["Audi"]];

// If there is no value yet then the type needs to be declared
const newCars: string[] = [];

// Why are types good for Arrays?
// 1) Help with inference when extracting values - hover to see
const car = carMakers[0];

// 2) Prevent incompatible values - this should not be a number; only strings
// This one will error out as it is not the right type
carMakers.push(100);

// 3) Helps with 'map'. The value that gets passed into the function will be the same type as the parent we are mapping through
carMakers.map((car: string): string => {
  return car.toUpperCase();
  // As above we also get access to other Javascript functions
});

// 4) Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-01-01");
importantDates.push(new Date());
// This one will error out as it is not the right type
importantDates.push(100);
