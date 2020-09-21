import React from "react";

// Function defined within an object using types
const profile = {
  name: "melissa",
  age: 22,
  coords: {
    lng: 0,
    lat: 15,
  },
  setAge(age: number): void {
    age = age;
  },
};

// Pull out the age property
const { age }: { age: number } = profile;

// Pull out the coords property. We have to double up from the types as each property may have a different type
const {
  coords: { lng, lat },
}: { coords: { lng: number; lat: number } } = profile;
