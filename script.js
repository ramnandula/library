// Ram Aditya Nandula - 6/24/21
// Odin Project - Library

let myLibrary = [];

function Book(title, author, pages, hasBeenRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasBeenRead = hasBeenRead
}

function addBookToLibrary(title, author, numPages, hasBeenRead) {
    const book = new Book(title, author, numPages, hasBeenRead);
    myLibrary.push(book);
    console.log(myLibrary)
    console.log("added book");
}

function removeBookFromLibrary() {
    console.log("book removed");
}

function clearTable() {
    const table = document.querySelector('#library');
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

function displayLibrary() {
    clearTable();
    const table = document.querySelector('#library');
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const row = table.insertRow(i);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerHTML = book.title;
        cell2.innerHTML = book.author;
        cell3.innerHTML = book.pages;
        cell4.innerHTML = book.hasBeenRead;
        
        const edit = document.createElement('button');
        edit.innerHTML = "EDIT";
        edit.className = "edit-button";
        cell5.appendChild(edit);
        edit.addEventListener('click', () => {
            removeBookFromLibrary();
        });
        // cell6.innerHTML = '<button>Remove</button>';
        // cell7.innerHTML = '<input type="checkbox" id="read" required>';
    }
    console.log("displayed book");
}

// window.onload = function () {
//     closeForm();
// }

// const editBtn = document.querySelector('.edit-button');
// if (editBtn) {
//     console.log("edit clicked");
//     editBtn.addEventListener('click', function (e) {
//         console.log(e);
//     });
// }


const newBtn = document.querySelector('.new-button');
newBtn.addEventListener('click', () => {
    openForm();
});

const addBtn = document.querySelector('.add-button');
addBtn.addEventListener('click', function (e) {
    e.preventDefault(); 
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const numPages = document.querySelector('#pages').value;
    const hasBeenRead = document.querySelector('#read').checked;
    // console.log(hasBeenRead)
    // alert(title + " " + author + " " + numPages + " " + hasBeenRead);

    addBookToLibrary(title, author, numPages, hasBeenRead);
    displayLibrary();
});

const closeBtn = document.querySelector('.cancel-button');
closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    closeForm();
});

function openForm() {
    document.querySelector('#myForm').style.display = "block";
}

function closeForm() {
    document.querySelector('#myForm').style.display = "none";
}