function template(todo) {
    let checked = '';

    if(todo.completed) {
        checked = 'checked';
    }

    return /*html*/`
    <li>
        <input type="checkbox" ${checked}>learn templates
    </li>
    `;
}

export default template;