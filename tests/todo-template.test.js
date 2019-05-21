const test = QUnit.test;

function template() {
    return /*html*/`
    <li>
        <input type="checkbox" name="task">learn templates
    </li>
    `;
}

test('make template for todo data', assert => {
    //arrange
    const todo = {
        task: 'learn templates',
        completed: true
    }
    const expected = /*html*/`
    <li>
        <input type="checkbox" name="task">learn templates
    </li>
    `;
    //act
    const html = template(todo);
    //assert
    assert.htmlEqual(html, expected);
});