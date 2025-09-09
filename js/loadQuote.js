fetch('components/request-a-quote.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('quote-placeholder').innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));