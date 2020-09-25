import React from "react";

// INTERFACES => Creates a new type, describing the property names and value types of an object

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldFord = {
  name: "focus",
  year: 1998,
  broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldFord);
