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
