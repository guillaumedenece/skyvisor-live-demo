/**
 * Seasonal fruits by month (1–12), with image URLs.
 * Uses placeholder images; replace with your own or a CDN in production.
 */
export interface Fruit {
  id: string;
  name: string;
  image: string;
  description: string;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
] as const;

// High-quality fruit images from Unsplash (free to use, no attribution required for standard use)
const FRUIT_IMAGES: Record<string, string> = {
  apple: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop',
  pear: 'https://images.unsplash.com/photo-1615485737364-1b7c2d4a0e6e?w=400&h=400&fit=crop',
  orange: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop',
  lemon: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400&h=400&fit=crop',
  grapefruit: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&h=400&fit=crop',
  kiwi: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400&h=400&fit=crop',
  strawberry: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop',
  cherry: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400&h=400&fit=crop',
  apricot: 'https://images.unsplash.com/photo-1601493704653-52a6560f2b45?w=400&h=400&fit=crop',
  plum: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop',
  peach: 'https://images.unsplash.com/photo-1615485925610-971ee8a656b0?w=400&h=400&fit=crop',
  nectarine: 'https://images.unsplash.com/photo-1615485925610-971ee8a656b0?w=400&h=400&fit=crop',
  raspberry: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?w=400&h=400&fit=crop',
  blackberry: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400&h=400&fit=crop',
  blueberry: 'https://images.unsplash.com/photo-1498557850523-fd3d898b6f76?w=400&h=400&fit=crop',
  watermelon: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=400&h=400&fit=crop',
  melon: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=400&h=400&fit=crop',
  grape: 'https://images.unsplash.com/photo-1596363505729-2aeb1d0c2b0b?w=400&h=400&fit=crop',
  fig: 'https://images.unsplash.com/photo-1596363505729-2aeb1d0c2b0b?w=400&h=400&fit=crop',
  pomegranate: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop',
  cranberry: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?w=400&h=400&fit=crop',
  persimmon: 'https://images.unsplash.com/photo-1601493704653-52a6560f2b45?w=400&h=400&fit=crop',
  clementine: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop',
  mango: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop',
  pineapple: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=400&fit=crop',
  avocado: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop',
  banana: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop',
  lime: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400&h=400&fit=crop',
  tangerine: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop',
};

function fruit(name: string, description: string): Fruit {
  const id = name.toLowerCase().replace(/\s+/g, '-');
  return {
    id,
    name,
    image: FRUIT_IMAGES[id] ?? `https://placehold.co/400x400/2d5016/fff?text=${encodeURIComponent(name)}`,
    description,
  };
}

