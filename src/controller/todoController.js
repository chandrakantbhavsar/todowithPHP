export const fetchTodos = async () => {
    const action = 'getTodos';
    const response = await fetch(`http://localhost/ckProject/service.php?action=${action}`);
    return response.json();
}

export const insertTodo = async (todo) => {
    const action = 'insertTodo';
    const response = await fetch(`http://localhost/ckProject/service.php?action=${action}&todo=${todo}`);
    return response.json();
}

export const deleteTodo = async (id) => {
    const action = 'deleteTodo';
    const response = await fetch(`http://localhost/ckProject/service.php?action=${action}&id=${id}`);
    return response.json();
}