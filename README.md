# Dev Dashboard (Timer & Quotes App)

A sleek web dashboard designed for developers, featuring a precision digital focus timer and a live random motivational quotes section powered by an external API.

---

## Features

- **Stable Digital Timer:** Displays time in a strict `HH:MM:SS` format, preventing UI shifting using `padStart`.
- **Event Delegation:** Optimized performance using a single event listener on the control container combined with a `switch` statement to handle actions.
- **Asynchronous Data Fetching:** Retreives live data from a remote server using JavaScript `fetch` and `async/await`.
- **Modern UI:** Clean, dark-mode glassmorphism design suitable for developer environments.

---

## Tech Stack

- **HTML5:** Semantic page structure.
- **CSS3:** Custom layouts, dark-mode styling, and responsive UI elements.
- **Vanilla JavaScript (ES6+):** Timer logic, event handling, and asynchronous API communication.
- **DummyJSON API:** External data source for generating random quotes.

---

## Project Structure

```text
├── index.html       # Entry point and HTML skeleton
├── style.css        # UI styling and visual presentation
├── app.js           # Core application logic (Timer & Fetch API)
└── README.md        # Project documentation
