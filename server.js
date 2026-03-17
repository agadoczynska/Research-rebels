import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const votes: Record<string, number> = {};

// POST /api/vote — called by Harvey Ball hardware
// Body: { "participant_id": "p5", "vote": 3 }
app.post('/api/vote', (req, res) => {
  const { participant_id, vote } = req.body;

  if (!participant_id || typeof participant_id !== 'string') {
    return res.status(400).json({ ok: false, error: 'Missing or invalid participant_id.' });
  }

  const voteInt = parseInt(vote, 10);
  if (![1, 2, 3, 4].includes(voteInt)) {
    return res.status(400).json({ ok: false, error: 'Invalid vote value. Must be 1, 2, 3, or 4.' });
  }

  votes[participant_id] = voteInt;
  console.log(`Vote received: participant=${participant_id} vote=${voteInt}`);
  res.json({ ok: true, participant_id, vote: voteInt });
});

// GET /api/votes — polled by the frontend every second
app.get('/api/votes', (req, res) => {
  res.json({ votes });
});

// DELETE /api/votes — reset all votes between rounds
app.delete('/api/votes', (req, res) => {
  Object.keys(votes).forEach(k => delete votes[k]);
  res.json({ ok: true });
});

app.listen(3001, () => {
  console.log('Harvey Ball API running at http://localhost:3001');
});
