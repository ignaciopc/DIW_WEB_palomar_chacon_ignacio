fetch('../html/componentes/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-container').innerHTML = data;
})
.catch(error => console.error('Error al cargar el header:', error));
