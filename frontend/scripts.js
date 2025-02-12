const btnCarga = document.getElementById('btnCargar'); // Corregido
const listaAmigos = document.getElementById('listaAmigos');

//mostrar usuarios

btnCarga.addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/usuarios');
    const amigos = await response.json()

    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = `Nombre: ${amigo.nombre}, Email: ${amigo.email}`;
        listaAmigos.appendChild(li)
    })
})


//agregar usuarios

formAgregar.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const nombre = document.getElementById('nombre').value;
    const prioridad = document.getElementById('prioridad').value;

    const response = await fetch('http://localhost:3000/agregarUsuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, nombre, prioridad: parseInt(prioridad) })
    });
    const nuevoUsuario = await response.json();
    alert(`Usuario ${nuevoUsuario.nombre} agregado con éxito`);

    formAgregar.reset();
    btnCarga.click();
});