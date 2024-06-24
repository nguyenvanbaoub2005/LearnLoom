/* xử lý text tìm kiếm */
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      var query = event.target.value;
      var googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
      window.location.href = googleSearchUrl;
    }
  });
  
 

