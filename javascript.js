const myLibrary = [];

// OBJECT CONSTRUCTOR
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status)
    myLibrary.push(newBook);
    updateTable();
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


// Function to update the table with book data
function updateTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';            // Clear existing table rows

    // Loop through each book in the library
    myLibrary.forEach((book, index) => {

        // Create a new row and append it to the tbody
        const row = document.createElement('tr');
        tableBody.appendChild(row);   

        // Create new cells and append them to the new row
        const titleCell = document.createElement('td');
        const authorCell = document.createElement('td');
        const pagesCell = document.createElement('td');
        const statusCell = document.createElement('td');

        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        pagesCell.textContent = book.pages;
        statusCell.textContent = book.status;

        // Create a delete button to remove row
        const removeCell = document.createElement('td');
        const deleteIcon = document.createElement('img');
        deleteIcon.src = 'img/delete.svg';
        deleteIcon.alt = 'delete';
        // Set a data attribute to associate the button with the index of the book in the library array
        deleteIcon.dataset.index = index;
        deleteIcon.addEventListener('click', removeBook);

        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);
        row.appendChild(statusCell);
        row.appendChild(removeCell);
        removeCell.appendChild(deleteIcon);
    });
}

// Remove a book from the library
function removeBook(event) {
    const index = event.target.dataset.index; // Get the index of the book from the data attribute
    myLibrary.splice(index, 1); // Remove the book from the library array
    updateTable(); // Update the table to reflect the changes
}