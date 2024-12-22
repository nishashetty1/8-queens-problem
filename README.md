# 8 Queens Problem - AI-Powered Solution

This repository contains an AI-powered solution to the classic **8 Queens Problem**. The problem involves placing 8 queens on a chessboard in such a way that no two queens threaten each other, meaning no two queens share the same row, column, or diagonal.

## Game Overview

The **8 Queens Problem Game** is an interactive implementation where AI solves the problem or assists the user by placing queens on the board. The game provides both an AI-driven solution and a user-driven experience, allowing you to explore the solution in an engaging way.

You can play the game by visiting the hosted version below:

[Play the 8 Queens Problem Game](https://nishashetty1.github.io/8-queens-problem/)

## Features

- **AI-Powered Solution**: The game uses AI to solve the 8 Queens Problem using backtracking, showing you step-by-step how the queens are placed on the board.
- **Interactive Gameplay**: You can start the game with 2 queens randomly placed on the board or You can put AI in action to play the game.
- **Manual Mode**: Play the game on your own by placing queens and trying to solve the puzzle without AI assistance.
- **Solve Button**: If you're stuck, you can click the "Solve" button, and the AI will complete the solution for you.

## User Manual

1. **Starting the Game**: 
   - Upon loading the game, you can either choose to start the game with **2 queens randomly placed** on the board for you to begin solving, or you can click the "Solve" button to let the AI solve the puzzle automatically.
   
2. **Manual Mode**:
   - In this mode, you can manually place the queens on the board, row by row, ensuring that no queens threaten each other. The goal is to place all 8 queens on the board such that no two queens share the same row, column, or diagonal.

3. **AI Mode**:
   - If you choose the "Solve" option, the AI will automatically solve the puzzle using a backtracking algorithm, placing each queen on the board one step at a time. You can watch how the AI works to find a solution.

4. **Reset the Game**:
   - You can reset the game at any time by refreshing the page or clicking New Game Button.

## Tech Stack

- **HTML5** for structuring the game board and layout.
- **CSS3** for styling the game interface.
- **JavaScript** for the AI algorithm that solves the 8 Queens Problem.

## How the AI Algorithm Works

The AI solves the 8 Queens Problem using a **backtracking algorithm**. Here's a quick explanation of how it works:

1. The algorithm starts by placing a queen in the first row and tries all possible columns.
2. For each row, it places a queen in a column that doesn't conflict with the already placed queens.
3. If it finds a safe column, it moves to the next row and repeats the process.
4. If a conflict arises (i.e., no safe column is available in a row), the algorithm "backtracks" to the previous row, moves the queen to the next available column, and tries again.
5. This process continues until all 8 queens are placed on the board without any conflicts.

## Contribution

If you have any suggestions or want to contribute to the project, feel free to fork the repository and submit a pull request!
