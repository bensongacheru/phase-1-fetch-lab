function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => renderBooks(data));
}

function renderBooks(books) {
  // Assuming you have an element with id "books-list" in your HTML
  const booksList = document.getElementById("books-list");

  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book.name; // Displaying book name, adjust as needed
    booksList.appendChild(li);
  });
}

// Call fetchBooks when the page loads
document.addEventListener("DOMContentLoaded", fetchBooks);


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
