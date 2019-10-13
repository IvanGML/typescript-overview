import Axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com/todos/4';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

Axios.get(URL).then(response => {
    logPrettierResponse(response.data);
});

const logPrettierResponse = (data: Todo): void => {
    const {id, title, completed} = data;
    console.log(`Todo with id: ${id}\nTitle of todo is: ${title}\nIs this todo completed? ${completed ? 'yes' : 'no'}`);
};