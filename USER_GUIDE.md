# 🎮 Mini Sudoku - User Guide & Examples

## Quick Start

### 1. **Launch the Game**

- Open the game page on Reddit
- You'll see the 4×4 grid with some pre-filled numbers
- The gray cells are locked (cannot be changed)

### 2. **Select a Cell**

- Click any white empty cell
- You'll see it highlight in blue
- A red border appears around the selected cell

### 3. **Enter a Number**

- **Method 1**: Click one of the number buttons (1, 2, 3, 4)
- **Method 2**: Press 1, 2, 3, or 4 on your keyboard
- The number appears in the selected cell

### 4. **Validate Your Move**

- ✅ Valid: Number stays, cell updates
- ❌ Invalid: Red error message shows for 2 seconds
- If invalid, the number is NOT placed

### 5. **Clear a Number**

- **Method 1**: Click the "Clear" button
- **Method 2**: Press Backspace or Delete
- The cell becomes empty again

### 6. **Deselect a Cell**

- Press Escape key
- Click another cell
- The current selection is removed

### 7. **Solve the Puzzle**

- Fill all empty cells correctly
- When the last cell is placed correctly...
- 🎉 Success message appears!

### 8. **Start Over**

- Click "↻ New Puzzle"
- Grid resets to original puzzle
- Play again!

---

## 🧩 The Puzzle

### Initial State

```
┌─────┬─────┐
│ 1   │   4 │
│     │     │
├─────┼─────┤
│   4 │ 1   │
│     │     │
├─────┼─────┤
│   1 │ 3   │
│     │     │
├─────┼─────┤
│ 3   │   2 │
│     │     │
└─────┴─────┘

Empty cells: 8
Numbers to find: All numbers for each row, column, and box
```

### Solution

```
┌─────┬─────┐
│ 1 3 │ 2 4 │
│ 2 4 │ 1 3 │
├─────┼─────┤
│ 4 1 │ 3 2 │
│ 2 4 │ 1 3 │
├─────┼─────┤
│ 4 1 │ 3 2 │
│ 3 2 │ 4 1 │
├─────┼─────┤
│ 3 2 │ 4 1 │
│ 1 3 │ 2 4 │
└─────┴─────┘
```

---

## 🎯 The Rules

### Row Rule

Each horizontal line must have 1, 2, 3, 4 exactly once.

```
✅ VALID Row:    1 | 3 | 2 | 4  ← Contains all 4 numbers
❌ INVALID Row:  1 | 3 | 2 | 2  ← Duplicate 2s
```

### Column Rule

Each vertical line must have 1, 2, 3, 4 exactly once.

```
Column 1:  ✅ 1, 2, 4, 3  ← All different
Column 1:  ❌ 1, 1, 3, 4  ← Duplicate 1s
```

### Box Rule

Each 2×2 box must have 1, 2, 3, 4 exactly once.

```
Top-Left Box:
┌─────┐
│ 1 3 │  ✅ Contains 1, 3, 2, 4
│ 2 4 │
└─────┘

Top-Left Box:
┌─────┐
│ 1 3 │  ❌ Contains duplicate 1s
│ 1 4 │
└─────┘
```

---

## ⌨️ Keyboard Shortcuts

| Key         | Action                        |
| ----------- | ----------------------------- |
| `1-4`       | Place number in selected cell |
| `Backspace` | Clear selected cell           |
| `Delete`    | Clear selected cell           |
| `Escape`    | Deselect current cell         |
| `Click`     | Select/deselect cell          |

---

## 🎨 Understanding the UI

### Cell Colors

| Color                | Meaning                                 |
| -------------------- | --------------------------------------- |
| **Gray Background**  | Locked cell (pre-filled, cannot change) |
| **White Background** | Empty cell (can fill)                   |
| **Light Blue**       | Selected cell (ready for input)         |
| **Red Border**       | Selected cell indicator                 |
| **Red Background**   | Conflict detected (invalid number)      |

### Messages

| Message                       | Meaning      | Action                             |
| ----------------------------- | ------------ | ---------------------------------- |
| 🎉 "You solved the puzzle!"   | ✅ Game won  | Game is locked, click "New Puzzle" |
| ❌ "This number conflicts..." | Invalid move | Choose different number or clear   |
| (Empty)                       | No message   | Continue playing                   |

### Buttons

| Button         | Function                |
| -------------- | ----------------------- |
| `1, 2, 3, 4`   | Place that number       |
| `Clear`        | Remove number from cell |
| `↻ New Puzzle` | Reset game to start     |

---

## 📱 Mobile vs Desktop

### Desktop

- Grid size: 300px
- Button size: 50px
- Font size: 2em numbers
- Keyboard support: Full

