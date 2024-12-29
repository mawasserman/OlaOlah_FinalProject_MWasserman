import db from '../db'; 

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const User = {
  create: async (name: string, email: string, password: string): Promise<User> => {
    const result = await db.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    return result.rows[0];
  },

  findByEmail: async (email: string): Promise<User | null> => {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows.length ? result.rows[0] : null;  // null if no user
  },
};

export default User;
