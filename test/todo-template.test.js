import template from '../src/todo-template.js';
const test = QUnit.test;

test('make template for todo data, true', assert => {
    //arrange
    const todo = {
        task: 'learn templates',
        completed: true
    };
    const expected = /*html*/`
    <li>
        <input type="checkbox" checked>learn templates
    </li>
    `;
    //act
    const html = template(todo);
    //assert
    assert.htmlEqual(html, expected);
});

test('make template for todo data, false', assert => {
    //arrange
    const todo = {
        task: 'learn templates',
        completed: false
    };
    const expected = /*html*/`
    <li>
        <input type="checkbox" >learn templates
    </li>
    `;
    //act
    const html = template(todo);
    //assert
    assert.htmlEqual(html, expected);
});