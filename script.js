// Function to implement search functionality
/*document.addEventListener("DOMContentLoaded", function() {
    // Place your JavaScript code here
    // Add event listeners, manipulate DOM, etc.
    // For example:

    var searchButton = document.getElementById("search_button");
    searchButton.addEventListener("click", function(event) {
        event.preventDefault();
        // Perform search functionality
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
    });
});*/
 function login() {
  var loginForm = document.querySelector("form");
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page

    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var username = usernameInput.value;
    var password = passwordInput.value;

    // Check if the username and password are correct
    if (username === "your_username" && password === "your_password") {
      alert("Login successful!"); // Prompt for successful login
    // Redirect to the home page
    window.location.href = "home.html";
      // Hide the "sign in" and "sign up" sections
      var signInButton = document.querySelector(".btn[href='login.html']");
      var signUpButton = document.querySelector(".btn[href='register.html']");
      signInButton.style.display = "none";
      signUpButton.style.display = "none";
    } else {
      alert("Invalid account!"); // Prompt for invalid account
    }

    // Reset the form inputs
    loginForm.reset();
  });
};
 function Signup() {
  var signupForm = document.querySelector("form");
  signupForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page

    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");
    var username = usernameInput.value;
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;

    // Perform validation checks
    if (password !== confirmPassword) {
      alert("Passwords do not match!"); // Prompt for password mismatch
      return;
    }

    // Display signup successful prompt
    alert("Signup successful!");

    // Reset the form inputs
    signupForm.reset();
  });
};
/*function searchAndDisplayBook(searchQuery) {
  // Search for elements with class "book_title"
  const bookTitles = document.querySelectorAll('.book_title');

  // Check if any elements were found
  if (bookTitles.length > 0) {
    // Iterate through the elements and process each one
    bookTitles.forEach((bookTitle, index) => {
      const bookName = bookTitle.textContent.trim();

      // Check if the book name includes the search query
      const includesSearchQuery = bookName.toLowerCase().includes(searchQuery.toLowerCase());

      // Display or hide the book based on the search result
      const bookElement = bookTitle.closest('.box');
      if (includesSearchQuery) {
        bookElement.style.display = 'block';  // Show the book
      } else {
        bookElement.style.display = 'none';   // Hide the book
      }
    });
  } else {
    alert('No elements with class "book_title" found.');
  }
}*/

// Call the function with the search query (replace 'YourSearchQuery' with the actual search term)
/*document.addEventListener('DOMContentLoaded', () => {
  searchAndDisplayBook('YourSearchQuery');
});*/
    // Function to capitalize text content of all <p> elements
    function capitalizeParagraphs() {
      // Get all <p> elements
      const paragraphs = document.querySelectorAll('a');

      // Iterate through each <p> element
      paragraphs.forEach(paragraph => {
        // Get the current text content and capitalize it
        const originalText = paragraph.textContent;
        const capitalizedText = originalText.toUpperCase();

        // Set the capitalized text back to the <p> element
        paragraph.textContent = capitalizedText;
      });
    }

    // Function to reset text content of all <p> elements to their original state
    function resetParagraphs() {
      // Get all <p> elements
      const paragraphs = document.querySelectorAll('a');

      // Iterate through each <p> element
      paragraphs.forEach(paragraph => {
        // Get the original text content from the data-original-text attribute
        const originalText = paragraph.getAttribute('data-original-text');

        // Set the original text back to the <p> element
        paragraph.textContent = originalText;
      });
    }

    // Function to initialize the original text data attribute
    function initializeOriginalText() {
      // Get all <p> elements
      const paragraphs = document.querySelectorAll('a');

      // Iterate through each <p> element and set the data-original-text attribute
      paragraphs.forEach(paragraph => {
        paragraph.setAttribute('data-original-text', paragraph.textContent);
      });
    }
    function toggleVisibilityByClass(className) {
      const elements = document.getElementsByClassName(className);
      for (const element of elements) {
        if (element.style.display === 'none' || element.style.display === '') {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      }
    }
    function showAlertOnClickByClass(className, message) {
      const elements = document.getElementsByClassName(className);
      for (const element of elements) {
        // Check if the click event listener is already attached
        if (!element.hasClickListener) {
          element.addEventListener('click', () => {
            alert(message);
          });
  
          // Set a flag to indicate that the listener is attached
          element.hasClickListener = true;
        }
      }
    }
    function hideSearchBox() {
      const searchBox = document.querySelector('.books_filter');
    if (searchBox) {
      const currentDisplay = window.getComputedStyle(searchBox).display;
      searchBox.style.display = currentDisplay === 'none' ? 'block' : 'none';
    }
    }
    let isImage1 = true; 
    function toggleBackgroundImage() {

      const body = document.body;

      // Check the current background image
      const currentImage = window.getComputedStyle(body).backgroundImage;

      // Define two different background images
      const backgroundImage1 = 'url(images/Statsbiblioteket_læsesalen-2.jpg)';
      const backgroundImage2 = 'url(images/pexels-photo-1290141.jpeg)';

      // Toggle between the two background images
      if (isImage1) {
        body.style.backgroundImage = backgroundImage2;
      } else {
        body.style.backgroundImage = backgroundImage1;
      }
      isImage1 = !isImage1;
    }
    let colorIndex = 0; // Track the current color index

    function changeElementColor(className) {
      const elements = document.getElementsByClassName(className);
      const colors = ['red', 'blue', 'green', 'orange', 'black']; // Add more colors as needed

      // Change the color for each element with the specified class
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = colors[colorIndex];
      }

      // Update the color index for the next click
      colorIndex = (colorIndex + 1) % colors.length;
    }
// Call the initializeOriginalText function when the page is loaded
document.addEventListener('DOMContentLoaded', initializeOriginalText)
