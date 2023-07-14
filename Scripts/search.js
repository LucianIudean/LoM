function performSearch(event) {
  event.preventDefault(); // Prevent default form submission behavior
  let searchTerm = document.getElementById('searchBox').value;
  search(searchTerm);
}

function search(searchTerm) {
  if (searchTerm.trim() !== '') {
    window.find(searchTerm);
  }
}









































// function loadHTML() {
//     console.log("hello");
//     fetch('Index.html')
//       .then(response => response.text())
//       .then(htmlContent => {
//         search(htmlContent);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }
//   console.log("hello");
//   function search(htmlContent) {
//     var searchTerm = document.getElementById('searchBox').value;
//     var searchResults = document.getElementById('searchResults');
//     searchResults.innerHTML = ""; // Clear previous results
  
//     // Split the HTML content into words while removing non-alphanumeric characters
//     var words = htmlContent.replace(/[^a-zA-Z0-9 ]/g, "").split(/\s+/);
  
//     // Iterate over the words and find matches
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i].toLowerCase(); // Convert to lowercase for case-insensitive search
  
//       if (word.includes(searchTerm.toLowerCase())) {
//         var resultElement = document.createElement('p');
//         resultElement.textContent = words[i];
//         resultElement.classList.add('highlight');
//         searchResults.appendChild(resultElement);
//       }
//     }
//   }


// function search() {
//     console.log("hello");
//     const text = document.getElementById("search").innerText
//     const word = document.getElementById('searchResults')
//     word.innerText = text;
//     console.log(word.innerText);
//     window.find(word);

    
// }

// function search() {
//     console.log("hello");
//     var searchTerm = document.getElementById('search').value;
//     if (searchTerm.trim() !== '') {
//       window.find(searchTerm);
//     }
//   }
  
// const string = "is";
// function search(){
//     console.log(string);
//     window.find(string);
//     }
  

// search();


// function performSearch(event) {
//     event.preventDefault(); // Prevent default form submission behavior
//     var searchTerm = document.getElementById('searchBox').value;
//     search(searchTerm);
//   }
  
//   function search(searchTerm) {
//     if (searchTerm.trim() !== '') {
//       var searchResults = document.getElementById('searchResults');
//       searchResults.innerHTML = ""; // Clear previous results
  
//       var htmlContent = document.documentElement.innerHTML;
//       var regex = new RegExp(searchTerm, 'gi');
//       var match;
//       var highlightedContent = htmlContent;
  
//       while ((match = regex.exec(htmlContent)) !== null) {
//         var startIndex = match.index;
//         var endIndex = match.index + match[0].length;
//         var highlightedTerm = '<span class="highlight">' + match[0] + '</span>';
//         highlightedContent = highlightedContent.substring(0, startIndex) + highlightedTerm + highlightedContent.substring(endIndex);
//       }
  
//       document.documentElement.innerHTML = highlightedContent;
//     }
//   }
  