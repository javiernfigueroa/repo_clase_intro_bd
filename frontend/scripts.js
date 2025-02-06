const btnCarga = document.getElementById('btnCargar'); // Corregido
const listaAmigos = document.getElementById('listaAmigos');


btnCarga.addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/amigos');
    const amigos = await response.json()

    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = `Nombre: ${amigo.nombre}, Email: ${amigo.email}`;
        listaAmigos.appendChild(li)
    })
})