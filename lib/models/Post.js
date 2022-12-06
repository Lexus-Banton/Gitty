const pool = require('../utils/pool.js');

module.exports = class Post {
  id;
  description;
  user_id;

  constructor(row) {
    this.id = row.id;
    this.description = row.description;
    this.user_id = row.user_id;
  }

  static async insert({ description, user_id }) {
    const { rows } = await pool.query(
      `
        INSERT INTO posts (description, user_id)
        VALUES ($1, $2)
        RETURNING *
        `,
      [description, user_id]
    );
    return new Post(rows[0]);
  }
};
