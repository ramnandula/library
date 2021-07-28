// Ram Aditya Nandula - 7/19/21
// Odin Project - Library

let myLibrary = []; // array of books

// object constructor
function Book(title, author, pages, hasBeenRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.hasBeenRead = hasBeenRead;
}

// creates and stores book object into library
function addBookToLibrary(title, author, numPages, hasBeenRead) {
	const book = new Book(title, author, numPages, hasBeenRead);
	myLibrary.push(book);
}

// saves the whole library array to localStorage
function saveLibrary() {
	localStorage.setItem('library', JSON.stringify(myLibrary));
}

// looks for library array in localStorage
function retrieveLibrary() {
	if (localStorage.getItem('library')) {
		const library = localStorage.getItem('library');
		myLibrary = JSON.parse(library);
		displayLibrary();
	}
	else {
		myLibrary = [];
	}
}

// clears page 
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

		// displays book info on table
		cell1.innerHTML = book.title;
		cell2.innerHTML = book.author;
		cell3.innerHTML = book.pages + " pages";
		cell4.innerHTML = book.hasBeenRead ? "Been read" : "Not been read";

		// changes the read status
		const changeBtn = document.createElement('button');
		changeBtn.innerHTML = "Change Read Status";
		cell5.appendChild(changeBtn);
		changeBtn.addEventListener('click', () => {
			const index = changeBtn.parentNode.parentNode.rowIndex;
			console.log(index);
			const book = myLibrary[index];

			if (book.hasBeenRead) {
				book.hasBeenRead = false;
			}
			else {
				book.hasBeenRead = true;
			}
			saveLibrary();
			displayLibrary();
		});

		// removes the book from the library
		const removeBtn = document.createElement('button');
		removeBtn.innerHTML = "Remove Book";
		cell6.appendChild(removeBtn);
		removeBtn.addEventListener('click', () => {
			const index = removeBtn.parentNode.parentNode.rowIndex;
			console.log(index);
			myLibrary.splice(index, 1);
			saveLibrary();
			displayLibrary();
		});
	}
}

// brings up a form allowing users to input the details for the new book
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

	if (title.trim().length != 0 && author.trim().length != 0 && numPages.length != 0) {
		addBookToLibrary(title, author, numPages, hasBeenRead);
		saveLibrary();
		displayLibrary();
	}
});

// closes the form
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

retrieveLibrary();