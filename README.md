## 🧩 Mini Sudoku 4×4 Web Game

A lightweight, interactive 4×4 Mini Sudoku puzzle game built with Reddit Devvit's web game framework. The game offers a fast, engaging experience with real-time validation, clean UX, and type-safe TypeScript implementation.

### ✨ Features

- **4×4 Grid-Based UI**: Classic Mini Sudoku puzzle layout with visual 2×2 box divisions
- **Interactive Cell Selection**: Click any empty cell to select it (visual highlight with blue outline)
- **Number Input Methods**:
  - Click number buttons (1-4)
  - Use keyboard numbers (1-4)
  - Clear with "Clear" button or Backspace/Delete keys
- **Real-Time Validation**:
  - Instant conflict detection (no duplicates in rows, columns, or 2×2 boxes)
  - Visual error feedback (red highlighting) with toast message
  - Shows validation errors for 2 seconds before auto-dismissing
- **Success Messaging**: Green success toast appears when puzzle is completely solved
- **Reset Functionality**: "New Puzzle" button restarts the game instantly
- **Keyboard Support**:
  - `1-4`: Place numbers
  - `Backspace`/`Delete`: Clear cell
  - `Escape`: Deselect cell
- **Responsive Design**: Works on desktop and mobile with proper spacing and touch targets
- **Type-Safe TypeScript**: Full type safety with interfaces for `Cell` and `GameState`

### 🎮 How to Play

1. **Select a Cell**: Click any empty cell (white background)
2. **Enter a Number**: Click a number button or press `1-4`
3. **Validate**: System checks for conflicts in real-time
   - ✅ Valid move → number placed
   - ❌ Conflict → error message shows
4. **Clear**: Use "Clear" button or press `Backspace`
5. **Solve**: Fill all cells correctly to win
6. **Reset**: Click "New Puzzle" to start over

### 🎯 Game Rules

In 4×4 Sudoku:

- Each **row** must contain numbers 1-4 without duplicates
- Each **column** must contain numbers 1-4 without duplicates
- Each **2×2 box** must contain numbers 1-4 without duplicates

### 🏗️ Architecture

```
src/
├── client/
│   ├── game.html          # Game UI markup
│   ├── game/
│   │   ├── game.ts        # Main game logic (300+ lines)
│   │   └── game.css       # Polished styling with animations
│   ├── splash.html        # Welcome screen
│   ├── splash/
│   │   ├── splash.ts      # Splash screen logic
│   │   └── splash.css     # Splash styling
│   └── vite.config.ts
├── server/
│   ├── index.ts           # Backend API
│   └── vite.config.ts
├── shared/
│   └── types/
│       └── api.ts         # Shared type definitions
```

### 🛠️ Technical Implementation

**Core Game Logic** (`game.ts`):

- `interface Cell`: Typed row/column coordinates
- `interface GameState`: Game state management (selected cell, grid, win status)
- `isValidMove()`: Validates moves against Sudoku rules
- `checkWin()`: Checks if puzzle is completely solved
- `renderGrid()`: Renders 4×4 grid with proper styling
- `placeNumber()`: Handles valid/invalid placements
- `clearCell()`: Clears selected cell
- `resetPuzzle()`: Resets game to initial state

**Styling** (`game.css`):

- CSS Grid for precise 4×4 layout
- Box borders using `:nth-child()` selectors
- Smooth transitions and animations
- Color-coded states (selected, locked, conflict, success)
- Mobile-responsive with adaptive font sizing

### 🎨 Color Scheme

- **Primary**: Reddit's signature red (#d93900)
- **Success**: Green (#0cce6b) with pulse animation
- **Error**: Orange-red (#ff4500) with shake animation
- **Locked cells**: Light gray background
- **Selected cell**: Light blue highlight with red border

### ⌨️ Keyboard & Touch UX

- **Full keyboard support** for fast gameplay
- **Touch-friendly** button sizes (50px × 50px)
- **Visual feedback**: Hover states, active states, animations
- **Fast validation**: Instant feedback on invalid moves
- **Auto-dismiss**: Error messages disappear after 2 seconds

### 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Develop locally**:

   ```bash
   npm run dev
   ```

   This starts the development server with live reloading

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Deploy to Reddit** (requires authentication):
   ```bash
   npm run deploy
   ```

### 📦 Dependencies

- **@devvit/web**: Devvit web framework
- **devvit**: Devvit CLI and SDK
- **TypeScript**: Type safety
- **Vite**: Fast build tool
- **Express**: Backend API (optional)

### 🔄 Game State Management

The game uses a centralized `GameState` object:

```typescript
interface GameState {
  selected: Cell | null; // Currently selected cell
  grid: number[][]; // Current puzzle state
  gameWon: boolean; // Win flag
}
```

State updates trigger `renderGrid()` for UI sync.

### ✅ Features Demo

```
Initial Puzzle:
┌───┬───┐
│ 1 │ · · 4 │
├───┼───┤
│ · 4 1 · │
├───┼───┤
│ · 1 3 · │
├───┼───┤
│ 3 · · 2 │
└───┴───┘

Solution:
┌───┬───┐
│ 1 3 │ 2 4 │
├───┼───┤
│ 2 4 │ 1 3 │
├───┼───┤
│ 4 1 │ 3 2 │
├───┼───┤
│ 3 2 │ 4 1 │
└───┴───┘
```

### 🤝 Contributing

This is a Reddit Devvit starter template. To extend it:

1. Add more puzzles to `src/client/game/game.ts`
2. Customize colors in `src/client/game/game.css`
3. Add difficulty levels with different puzzle counts
4. Integrate backend API for leaderboards

### 📄 License

Syazyyy

---

**Built with ❤️ for Reddit Devvit**