// Seasonal fruits by month (Northern Hemisphere, common availability)
const FRUITS_BY_MONTH: Record<number, Fruit[]> = {
  1: [
    fruit('Apple', 'Crisp and sweet, great for pies and snacking'),
    fruit('Pear', 'Juicy and mild, perfect in salads'),
    fruit('Orange', 'Bright and citrusy, full of vitamin C'),
    fruit('Grapefruit', 'Tangy and refreshing'),
    fruit('Lemon', 'Essential for dressings and drinks'),
    fruit('Clementine', 'Easy to peel, sweet and seedless'),
    fruit('Tangerine', 'Sweet citrus with a loose peel'),
    fruit('Persimmon', 'Honey-sweet when ripe'),
    fruit('Pomegranate', 'Jewel-like seeds, tart and sweet'),
  ],
  2: [
    fruit('Apple', 'Still in great shape from cold storage'),
    fruit('Pear', 'Sweet and buttery'),
    fruit('Orange', 'Peak citrus season'),
    fruit('Grapefruit', 'Refreshing winter citrus'),
    fruit('Lemon', 'Bright and acidic'),
    fruit('Clementine', 'Kid-friendly citrus'),
    fruit('Kiwi', 'Tangy and green'),
    fruit('Pomegranate', 'Antioxidant-rich'),
    fruit('Persimmon', 'Soft and very sweet when ripe'),
  ],
  3: [
    fruit('Apple', 'Last of the storage apples'),
    fruit('Lemon', 'Spring citrus'),
    fruit('Orange', 'Still good from harvest'),
    fruit('Kiwi', 'Green and tangy'),
    fruit('Strawberry', 'Early varieties start'),
    fruit('Pear', 'Late winter pears'),
    fruit('Grapefruit', 'End of season'),
    fruit('Avocado', 'Creamy and ripe'),
    fruit('Pineapple', 'Sweet and tropical'),
  ],
  4: [
    fruit('Strawberry', 'Spring strawberries arrive'),
    fruit('Lemon', 'Fresh and bright'),
    fruit('Orange', 'Valencia oranges peak'),
    fruit('Kiwi', 'Still in season'),
    fruit('Pineapple', 'Sweet tropical treat'),
    fruit('Mango', 'Early mangoes'),
    fruit('Avocado', 'Perfect for toast'),
    fruit('Apple', 'Limited, from storage'),
    fruit('Banana', 'Year-round staple'),
  ],
  5: [
    fruit('Strawberry', 'Peak strawberry season'),
    fruit('Cherry', 'Sweet and dark'),
    fruit('Apricot', 'Early apricots'),
    fruit('Lemon', 'Plentiful'),
    fruit('Mango', 'Sweet and tropical'),
    fruit('Pineapple', 'Juicy and golden'),
    fruit('Avocado', 'Creamy and rich'),
    fruit('Banana', 'Always available'),
    fruit('Blueberry', 'Early blueberries'),
  ],
  6: [
    fruit('Strawberry', 'Still going strong'),
    fruit('Cherry', 'Peak cherry season'),
    fruit('Blueberry', 'Fresh and sweet'),
    fruit('Raspberry', 'Delicate and tart'),
    fruit('Blackberry', 'Wild and sweet'),
    fruit('Apricot', 'Golden and soft'),
    fruit('Peach', 'Juicy stone fruit'),
    fruit('Nectarine', 'Smooth-skinned peach'),
    fruit('Watermelon', 'Early melons'),
    fruit('Mango', 'Sweet and tropical'),
  ],
  7: [
    fruit('Blueberry', 'Peak blueberry month'),
    fruit('Raspberry', 'Summer raspberries'),
    fruit('Blackberry', 'Bramble berries'),
    fruit('Peach', 'Juicy and fragrant'),
    fruit('Nectarine', 'Firm and sweet'),
    fruit('Plum', 'Sweet and diverse'),
    fruit('Watermelon', 'Classic summer fruit'),
    fruit('Melon', 'Cantaloupe and honeydew'),
    fruit('Cherry', 'Late cherries'),
    fruit('Strawberry', 'Late season'),
    fruit('Mango', 'Tropical peak'),
  ],
  8: [
    fruit('Peach', 'Peak peach season'),
    fruit('Nectarine', 'Abundant'),
    fruit('Plum', 'All varieties'),
    fruit('Watermelon', 'Sweet and hydrating'),
    fruit('Melon', 'Cantaloupe, honeydew'),
    fruit('Blueberry', 'Late harvest'),
    fruit('Raspberry', 'Second crop'),
    fruit('Blackberry', 'Wild and cultivated'),
    fruit('Fig', 'Unique and sweet'),
    fruit('Grape', 'Early grapes'),
    fruit('Mango', 'Still great'),
  ],
  9: [
    fruit('Apple', 'New crop apples'),
    fruit('Pear', 'Fall pears'),
    fruit('Plum', 'Late plums'),
    fruit('Grape', 'Peak grape season'),
    fruit('Fig', 'Second fig wave'),
    fruit('Melon', 'Late melons'),
    fruit('Raspberry', 'Fall raspberries'),
    fruit('Blackberry', 'End of season'),
    fruit('Peach', 'Late peaches'),
    fruit('Nectarine', 'Final harvest'),
  ],
  10: [
    fruit('Apple', 'Peak apple season'),
    fruit('Pear', 'Sweet and juicy'),
    fruit('Grape', 'Table grapes'),
    fruit('Fig', 'Late figs'),
    fruit('Cranberry', 'Harvest begins'),
    fruit('Pomegranate', 'Ruby seeds'),
    fruit('Plum', 'Last of season'),
    fruit('Persimmon', 'Sweet when soft'),
    fruit('Melon', 'Storage melons'),
  ],
  11: [
    fruit('Apple', 'Many varieties'),
    fruit('Pear', 'Winter pears'),
    fruit('Cranberry', 'Thanksgiving staple'),
    fruit('Pomegranate', 'Peak season'),
    fruit('Persimmon', 'Sweet and unique'),
    fruit('Orange', 'Early navels'),
    fruit('Grapefruit', 'Starting'),
    fruit('Pear', 'Anjou and Bosc'),
    fruit('Kiwi', 'Green kiwis'),
  ],
  12: [
    fruit('Apple', 'Cold-storage apples'),
    fruit('Pear', 'Holiday pears'),
    fruit('Orange', 'Navel oranges'),
    fruit('Grapefruit', 'Citrus season'),
    fruit('Clementine', 'Holiday favorite'),
    fruit('Tangerine', 'Stocking stuffer'),
    fruit('Cranberry', 'Sauces and baking'),
    fruit('Pomegranate', 'Still excellent'),
    fruit('Persimmon', 'Sweet winter fruit'),
    fruit('Lemon', 'For holiday baking'),
  ],
};

export function getFruitsByMonth(month: number): { month: number; monthName: string; fruits: Fruit[] } {
  const m = Math.max(1, Math.min(12, Math.floor(month)));
  return {
    month: m,
    monthName: MONTH_NAMES[m - 1],
    fruits: FRUITS_BY_MONTH[m] ?? [],
  };
}

export function getMonthNames(): { value: number; label: string }[] {
  return MONTH_NAMES.map((label, i) => ({ value: i + 1, label }));
}
