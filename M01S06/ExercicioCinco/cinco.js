
fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao buscar imagens');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(image => {
      const imageUrl = image.url;
      document.write(`<img src='${imageUrl}' width='200' /> <br />`);
    });
  })
  .catch(error => {
    console.error('Erro:', error);
  });