const myLibrary = [];


// OBJECT CONSTRUCTOR
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


// Add a method to the Book prototype to toggle the read status
Book.prototype.toggleStatus = function() {
    this.status = this.status === 'read' ? 'not read' : 'read';
};


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

        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);
        row.appendChild(statusCell);
        

        // Create a new cell for a toggle read-status button and a delete icon that removes row
        const actionCell = document.createElement('td');
        const toggleIcon = document.createElement('img');
        const deleteIcon = document.createElement('img');
        toggleIcon.src = 'img/read.svg';
        toggleIcon.alt = 'toggle read status';
        deleteIcon.src = 'img/delete.svg';
        deleteIcon.alt = 'delete';
        // Set a data attribute to associate the icons with the index of the book in the library array
        toggleIcon.dataset.index = index;
        deleteIcon.dataset.index = index;
        toggleIcon.addEventListener('click', toggleStatus);
        deleteIcon.addEventListener('click', removeBook);
        actionCell.appendChild(toggleIcon);
        actionCell.appendChild(deleteIcon);
        row.appendChild(actionCell);
    });
}


// Toggle the read status of a book
function toggleStatus(event) {
    const index = event.target.dataset.index; // Get the index of the book from the button's data attribute
    myLibrary[index].toggleStatus(); // Toggle the read status of the book
    updateTable(); 
}


// Remove a book from the library
function removeBook(event) {
    const index = event.target.dataset.index; // Get the index of the book from the data attribute
    myLibrary.splice(index, 1); // Remove the book from the library array
    updateTable();
}