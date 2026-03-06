import type { FruitsResponse, MonthOption } from './types';

const API_BASE = '/api';

export async function fetchMonths(): Promise<MonthOption[]> {
  const res = await fetch(`${API_BASE}/months`);
  if (!res.ok) throw new Error('Failed to load months');
  return res.json();
}

export async function fetchFruitsForMonth(month: number): Promise<FruitsResponse> {
  const res = await fetch(`${API_BASE}/fruits?month=${month}`);
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error ?? 'Failed to load fruits');
  }
  return res.json();
}
