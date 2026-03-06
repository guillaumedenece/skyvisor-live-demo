import { useEffect, useState } from 'react';
import { fetchFruitsForMonth, fetchMonths } from './api';
import type { Fruit, MonthOption } from './types';
import './App.css';

export default function App() {
  const [months, setMonths] = useState<MonthOption[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<number>(() => new Date().getMonth() + 1);
  const [monthName, setMonthName] = useState<string>('');
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchMonths()
      .then((data) => {
        if (!cancelled) setMonths(data);
      })
      .catch((e) => {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Failed to load months');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchFruitsForMonth(selectedMonth)
      .then((data) => {
        if (!cancelled) {
          setMonthName(data.monthName);
          setFruits(data.fruits);
        }
      })
      .catch((e) => {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Failed to load fruits');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [selectedMonth]);

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Seasonal Fruits</h1>
        <p className="subtitle">Discover what’s in season, month by month</p>
        <label className="select-label">
          <span className="select-label-text">Month</span>
          <select
            className="select"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            disabled={!months.length}
            aria-label="Select month"
          >
            {months.length === 0 && (
              <option value="">Loading…</option>
            )}
            {months.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </label>
      </header>

      <main className="main">
        {error && (
          <div className="error" role="alert">
            {error}
          </div>
        )}
        {loading && (
          <div className="loading">Loading fruits…</div>
        )}
        {!loading && !error && (
          <>
            <h2 className="month-title">{monthName}</h2>
            {fruits.length === 0 ? (
              <p className="empty">No fruits listed for this month.</p>
            ) : (
              <ul className="fruit-grid">
                {fruits.map((fruit) => (
                  <li key={fruit.id} className="fruit-card">
                    <div className="fruit-image-wrap">
                      <img
                        src={fruit.image}
                        alt={fruit.name}
                        className="fruit-image"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="fruit-name">{fruit.name}</h3>
                    <p className="fruit-desc">{fruit.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </main>
    </div>
  );
}
