import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it completed? ${completed}`);
};

// Functions that return type any:

// const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json);
// console.log(coordinates);

//THIS WILL RETURN TYPE ANY

//TO STOP THIS RETURNING TYPE ANY:
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//NOW THIS WILL RETURN TYPE NUMBER INSTEAD OF ANY

//Now lets try the declare a variable on one line but initialize later on
let words = ["red", "blue", "yellow"];
//this is the declarasation of foundWord
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    //this is the initialisation of foundWord
    foundWord = true;
  }
}

//Another example is that you can asign more than one type.
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
