import React from "react";

// INTERFACES => Creates a new type, describing the property names and value types of an object

interface Reportable {
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

const drink = {
  color: "orange",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `The color is ${this.color}`;
  },
};

const printItem = (item: Reportable): void => {
  console.log(item.summary());
};

printItem(oldFord);
printItem(drink);
