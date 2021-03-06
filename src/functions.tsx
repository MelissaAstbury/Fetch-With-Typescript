import React from "react";

// This function takes in 2 type numbers amd also have a return of type number
const addNumber = (a: number, b: number): number => {
  return a + b;
};

// The below will have type return of number:
const addNumbers = (a: number, b: number) => {
  return a + b;
};

// The below will have type retun of void:
const addNum = (a: number, b: number) => {
  a + b;
};

// Destructure type
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
