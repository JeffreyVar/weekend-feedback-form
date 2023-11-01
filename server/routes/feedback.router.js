const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {
    const newFeedback = req.body;
    console.log(newFeedback);
    const queryText =   `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4)`;
    const queryValues = [
        newFeedback.feeling,
        newFeedback.understanding,
        newFeedback.support,
        newFeedback.comments,
    ];
    pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error in feedback post route', err);
      res.sendStatus(500);
    });
});


router.get('/', (req, res) => {
  let queryText = 'SELECT id, feeling, understanding, support, comments, flagged FROM "feedback" ORDER BY "date";';
  pool.query(queryText)
  .then(result => {
    // Sends back the results in an object
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting feedback', error);
    res.sendStatus(500);
  });
});

router.delete('/:id', (req,res) => {
  let listId = req.params.id;
  console.log(listId);
  let queryText = 'DELETE FROM "feedback" WHERE "id" = $1;';
  pool.query(queryText, [listId])
  .then(result => {
      res.sendStatus(200);
  })
  .catch((err) => {
      console.log(`Error making query ${queryText}`, err);
      res.sendStatus(500);
  });
});

module.exports = router;