# Netflix App — Day 8 Mini Project (Hook-Powered Utility App)

## Estructure

```
src/
├── App.jsx
├── components/
│   ├── SearchBar.jsx
│   └── MovieList.jsx
└── hooks/
    ├── useDebounce.js
    └── useMovies.js
```

## How to Run

1. `npm install`
3. `npm run dev`

## Reflection

1. **What is a custom hook?**

   A custom hook is a JavaScript function that let reuse logic in react.

2. **How is a custom hook different from a component?**

   A component returns JSX, displays UI, while a hook handles logic.

3. **When should you create a custom hook?**

   When you want to reuse a logic in your app.

4. **Which hook did you build that felt most useful?**

   useMovies, because it look up that movies in OMDb, it handle the list of movies, loading, and that error messages.

5. **How did custom hooks improve your code?**

Each piece has one job, so it's easier to find bugs and change things. 