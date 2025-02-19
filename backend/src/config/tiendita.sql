CREATE DATABASE tienda;
\c tienda;

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INT REFERENCES clientes(id),
    total DECIMAL(10,2) NOT NULL
);


INSERT INTO clientes (id, nombre) VALUES
(1, 'Carlos'),
(2, 'Ana'),
(3, 'Luis'),
(4, 'Sofía');

INSERT INTO pedidos (cliente_id, total) VALUES
(1, 100.50),
(1, 250.00),
(2, 80.75),
(3, 300.00);

CREATE TABLE vendedores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    precio DECIMAL(10,2) NOT NULL
);

CREATE TABLE ventas (
    id SERIAL PRIMARY KEY,
    vendedor_id INT REFERENCES vendedores(id),
    cliente_id INT REFERENCES clientes(id),
    producto_id INT REFERENCES productos(id),
    cantidad INT NOT NULL,
    fecha DATE NOT NULL
);

INSERT INTO vendedores (nombre) VALUES ('Maria'), ('Pedro');
INSERT INTO productos (nombre, precio) VALUES ('Laptop', 800), ('Celular', 500);
