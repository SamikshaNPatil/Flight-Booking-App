# Flight-Booking-App
Celebal Project


A simple **JavaScript-based Flight Booking App** that allows users to search and book flights using a chatbot interface. The application is divided into three key JavaScript files: `bot.js`, `flightData.js`, and `index.js`.

---

## 📁 File Structure


---

## 📦 Overview of Files

### ✅ `bot.js`
- Handles chatbot logic.
- Takes user inputs (source, destination, date).
- Guides user through booking steps.
- Communicates with `index.js` to fetch results.

### ✅ `flightData.js`
- Stores a list of available flights.
- Contains functions to:
  - Search flights by route and date.
  - Return filtered results to the chatbot.

### ✅ `index.js`
- Acts as the controller.
- Initializes chatbot.
- Handles user input → searches flights → confirms booking.
- Integrates both `bot.js` and `flightData.js`.

---

## 🛠️ Technologies Used

- Vanilla **JavaScript**
- (Optional) **HTML/CSS** if UI is used
- No external libraries or frameworks required

---

## 🧪 How to Run

### 📌 Option 1: Browser (with UI)
1. Make sure all JS files are included in `index.html`.
2. Open `index.html` in your browser.
3. Interact with the chatbot on screen.

### 📌 Option 2: Console (CLI-style)
1. Open the folder in any IDE (like VS Code).
2. Use browser console or Node.js to test the logic via logs and input functions.

---

## 💬 Sample Interaction (Chatbot)


---

## 🚀 Features

- ✈️ View available flights between cities
- 🧠 Intelligent bot flow for user input
- 📅 Search by travel date
- 💳 Book flight with confirmation message

---

## 📌 Sample Flight Data Format (from `flightData.js`)

```js
const flights = [
  {
    id: 1,
    source: "Pune",
    destination: "Bengaluru",
    date: "2025-07-25",
    airline: "IndiGo",
    time: "10:00 AM",
    price: 4500
  },
  // More flights...
];
