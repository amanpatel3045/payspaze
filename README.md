# 💳 React Payment SPA

A single-page application (SPA) built using React.js and Material UI that simulates a payment form with mock API integration and error handling.

---

## 🚀 Features

* Payment form in a responsive dialog box
* Field validation (email, currency selection, positive numeric amount)
* Optional description
* Mock API integration simulating various response codes
* Error handling for 400, 401, and 5XX responses
* Beautiful UI with Material UI components

---

## 🏗️ Build Instructions

1. **Clone the repo:**

   ```bash
   git clone https://github.com/your-username/react-payment-spa.git
   cd react-payment-spa
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

---

## 📖 Usage Instructions

Click on the **Make Payment** button.

A dialog box will open asking for:

* **To →** Valid email address
* **From →** Select either BTC or ETH
* **Amount →** Enter a positive number (e.g. 100.50)
* **Description →** Optional

Click **Submit**.

The app will simulate a response using a mock API.

---

## 🧪 Mock API Behavior

Mock API function randomly simulates a response. You can trigger specific outcomes manually by using these test credentials in the **To (Email)** field:

| Email (To)                                                  | Triggers               | Behavior                             |
| ----------------------------------------------------------- | ---------------------- | ------------------------------------ |
| [success@example.com](mailto:success@example.com)           | ✅ Success (200)        | Shows success dialog                 |
| [badrequest@example.com](mailto:badrequest@example.com)     | ❌ Bad Request (400)    | Shows inline form error              |
| [unauthorized@example.com](mailto:unauthorized@example.com) | 🔐 Unauthorized (401)  | Simulates redirect to login (mocked) |
| [servererror@example.com](mailto:servererror@example.com)   | ⚠️ Server Error (500+) | Shows generic error message          |

---

## 💡 What I Would Implement With More Time

* Work on **Authentication** by creating a login page
* Use **middleware** for protected routes
* Implement **JWT token** based auth
* Add a **Node.js + Express.js + MongoDB** backend to store payment details
* Work on **Persistence** using **localStorage** to retain form or user data

---

## 📌 Assumptions

* User is expected to enter a valid email address
* Positive numbers only are allowed for payment amount
* This is a front-end-only mock app without backend API
* Redirect for 401 is mocked (no actual login page implemented)

---

## 📂 Tech Stack

* React.js
* Material UI
* Vite (for fast dev build)
* JavaScript
