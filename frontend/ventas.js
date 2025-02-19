document.addEventListener('DOMContentLoaded', async () => {
    const vendedorSelect = document.getElementById('vendedor');
    const clienteSelect = document.getElementById('cliente');
    const productoSelect = document.getElementById('producto');
    const cantidadInput = document.getElementById('cantidad');
    const registrarVentaBtn = document.getElementById('registrarVenta');
    const listaVentas = document.getElementById('listaVentas');

    async function cargarDatos(url, selectElement) {
        try {
            const response = await fetch(url);
            const datos = await response.json();
            selectElement.innerHTML = '';
            datos.forEach(item => {
                const option = document.createElement('option');
                option.value = item.id;
                option.textContent = item.nombre;
                selectElement.appendChild(option);
            });
        } catch (error) {
            console.error(`Error cargando datos desde ${url}:`, error);
        }
    }

    await cargarDatos('http://localhost:3000/ventas/vendedores', vendedorSelect);
    await cargarDatos('http://localhost:3000/ventas/clientes', clienteSelect);
    await cargarDatos('http://localhost:3000/ventas/productos', productoSelect);

    registrarVentaBtn.addEventListener('click', async () => {
        const vendedorId = vendedorSelect.value;
        const clienteId = clienteSelect.value;
        const productoId = productoSelect.value;
        const cantidad = cantidadInput.value;

        if (!vendedorId || !clienteId || !productoId || cantidad <= 0) {
            alert('Por favor, complete todos los campos correctamente.');
            return;
        }

        const venta = {
            vendedor_id: vendedorId,
            cliente_id: clienteId,
            producto_id: productoId,
            cantidad: parseInt(cantidad),
            fecha: new Date().toISOString().split('T')[0] // Formato YYYY-MM-DD
        };

        try {
            const response = await fetch('http://localhost:3000/ventas/ventas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(venta)
            });

            if (!response.ok) {
                throw new Error('Error al registrar la venta');
            }

            const nuevaVenta = await response.json();
            agregarVentaATabla(nuevaVenta);
            alert('Venta registrada con éxito');
        } catch (error) {
            console.error('Error registrando venta:', error);
        }
    });

    function agregarVentaATabla(venta) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${venta.vendedor_id}</td>
            <td>${venta.cliente_id}</td>
            <td>${venta.producto_id}</td>
            <td>${venta.cantidad}</td>
            <td>${venta.fecha}</td>
        `;
        listaVentas.appendChild(row);
    }

    async function cargarVentas() {
        try {
            const response = await fetch('http://localhost:3000/ventas/ventas');
            if (!response.ok) {
                throw new Error('Error al obtener ventas');
            }
            const ventas = await response.json();
            ventas.forEach(agregarVentaATabla);
        } catch (error) {
            console.error('Error cargando ventas:', error);
        }
    }

    await cargarVentas();
});
