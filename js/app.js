const item = document.querySelector('#item');
const toDoBox = document.querySelector('#to-do-box');

item.addEventListener(
    'keyup',
    function(event) {
        if (event.key === 'Enter') {
            addToDo(this.value);
            this.value = "";
        }
    }
);

const addToDo = (itemText) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${itemText}
        <i class="fa fa-times"></i>
    `;

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    );

    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove();
        }
    );

    toDoBox.appendChild(listItem);
};
