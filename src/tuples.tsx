import React from "react";

// Tuples must always have the correct order

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const cola: [string, boolean, number] = ["brown", true, 40];
// If I try the change the order I will be thrown an error message. E.g below:
// cola[0] = 10;

// Tuples are not used vey often as they do not give enought information (just the value but how do we know what the value is referring too?)

// Or we can do a 'type alias'. This stops repeated code as we have created 'Drink' which is re-usable E.g below:
type Drink = [string, boolean, number];
const sprite: Drink = ["clear", true, 30];
