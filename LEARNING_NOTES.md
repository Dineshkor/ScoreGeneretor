# 🏀 ScoreGenerator - React Learning Notes

This document captures the key React concepts learned while building this Score Generator app.

---

## 📚 Table of Contents

1. [Component Basics](#1-component-basics)
2. [Props](#2-props)
3. [State with useState](#3-state-with-usestate)
4. [Lifting State Up](#4-lifting-state-up)
5. [Event Handling](#5-event-handling)
6. [Tailwind CSS Responsive Design](#6-tailwind-css-responsive-design)

---

## 1. Component Basics

### Creating a Functional Component

```jsx
// ✅ Correct - with const keyword
const ScoreCard = () => {
    return (
        <div>
            <h2>ScoreCard</h2>
        </div>
    )
}

export default ScoreCard

// ❌ Wrong - missing const/function keyword
ScoreCard = () => { ... }  // This will cause an error!
```

### Key Points:
- Always use `const` or `function` to declare components
- Component names must start with a **capital letter** (PascalCase)
- Always export your component with `export default`

---

## 2. Props

### Passing Props (Parent → Child)

```jsx
// In App.jsx (Parent)
<ScoreCard teamName="Home" score={homeScore} handleClick={addHomeScore} />

// In ScoreCard.jsx (Child) - Destructure props
const ScoreCard = ({ teamName, score, handleClick }) => {
    return <h2>{teamName}: {score}</h2>
}
```

### Prop Syntax Rules:

| Type | Syntax | Example |
|------|--------|---------|
| String | `prop="value"` | `teamName="Home"` |
| Number/Variable | `prop={value}` | `score={homeScore}` |
| Function | `prop={function}` | `handleClick={addScore}` |

### ❌ Common Mistakes:

```jsx
// ❌ WRONG - Double braces create object literal
<ScoreCard {{teamName="Home"}} />

// ❌ WRONG - Using = inside object
<ScoreCard {{teamName: "Home", score}} />

// ✅ CORRECT - Props as attributes
<ScoreCard teamName="Home" score={score} />
```

---

## 3. State with useState

### Basic Usage

```jsx
import { useState } from 'react'

const ScoreCard = () => {
    const [score, setScore] = useState(0)  // Initial value is 0
    
    const addScore = (points) => {
        setScore(score + points)  // Update state
    }
    
    return <h2>Score: {score}</h2>
}
```

### Key Points:
- `useState` returns an array: `[currentValue, setterFunction]`
- Use the setter function to update state (never modify directly!)
- When state changes, component re-renders automatically

---

## 4. Lifting State Up

### The Problem:
When a **child component** has state, but a **parent component** needs to control it (like a Reset button).

### The Solution:
Move the state to the **parent** and pass it down as **props**.

```
BEFORE (State in child - Reset can't access it):
App.jsx
  └── ScoreCard.jsx (has useState) ← Reset button can't reach this!

AFTER (State lifted to parent):
App.jsx (has useState) ← Reset button can access this!
  └── ScoreCard.jsx (receives props)
```

### Implementation:

```jsx
// App.jsx (Parent - OWNS the state)
function App() {
    const [homeScore, setHomeScore] = useState(0)
    
    const addHomeScore = (value) => {
        setHomeScore(homeScore + value)
    }
    
    const resetScore = () => {
        setHomeScore(0)
    }
    
    return (
        <>
            <ScoreCard 
                teamName="Home" 
                score={homeScore}           // Pass data DOWN
                handleClick={addHomeScore}  // Pass function DOWN
            />
            <button onClick={resetScore}>Reset</button>
        </>
    )
}

// ScoreCard.jsx (Child - USES the props)
const ScoreCard = ({ teamName, score, handleClick }) => {
    return (
        <div>
            <h2>{teamName}: {score}</h2>
            <Button text="+1" onClick={() => handleClick(1)} />
        </div>
    )
}
```

### Data Flow:
```
📊 Data flows DOWN (via props)
🔄 Actions flow UP (via callback functions)
```

---

## 5. Event Handling

### onClick Handler

```jsx
// Method 1: Inline function (when you need to pass arguments)
<Button onClick={() => handleClick(1)} />

// Method 2: Reference function (when no arguments needed)
<button onClick={resetScore}>Reset</button>
```

### ❌ Common Mistake:

```jsx
// ❌ WRONG - This calls the function immediately!
<button onClick={handleClick(1)}>+1</button>

// ✅ CORRECT - Wrap in arrow function
<button onClick={() => handleClick(1)}>+1</button>
```

---

## 6. Tailwind CSS Responsive Design

### Mobile-First Approach

Tailwind uses **mobile-first** breakpoints. Unprefixed classes apply to all sizes, prefixed classes apply at that breakpoint **and above**.

| Prefix | Screen Width | Example |
|--------|-------------|---------|
| (none) | All sizes | `flex-col` |
| `sm:` | ≥ 640px | `sm:flex-row` |
| `md:` | ≥ 768px | `md:text-xl` |
| `lg:` | ≥ 1024px | `lg:px-8` |

### Example:

```jsx
<div className="flex flex-col sm:flex-row gap-8">
    {/* 
        📱 Mobile (< 640px): Vertical stack (flex-col)
        💻 Desktop (≥ 640px): Horizontal row (sm:flex-row)
    */}
</div>
```

### Flexbox Alignment:

| Direction | `items-center` | `justify-center` |
|-----------|---------------|------------------|
| `flex` (row) | Centers vertically | Centers horizontally |
| `flex-col` | Centers horizontally | Centers vertically |

### Important:
For centering to work, the container needs **defined dimensions** (like `w-full` or `h-screen`).

---

## 🎯 Project Structure

```
ScoreGenerator/
├── src/
│   ├── components/
│   │   ├── Button.jsx        # Reusable button (dumb component)
│   │   ├── ScoreCard.jsx     # Team score section
│   │   └── ScoreCountCard.jsx # Score display
│   ├── App.jsx               # Main app (owns state)
│   ├── App.css               # App styles
│   ├── index.css             # Tailwind imports
│   └── main.jsx              # Entry point
├── package.json
└── vite.config.js
```

---

## 🧠 Key Takeaways

1. **Components** are reusable building blocks
2. **Props** pass data from parent to child
3. **State** makes components interactive
4. **Lift state up** when multiple components need to share data
5. **Callbacks** let children communicate with parents
6. **Mobile-first** design with Tailwind breakpoints

---

Happy Coding! 🚀
