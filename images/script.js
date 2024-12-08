//fetch = function used for making HTTP requests to fetch resources.
//(JSON style data, images, files)
// Simplifies asynchronous data fetching in javascript and used for interacting with API'S to retrieve and send data asynchronously over the web



document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('item-input');
    const addItemButton = document.getElementById('add-item');
    const shoppingList = document.getElementById('shopping-list');
    const clearListButton = document.getElementById('clear-list');

    addItemButton.addEventListener('click', () => {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            addItem(itemText);
            itemInput.value = '';
            itemInput.focus();
        }
    });

    shoppingList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            togglePurchased(event.target);
        } else if (event.target.classList.contains('edit-button')) {
            editItem(event.target.parentElement);
        }
    });

    clearListButton.addEventListener('click', () => {
        clearList();
    });

    function addItem(itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-button';
        li.appendChild(editButton);

        shoppingList.appendChild(li);
    }

    function togglePurchased(item) {
        item.classList.toggle('purchased');
    }

    function clearList() {
        shoppingList.innerHTML = '';
    }

    function editItem(item) {
        const newName = prompt('Edit item:', item.firstChild.textContent);
        if (newName) {
            item.firstChild.textContent = newName;
        }
    }
});
