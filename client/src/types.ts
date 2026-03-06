export interface Fruit {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface FruitsResponse {
  month: number;
  monthName: string;
  fruits: Fruit[];
}

export interface MonthOption {
  value: number;
  label: string;
}
