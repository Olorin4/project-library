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


function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status)
    myLibrary.push(newBook);

    // Update the table with the new book data
    updateTable();
}

// Function to update the table with book data
function updateTable() {
    const tableBody = document.getElementById('book-table-body');
    tableBody.innerHTML = ''; // Clear existing table rows

    // Loop through each book in the library
    myLibrary.forEach(book => {
        // Create a new table row
        const row = document.createElement('tr');

        // Create table data cells for each book property
        const titleCell = document.createElement('td');
        titleCell.textContent = book.title;

        const authorCell = document.createElement('td');
        authorCell.textContent = book.author;

        const pagesCell = document.createElement('td');
        pagesCell.textContent = book.pages;

        const statusCell = document.createElement('td');
        statusCell.textContent = book.status;

        // Append cells to the row
        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);
        row.appendChild(statusCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}


// Add event listener to the form for submitting book data
const bookForm = document.querySelector('form');

bookForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent reloading upon submission

    // Get form data
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('author-name').value;
    const pages = parseInt(document.getElementById('page-count').value);
    const status = document.querySelector('input[name="read-status"]:checked').value;

    // Add book to library
    addBookToLibrary(title, author, pages, status);

    // Clear form inputs
    bookForm.reset();
})
