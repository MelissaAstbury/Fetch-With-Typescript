import React from "react";

// INTERFACES => Creates a new type, describing the property names and value types of an object

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  sold: Date;
  summary(): string;
}

const oldFord = {
  name: "focus",
  year: 1998,
  broken: true,
  sold: new Date(),
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldFord);
