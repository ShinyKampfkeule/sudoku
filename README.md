# Sudoku

A modern, interactive Sudoku puzzle game built with Next.js, React, and TypeScript. Features keyboard and button controls, note-taking functionality, and a sleek UI.

## Features

- **Keyboard Controls**:
  - Arrow keys or WASD to navigate
  - Numbers 1-9 to fill cells
  - Backspace/Delete to clear cells
  - 'N' key to toggle note mode
- **Note-Taking**: Add multiple candidate numbers to cells
- **Real-Time Validation**: Instant feedback when puzzles are solved
- **Responsive Design**: Works on desktop and tablet devices

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 15+
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: Radix UI primitives
- **State Management**: React Hooks
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

First, run the development server:

```bash
pnpm install
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to play.

### Building

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/                          # Next.js app directory
├── components/ui/                # Reusable UI components
├── src/
│   ├── features/
│   │   ├── sudokuBoard/         # Board logic and components
│   │   └── inputs/              # Input controls and buttons
│   ├── interfaces/              # TypeScript interfaces
│   ├── json/                    # Puzzle data
│   └── functions/               # Utility functions
└── lib/                         # Helper utilities
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Features in Development

- Undo/Redo functionality
- Hint system
- Eraser tool
- Multiple difficulty levels
- Save game progress

## License

This project is open source and available under the MIT License.