### Mobile

- Grid size: 280px
- Button size: 45px
- Font size: 1.6em numbers
- Keyboard support: Limited (smaller keyboards)

---

## ❓ Common Questions

### Q: What happens if I put a wrong number?

**A:** The game won't let you! An error message appears (❌ "This number conflicts with another cell!"), and the number is NOT placed.

### Q: Can I change a number I placed?

**A:** Yes! Click the cell and:

- Click "Clear" to remove it, then enter a new number
- Or use Backspace/Delete

### Q: Can I change the gray numbers?

**A:** No, those are locked. They're hints to help you solve the puzzle.

### Q: How do I know I'm right?

**A:** You'll see the 🎉 success message when you completely solve the puzzle.

### Q: How long should it take?

**A:** 4×4 Mini Sudoku is fast! Most players solve it in 2-5 minutes.

### Q: Is there a timer?

**A:** Not in this version, but you can try to speed-run it!

### Q: Can I play multiple puzzles?

**A:** Click "↻ New Puzzle" to replay the same puzzle, or reload the page for a fresh start.

---

## 💡 Strategy Tips

### 1. **Look for Complete Rows/Columns**

Find which numbers are missing and place them where they fit.

### 2. **Check the 2×2 Boxes**

Each box must have all 4 numbers. If a box is missing just one, that's it!

### 3. **Eliminate Possibilities**

If a cell can only be one number (after checking row, column, box), place it.

### 4. **Work the Hardest Areas First**

Look for cells with fewer possibilities.

### 5. **Use the Locked Numbers as Guides**

They eliminate options in their row, column, and box.

---

## 🎯 Example Playthrough

### Starting Puzzle

```
1 · | · 4
· 4 | 1 ·
─────┼─────
· 1 | 3 ·
3 · | · 2
```

### Step 1: Look at Row 1

Row 1 has: 1, _, _, 4 → Missing 2, 3

- Box 1 (top-left) has: 1, _, _, 4 → Missing 2, 3
- Column 2 has: 4, 1, _, _ → Missing 2, 3
- Cell (0,1) can be 2 or 3

**Check Column 2**: Has 4, 1 → Missing 2, 3
**Check Box 1**: Has 1, 4 → Missing 2, 3

Let's look at another clue...

### Step 2: Look at Column 3

Column 3 has: 1, 3, _, _ → Missing 2, 4

### Step 3: Look at Row 2

Row 2 has: _, 4, 1, _ → Missing 2, 3

### Step 4: Solve It

Through logical deduction:

- Row 1, Col 2 = 3 (can't be 2, because row 2 needs 2 in col 4)
- Row 1, Col 3 = 2
- Row 2, Col 1 = 2
- Row 2, Col 4 = 3
- Row 3, Col 1 = 4
- Row 3, Col 4 = 2
- Row 4, Col 2 = 2
- Row 4, Col 3 = 4

### Final Solution

```
1 3 | 2 4
2 4 | 1 3
─────┼─────
4 1 | 3 2
3 2 | 4 1
```

**Result**: 🎉 Success!

---

## 🐛 Troubleshooting

### Game won't load

- Refresh the page
- Check internet connection
- Try a different browser

### Button clicks don't work

- Make sure you've selected a cell first (blue highlight)
- Check that it's an empty cell (white, not gray)

### Number won't place

- There's a conflict! Check the error message
- Review row, column, and box for duplicates

### Can't reset

- Click "↻ New Puzzle" button clearly
- Button should be below the number buttons

---

## 🎓 Learning Sudoku

This game teaches you:

- **Logic**: How to solve constraint-satisfaction problems
- **Pattern Recognition**: Spotting duplicates and missing numbers
- **Systematic Thinking**: Methodically working through possibilities
- **Time Management**: Solve quickly but accurately

4×4 is perfect for learning! Then try 9×9 Sudoku for the classic challenge.

---

## 🏆 Achievement Ideas

Try these challenges:

- **Speed Runner**: Solve in under 2 minutes
- **Perfect Intuition**: Solve without any errors
- **Blind Solver**: Solve without looking at the instructions
- **Keyboard Master**: Solve using only keyboard (no mouse)
- **One-Click**: Solve using minimal cell selections

---

## 📞 Support

If you encounter issues:

1. Refresh the page
2. Clear browser cache
3. Try a different browser
4. Check Reddit Devvit status page

---

## 🎉 Have Fun!

Mini Sudoku is designed for quick, satisfying gameplay. Enjoy the puzzle!

**Happy Solving!** 🧩

---

**Last Updated**: January 2026
**Game Version**: 1.0.0
**Difficulty**: Beginner-Friendly
**Average Play Time**: 2-5 minutes
