// function showTodo(todo: { title: string; text: string }) {
//     console.log(todo)
// }

// showTodo({ title: "Yo", text: "me" });


interface Todo {
    title: string;
    text: string;
}

function showTodo(todo: Todo) {
    console.log(todo)
}

showTodo({ title: "Yo", text: "me" });
