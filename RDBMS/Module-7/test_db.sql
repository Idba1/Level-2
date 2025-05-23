-- Create 'users' table
CREATE TABLE public.users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create 'orders' table
CREATE TABLE public.orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    order_date DATE NOT NULL,
    amount NUMERIC(10, 2),
    FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);

INSERT INTO
    public.users (username, email)
VALUES
    ('alice', 'alice@example.com'),
    ('bob', 'bob@example.com'),
    ('charlie', 'charlie@example.com');

INSERT INTO
    public.orders (user_id, order_date, amount)
VALUES
    (1, '2025-05-01', 150.00),
    (2, '2025-05-03', 85.50),
    (1, '2025-05-10', 299.99),
    (3, '2025-05-15', 50.00),
    (2, '2025-05-20', 120.75);

SELECT
    *
FROM
    public.users;

SELECT
    *
FROM
    public.orders;