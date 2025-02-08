# React Native FlatList: Maximum Update Depth Exceeded

This repository demonstrates a common React Native bug involving the `FlatList` component and how to fix it. The bug occurs when rendering complex components within `FlatList` that cause excessive re-renders, ultimately leading to the dreaded 'Maximum update depth exceeded' error.

## Problem
The provided `bug.js` file shows an example of a `FlatList` rendering a `ComplexComponent`.  This component, due to inefficient use of `useState` and `useEffect`, re-renders unnecessarily with every item change in the list, causing the update depth to exceed the limit.

## Solution
The `bugSolution.js` file demonstrates the solution. The key improvements are:

1. **Memoizing ComplexComponent:** Using `React.memo` to prevent re-renders if props haven't changed.
2. **Optimizing useEffect:** Refactoring `useEffect` to only run when necessary.
3. **Using useCallback:** Improves performance by creating a stable callback reference.

## How to run
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npx react-native run-android` (or `npx react-native run-ios`) to run the app.

Try switching between the two files to observe the error and its resolution.