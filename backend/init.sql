-- Crear extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Crear roles
CREATE ROLE travel_agency_admin;
CREATE ROLE travel_agency_user;

-- Asignar permisos
GRANT ALL PRIVILEGES ON DATABASE travel_agency TO travel_agency_admin;
GRANT CONNECT ON DATABASE travel_agency TO travel_agency_user;

-- Crear tablas
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'user',
    full_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(50),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE trips (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    original_price DECIMAL(10,2) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    max_participants INTEGER NOT NULL,
    current_participants INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE features (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT
);

CREATE TABLE trip_features (
    trip_id INTEGER REFERENCES trips(id),
    feature_id INTEGER REFERENCES features(id),
    PRIMARY KEY (trip_id, feature_id)
);

CREATE TABLE trip_images (
    id SERIAL PRIMARY KEY,
    trip_id INTEGER REFERENCES trips(id),
    image_url TEXT NOT NULL,
    is_main BOOLEAN DEFAULT FALSE
);

CREATE TABLE custom_trips (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    destination VARCHAR(255) NOT NULL,
    number_of_days INTEGER NOT NULL,
    number_of_participants INTEGER NOT NULL,
    start_date DATE NOT NULL,
    budget DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'pending',
    special_requirements TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    trip_id INTEGER REFERENCES trips(id),
    custom_trip_id INTEGER REFERENCES custom_trips(id),
    status VARCHAR(50) NOT NULL DEFAULT 'pending',
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_price DECIMAL(10,2) NOT NULL,
    number_of_participants INTEGER NOT NULL,
    special_requests TEXT
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    trip_id INTEGER REFERENCES trips(id),
    rating DECIMAL(3,2) NOT NULL,
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    trip_id INTEGER REFERENCES trips(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    type VARCHAR(50) NOT NULL,
    priority VARCHAR(50) NOT NULL DEFAULT 'medium',
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    notification_metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar usuarios (10 usuarios)
INSERT INTO users (email, username, hashed_password, role, full_name, phone_number, address) VALUES
('admin@travel.com', 'admin', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewKyNiAYMyzJ/IiG', 'admin', 'Admin User', '666111222', 'Calle Admin 1, Madrid'),
('user1@travel.com', 'user1', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewKyNiAYMyzJ/IiG', 'user', 'John Doe', '666333444', 'Calle User 1, Barcelona'),
('user2@travel.com', 'user2', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewKyNiAYMyzJ/IiG', 'user', 'Jane Smith', '666555666', 'Calle User 2, Valencia'),
('user3@travel.com', 'user3', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewKyNiAYMyzJ/IiG', 'user', 'Mike Johnson', '666777888', 'Calle User 3, Sevilla'),
('user4@travel.com', 'user4', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewKyNiAYMyzJ/IiG', 'user', 'Sarah Williams', '666999000', 'Calle User 4, Bilbao'),
('user5@travel.com', 'user5', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewKyNiAYMyzJ/IiG', 'user', 'David Brown', '666111333', 'Calle User 5, Málaga'),
('user6@travel.com', 'user6', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewKyNiAYMyzJ/IiG', 'user', 'Emma Davis', '666444555', 'Calle User 6, Zaragoza'),
('user7@travel.com', 'user7', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewKyNiAYMyzJ/IiG', 'user', 'James Wilson', '666777999', 'Calle User 7, Granada'),
('user8@travel.com', 'user8', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewKyNiAYMyzJ/IiG', 'user', 'Lisa Anderson', '666222333', 'Calle User 8, Alicante'),
('user9@travel.com', 'user9', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewKyNiAYMyzJ/IiG', 'user', 'Robert Taylor', '666555777', 'Calle User 9, Córdoba');

-- Insertar características
INSERT INTO features (name, description) VALUES
('Todo Incluido', 'Incluye alojamiento, comidas y bebidas'),
('Guía Turístico', 'Incluye guía profesional'),
('Traslados', 'Incluye traslados desde/hacia el aeropuerto'),
('Seguro de Viaje', 'Incluye seguro básico de viaje'),
('Actividades', 'Incluye actividades organizadas'),
('WiFi Gratuito', 'Incluye acceso a WiFi en el hotel'),
('Piscina', 'Hotel con piscina'),
('Spa', 'Acceso al spa del hotel'),
('Gimnasio', 'Acceso al gimnasio del hotel'),
('Parking', 'Incluye parking gratuito');

-- Insertar viajes
INSERT INTO trips (title, destination, description, price, original_price, start_date, end_date, max_participants, current_participants) VALUES
('Vacaciones en París', 'París, Francia', 'Tour por la ciudad del amor', 1200.00, 1500.00, '2024-06-01', '2024-06-07', 20, 0),
('Aventura en Tailandia', 'Bangkok, Tailandia', 'Explora la cultura tailandesa', 1100.00, 1300.00, '2024-07-15', '2024-07-22', 15, 0),
('Safari en África', 'Serengeti, Tanzania', 'Experiencia única en la sabana', 4000.00, 4500.00, '2024-08-01', '2024-08-10', 10, 0),
('Tour por Japón', 'Tokio, Japón', 'Descubre la cultura japonesa', 3000.00, 3500.00, '2024-09-01', '2024-09-10', 12, 0),
('Caribe Paradise', 'Cancún, México', 'Vacaciones en el paraíso', 2500.00, 3000.00, '2024-10-01', '2024-10-08', 25, 0),
('Tour por Italia', 'Roma, Italia', 'Recorrido por la historia', 1800.00, 2000.00, '2024-11-01', '2024-11-08', 18, 0),
('Aventura en Nueva Zelanda', 'Auckland, Nueva Zelanda', 'Explora la naturaleza', 2200.00, 2500.00, '2024-12-01', '2024-12-10', 15, 0),
('Tour por Grecia', 'Atenas, Grecia', 'Descubre la antigua Grecia', 1900.00, 2200.00, '2025-01-01', '2025-01-08', 20, 0),
('Safari en Sudáfrica', 'Ciudad del Cabo, Sudáfrica', 'Aventura en la sabana', 3500.00, 4000.00, '2025-02-01', '2025-02-10', 12, 0),
('Tour por Australia', 'Sídney, Australia', 'Explora el continente', 2100.00, 2400.00, '2025-03-01', '2025-03-10', 15, 0);

-- Insertar imágenes de viajes
INSERT INTO trip_images (trip_id, image_url, is_main) VALUES
(1, 'https://example.com/paris1.jpg', true),
(1, 'https://example.com/paris2.jpg', false),
(2, 'https://example.com/bangkok1.jpg', true),
(2, 'https://example.com/bangkok2.jpg', false),
(3, 'https://example.com/safari1.jpg', true),
(3, 'https://example.com/safari2.jpg', false),
(4, 'https://example.com/tokyo1.jpg', true),
(4, 'https://example.com/tokyo2.jpg', false),
(5, 'https://example.com/cancun1.jpg', true),
(5, 'https://example.com/cancun2.jpg', false);

-- Insertar reservas
INSERT INTO bookings (user_id, trip_id, status, total_price, number_of_participants, special_requests) VALUES
(2, 1, 'confirmed', 1200.00, 2, 'Habitación con vista'),
(3, 2, 'pending', 1100.00, 1, 'Dieta vegetariana'),
(4, 3, 'confirmed', 4000.00, 2, 'Cama king size'),
(5, 4, 'confirmed', 3000.00, 1, 'Guía en español'),
(6, 5, 'pending', 2500.00, 1, 'Safari privado'),
(7, 6, 'confirmed', 1800.00, 2, 'Habitación con balcón'),
(8, 7, 'confirmed', 2200.00, 1, 'Tour privado'),
(9, 8, 'pending', 1900.00, 2, 'Clase de cocina tailandesa'),
(10, 9, 'confirmed', 3500.00, 1, 'Guía privado'),
(2, 10, 'pending', 2100.00, 2, 'Masaje incluido');

-- Insertar viajes personalizados
INSERT INTO custom_trips (user_id, destination, number_of_days, number_of_participants, start_date, budget, status, special_requirements) VALUES
(2, 'Barcelona', 5, 2, '2024-07-01', 1500.00, 'pending', 'Tour gastronómico'),
(3, 'Amsterdam', 4, 2, '2024-08-01', 2000.00, 'approved', 'Tour en bicicleta'),
(4, 'Praga', 6, 4, '2024-09-01', 3000.00, 'pending', 'Tour histórico'),
(5, 'Viena', 5, 2, '2024-10-01', 2500.00, 'approved', 'Tour musical'),
(6, 'Budapest', 4, 2, '2024-11-01', 1800.00, 'pending', 'Tour termal'),
(7, 'Lisboa', 5, 3, '2024-12-01', 2200.00, 'approved', 'Tour de vinos'),
(8, 'Edimburgo', 6, 2, '2025-01-01', 2800.00, 'pending', 'Tour de fantasmas'),
(9, 'Dublín', 4, 2, '2025-02-01', 2000.00, 'approved', 'Tour de pubs'),
(10, 'Copenhague', 5, 2, '2025-03-01', 3000.00, 'pending', 'Tour de diseño'),
(2, 'Estocolmo', 6, 4, '2025-04-01', 3500.00, 'approved', 'Tour nórdico');

-- Insertar reseñas
INSERT INTO reviews (user_id, trip_id, rating, comment) VALUES
(2, 1, 4.5, 'Excelente experiencia en París'),
(3, 2, 4.0, 'Muy buen tour por Bangkok'),
(4, 3, 5.0, 'Increíble safari en África'),
(5, 4, 4.8, 'Fascinante cultura japonesa'),
(6, 5, 4.2, 'Vacaciones perfectas en Cancún'),
(7, 6, 4.7, 'Tour por Italia inolvidable'),
(8, 7, 4.3, 'Nueva Zelanda es impresionante'),
(9, 8, 4.6, 'Grecia es mágica'),
(10, 9, 4.9, 'Sudáfrica es increíble'),
(2, 10, 4.4, 'Australia es un paraíso');

-- Insertar favoritos
INSERT INTO favorites (user_id, trip_id) VALUES
(2, 3),
(2, 5),
(3, 1),
(3, 4),
(4, 2),
(4, 6),
(5, 7),
(5, 9),
(6, 8),
(6, 10);

-- Insertar notificaciones
INSERT INTO notifications (user_id, type, priority, title, message, notification_metadata) VALUES
(2, 'price_drop', 'high', '¡Bajada de precio!', 'El precio del viaje a París ha bajado', '{"trip_id": 1, "old_price": 1500, "new_price": 1200}'),
(3, 'trip_reminder', 'medium', 'Recordatorio de viaje', 'Tu viaje a Bangkok comienza en 7 días', '{"trip_id": 2, "days_before": 7}'),
(4, 'booking_update', 'high', 'Reserva confirmada', 'Tu reserva para el safari ha sido confirmada', '{"booking_id": 3}'),
(5, 'system', 'low', 'Bienvenido', 'Bienvenido a nuestra plataforma', '{}'),
(6, 'price_drop', 'high', '¡Oferta especial!', 'Descuento en viajes a Japón', '{"trip_id": 4, "discount": 20}'),
(7, 'trip_reminder', 'medium', 'Preparativos', 'Comienza a preparar tu viaje a Italia', '{"trip_id": 6, "days_before": 30}'),
(8, 'booking_update', 'high', 'Pago recibido', 'Hemos recibido tu pago para Nueva Zelanda', '{"booking_id": 7}'),
(9, 'system', 'low', 'Nueva funcionalidad', 'Descubre nuestras nuevas características', '{}'),
(10, 'price_drop', 'high', '¡Última hora!', 'Oferta especial en viajes a Sudáfrica', '{"trip_id": 9, "discount": 15}'),
(2, 'trip_reminder', 'medium', 'Documentación', 'Recuerda preparar tu documentación para Australia', '{"trip_id": 10, "days_before": 14}');

-- Asignar características a los viajes
INSERT INTO trip_features (trip_id, feature_id) VALUES
(1, 1), (1, 2), (1, 3), -- París
(2, 1), (2, 2), (2, 4), -- Bangkok
(3, 1), (3, 3), (3, 5), -- Safari
(4, 2), (4, 4), (4, 6), -- Tokio
(5, 2), (5, 3), (5, 7), -- Cancún
(6, 1), (6, 2), (6, 8), -- Italia
(7, 2), (7, 4), (7, 9), -- Nueva Zelanda
(8, 1), (8, 3), (8, 10), -- Grecia
(9, 2), (9, 4), (9, 5), -- Sudáfrica
(10, 1), (10, 3), (10, 7); -- Australia 