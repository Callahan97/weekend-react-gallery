const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  const { id } = req.params;
  const sqlText = `UPDATE gallery SET likes = likes + 1 WHERE id = $1 RETURNING *`;
  pool.query(sqlText, [id])
    .then(result => {
      console.log(`Updated likes for item with id ${id}`, result.rows[0]);
      res.sendStatus(200);
    })
    .catch(error => {
      console.log('Error updating likes:', error);
      res.sendStatus(500);
    });
});

// GET /gallery
router.get('/gallery', (req, res) => {
  // code here
  const sqlText = `SELECT * FROM gallery ORDER BY title, id DESC;`;
  pool.query(sqlText)
    .then((result) => {
      console.log(`Got stuff back from the database`, result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); 
})
})

module.exports = router;
