// Ram Aditya Nandula - 6/24/21
// Odin Project - Library

let myLibrary = [];

function Book(title, author, pages, hasBeenRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasBeenRead = hasBeenRead
}

function displayBooks() {

}

window.onload = function () {
//     let title = prompt("Enter the book title: ")
//     let author = prompt("Enter the book author: ")
//     let numPages = prompt("Enter the book pages: ")
//     let hasBeenRead = prompt("Enter whether the book has been read: ")

//     const book = new Book(title, author, numPages, hasBeenRead)
//     myLibrary.push(book)
    closeForm();
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    // alert("Hello World!");
    openForm();
});

function openForm() {
    document.querySelector('#myForm').style.display = "block";
}
  
function closeForm() {
    document.querySelector('#myForm').style.display = "none";
} 