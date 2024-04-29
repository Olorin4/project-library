const myLibrary = [];


// OBJECT CONSTRUCTOR
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () {
        console.log(this === book);
        return `Title: ${this.title} by ${this.author}\nPages: ${this.pages}\nStatus: ${this.status}`;
    };
}

const book = new Book('The Hobbit', "J.R.R. Tolkien", 295, "read");
console.log(book.info());

function addBookToLibrary() {
    // do stuff here
  }