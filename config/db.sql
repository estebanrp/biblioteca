CREATE DATABASE IF NOT EXISTS biblioteca;

USE biblioteca;

CREATE TABLE IF NOT EXISTS usuarios (
  username VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS socios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  apellido_nombre VARCHAR(255) NOT NULL,
  domicilio_calle VARCHAR(255) NOT NULL,
  domicilio_numero INT NOT NULL,
  domicilio_piso_depto VARCHAR(255),
  domicilio_localidad VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  estado BOOLEAN DEFAULT true,
  fecha_hasta_inhab DATE
);

CREATE TABLE IF NOT EXISTS libros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  isbn VARCHAR(255) NOT NULL UNIQUE,
  titulo VARCHAR(255) NOT NULL,
  autor VARCHAR(255) NOT NULL,
  tipo ENUM('Préstamo', 'Consulta') NOT NULL,
  estado ENUM('Disponible', 'Prestado') DEFAULT 'Disponible'
);

CREATE TABLE IF NOT EXISTS prestamos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_socio INT NOT NULL,
  id_libro INT NOT NULL,
  fecha_prestamo DATE NOT NULL,
  fecha_hasta DATE NOT NULL,
  fecha_devolucion DATE,
  FOREIGN KEY (id_socio) REFERENCES socios(id),
  FOREIGN KEY (id_libro) REFERENCES libros(id)
);
