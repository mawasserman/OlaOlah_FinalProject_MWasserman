CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email, password)
VALUES
  ('Alice Smith', 'alice.smith@example.com', 'password123'),
  ('Bob Johnson', 'bob.johnson@example.com', 'password456'),
  ('Charlie Brown', 'charlie.brown@example.com', 'password789');

SELECT * FROM users