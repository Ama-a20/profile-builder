# Developer Profile Builder

A JavaScript application that processes developer data and displays various analytics using modern ES6+ features.

##  Student Information

 **Name**   | Amarachi Onyeke
 **Track**  | React intermediate
 **Course** | JavaScript ES6+ Fundamentals 
 **Date**   | 11-05-2026 


## Project Description

This project demonstrates the practical application of ES6+ JavaScript features by building a developer profile data processor. The application takes an array of developer objects and generates:

- Individual profile cards for each developer
- A unique skills pool from all developers
- Track-based statistical summaries
- Immutable array/object operations
- Mentor workload distribution
- Experience-based ranking system



## ES6+ Features Demonstrated

 **Arrow Functions**            | All functions use arrow syntax 
 **Destructuring**              | Function parameters and object extraction 
 **Spread Operator**            | Copying arrays, merging objects, adding new items 
 **Rest Operator**              | Not used in this project 
 **Template Literals**          | All string formatting and console output 
 **Optional Chaining (`?.`)**   | Safely accessing mentor.name 
 **Nullish Coalescing (`??`)**  | Default values for null/undefined 
 **Array Methods**              | `map()`, `filter()`, `reduce()`, `flatMap()`, `sort()` 
 **Set Object**                 | Removing duplicates from skills array 
 **Immutability**               | Never mutating original data structures 




## Expected Output (7 Steps)

**STEP 1: Profile Cards**
Displays formatted profile for each developer with name, track, skills, projects, availability, and mentor.

**STEP 2: Unique Skills Pool**
Shows all unique skills across all developers, sorted alphabetically.

**STEP 3: Track Summary**
Per-track statistics showing developer count, available developers, and total completed projects.

**STEP 4: Add a New Developer**
Demonstrates immutable array addition - original array unchanged, new array created.

**STEP 5: Update a Developer**
Demonstrates immutable object update - merges changes without mutating original.

**STEP 6: Mentor Workload**
Counts how many developers each mentor has (handles null mentors as "Unassigned").

**STEP 7: Experience Ranking**
Ranks developers by total projects (completed + ongoing), with medal emojis for top 3.


## Prerequisites

Before running this project, ensure you have:

- **Node.js** (version 12 or higher)
- **npm** (usually comes with Node.js)
- A terminal/command prompt

### Check if Node.js is installed:

_bash_

node --version

- If you see an error, download Node.js from nodejs.org

**Save the JavaScript file**

- Copy the code into a file named profileBuilder.js
- Open terminal in the file location

_bash_

- cd path/to/your/project/folder

**Verify the file exists**

_bash_

- ls        # On Mac/Linux
- dir       # On Windows
You should see profileBuilder.js in the list

### Terminal/Command Line
Navigate to the folder containing profileBuilder.js and run:

_bash_

node profileBuilder.js

### Alternatively, on VS Code (Recommended) or any other code editor

- Open profileBuilder.js in VS Code
- Open the integrated terminal: Ctrl + `
- Type and run:
_bash_

node profileBuilder.js

When successfully exceuted, the seven steps/output listed prior are expected to be in full display.

### Learning Outcomes
After completing this project, I have a better understanding of :

- How to use modern ES6+ syntax effectively.
- How to process arrays of objects using functional methods.
- How to maintain immutability in JavaScript.
- How to safely access nested properties.
- How to format console output professionally.
- How to run JavaScript outside the browser using Node.js.

