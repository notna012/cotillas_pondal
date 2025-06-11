fetch('cotilleos.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cotilleos');
    data.forEach(cotilleo => {
      const div = document.createElement('div');
      div.className = 'cotilleo';
      div.textContent = cotilleo.texto;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Error cargando los cotilleos:', error);
  });
