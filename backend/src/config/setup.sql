CREATE DATABASE db_ventas;
\c db_ventas;

CREATE TABLE ventas (
    id SERIAL PRIMARY KEY,
    cantidad INT NOT NULL,
    fecha DATE NOT NULL,
    sucursal VARCHAR(50) NOT NULL
);

INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (30, '2023-01-01', 'Centro');
INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (50, '2023-01-01', 'Norte');
INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (20, '2023-01-02', 'Centro');
INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (60, '2023-01-02', 'Sur');
INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (15, '2023-01-03', 'Centro');
INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (70, '2023-01-03', 'Norte');
INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (45, '2023-01-04', 'Sur');
INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (35, '2023-01-04', 'Centro');
INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (25, '2023-01-05', 'Sur');
INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (55, '2023-01-05', 'Norte');
INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (40, '2023-01-06', 'Centro');
INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (50, '2023-01-06', 'Sur');
INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (80, '2023-01-07', 'Norte');
INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (90, '2023-01-07', 'Centro');
INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (100, '2023-01-08', 'Sur');
INSERT INTO ventas (cantidad, fecha, sucursal) VALUES (120, '2023-01-08', 'Norte');


SELECT * FROM ventas;
