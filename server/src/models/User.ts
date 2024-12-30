import db from '../db'; 

const User = {
  create: async (name: string, email: string, password: string) => {
    const result = await db.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    return result.rows[0];  
  },

  findByEmail: async (email: string) => {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];  // Return user if found
  }
};

export default User;
