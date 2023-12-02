// Function to implement search functionality
function search() {
    var titleInput = document.getElementById('book_title');
    var genreInput = document.getElementById('book_genre');
    var titleFilter = titleInput.value.toUpperCase();
    var genreFilter = genreInput.value.toUpperCase();
    var bookList = document.getElementsByClassName('box');
  
    // Loop through all book items and hide those that don't match the search query
    for (var i = 0; i < bookList.length; i++) {
      var title = bookList[i].getElementsByTagName('h3')[0].innerText.toUpperCase();
      var genre = bookList[i].getAttribute('data-genre').toUpperCase();
  
      if ((title.indexOf(titleFilter) > -1 || genre.indexOf(genreFilter) > -1) || (titleFilter === '' && genreFilter === '')) {
        bookList[i].style.display = '';
      } else {
        bookList[i].style.display = 'none';
      }
    }
  }
  
  // Event listener for the search form submission
  document.querySelector('.books_filter form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    search();
  });
  
  // Event listener for the search inputs
  document.getElementById('book_title').addEventListener('keyup', search);
  document.getElementById('book_genre').addEventListener('keyup', search);