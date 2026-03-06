import express from 'express';
import cors from 'cors';
import { getFruitsByMonth, getMonthNames } from './data/fruits';

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Seasonal Fruits API' });
});

app.get('/api/months', (_req, res) => {
  try {
    const months = getMonthNames();
    res.json(months);
  } catch (e) {
    res.status(500).json({ error: 'Failed to load months' });
  }
});

app.get('/api/fruits', (req, res) => {
  const monthParam = req.query.month;
  const month = monthParam ? Number(monthParam) : new Date().getMonth() + 1;

  if (Number.isNaN(month) || month < 1 || month > 12) {
    return res.status(400).json({
      error: 'Invalid month. Use a number between 1 and 12.',
    });
  }

  try {
    const data = getFruitsByMonth(month);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to load fruits' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
