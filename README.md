# Seasonal Fruits

A small full-stack app that shows **seasonal fruits by month**: Express + TypeScript backend and a React frontend with a month selector and fruit cards (including images).

## What’s included

- **Backend** (`server/`): Express API with TypeScript
  - `GET /api/health` — health check
  - `GET /api/months` — list of months (value + label)
  - `GET /api/fruits?month=1` — fruits for a given month (1–13), with name, image URL, and description
- **Frontend** (`client/`): React + TypeScript (Vite)
  - Month dropdown
  - On month change, calls the API and displays fruits with images

## Prerequisites

- **Node.js** 18+ (and npm)

## How to run locally

### 1. Install dependencies

From the project root:

```bash
cd server && npm install
cd ../client && npm install
```

Or install everything in one go from the root (after `npm install` at root):

```bash
npm run install:all
```

### 2. Start the backend

In a terminal:

```bash
cd server
npm run dev
```

The API will be at **http://localhost:4000**.

### 3. Start the frontend

In another terminal:

```bash
cd client
npm run dev
```

The app will be at **http://localhost:5173**.  
Vite is configured to proxy `/api` to `http://localhost:4000`, so the frontend can call the backend without CORS issues.

### 4. (Optional) Run both with one command

From the project root, after `npm install` and `npm run install:all`:

```bash
npm run dev
```

This starts both the server and the client (requires `concurrently` from the root `package.json`).

## API

| Method | Endpoint            | Description |
|--------|---------------------|-------------|
| GET    | `/api/health`       | Health check |
| GET    | `/api/months`       | List of months `[{ value, label }]` |
| GET    | `/api/fruits?month=N` | Fruits for month `N` (1–13). Response: `{ month, monthName, fruits }`. Each fruit has `id`, `name`, `image`, `description`. |

Example:

```bash
curl "http://localhost:4000/api/fruits?month=6"
```

## Project layout

```
live-demo/
├── README.md
├── package.json          # optional root scripts (install:all, dev)
├── server/               # Express + TypeScript backend
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       ├── index.ts      # Express app and routes
│       └── data/
│           └── fruits.ts # Seasonal fruit data and images
└── client/               # React + Vite frontend
    ├── package.json
    ├── index.html
    ├── vite.config.ts    # dev server + /api proxy to backend
    ├── tsconfig.json
    └── src/
        ├── main.tsx
        ├── App.tsx
        ├── App.css
        ├── index.css
        ├── api.ts        # fetch months + fruits
        └── types.ts
```

## Build for production

- **Backend:**  
  `cd server && npm run build && npm start`  
  (serves from `dist/`.)

- **Frontend:**  
  `cd client && npm run build`  
  Output is in `client/dist`. Serve it with any static host or point your backend at it if you add a static middleware.

You now have a Node/Express (TypeScript) backend and a React frontend that show seasonal fruits by month, with images, and a README with clear steps to run everything locally.
