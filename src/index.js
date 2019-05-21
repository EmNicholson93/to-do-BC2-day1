import template from './todo-template.js';
import htmlToDOM from './html-to-DOM.js';
import todos from '../data/todo-list.js';

const todoList = document.getElementById('todo');

todos.forEach(todo => {
    const html = template(todo);
    const dom = htmlToDOM(html);
    todoList.appendChild(dom);
});