# 🤖 AI Interview Helper

AI Interview Helper is a full-stack web application that helps candidates prepare for interviews by analyzing their resume and a target job description using Google Gemini AI.

The application generates a personalized interview preparation strategy including:

* Match Score Analysis
* Technical Interview Questions
* Behavioral Interview Questions
* Skill Gap Identification
* Preparation Roadmap
* ATS-Friendly Resume Generation

---

## 🚀 Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes

### AI-Powered Interview Analysis

* Upload Resume (PDF)
* Provide Job Description
* Optional Self Description
* AI-generated Interview Strategy

### Interview Report

* Match Score (0–100)
* Technical Questions with Suggested Answers
* Behavioral Questions with Suggested Answers
* Skill Gap Analysis
* Personalized Preparation Plan

### Resume Generator

* AI-generated ATS-friendly Resume
* PDF Download Support
* Tailored according to Job Description

### Dashboard

* View Previous Reports
* Access Interview History
* Download Generated Resume

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router
* Context API
* SCSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### AI & Processing

* Google Gemini API
* Zod Validation
* PDF Parse
* Puppeteer

### Authentication

* JWT
* bcrypt

---

## 📂 Project Structure

```text
AI-Interview-Helper
│
├── Frontend
│   ├── src
│   │   ├── features
│   │   │   ├── auth
│   │   │   └── interview
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── Backend
│   ├── src
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── models
│   │   ├── router
│   │   ├── services
│   │   └── config
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/Sarthak050205/AI-Interview-Helper.git
cd AI-Interview-Helper
```

---

### 2. Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

Start Backend:

```bash
npm run dev
```

---

### 3. Setup Frontend

```bash
cd Frontend
npm install
npm run dev
```

---

## 📖 Usage

1. Register/Login.
2. Upload your Resume (PDF).
3. Paste the Target Job Description.
4. Optionally provide a Self Description.
5. Click **Generate My Interview Strategy**.
6. Review:

   * Match Score
   * Technical Questions
   * Behavioral Questions
   * Skill Gaps
   * Preparation Plan
7. Download the AI-generated Resume PDF.

---

## 📸 Screenshots

### Home Page

*Add screenshot here*

### Interview Report

*Add screenshot here*

### Skill Gap Analysis

*Add screenshot here*

### Preparation Roadmap

*Add screenshot here*

---

## 🔍 Challenges Solved

During development, several real-world engineering challenges were solved:

* AI JSON Structure Validation
* Gemini API Error Handling (503 Retries)
* MongoDB Schema Validation
* Resume PDF Parsing
* Authentication & Route Protection
* Frontend Loading State Management
* AI Response Validation using Zod

---

## 🎯 Future Improvements

* AI Mock Interview Chatbot
* Voice-based Interview Practice
* Resume ATS Score Checker
* Email Report Sharing
* Multi-Resume Comparison
* Interview Progress Tracking

---

## 👨‍💻 Author

**Sarthak Kumar Lohani**

GitHub:
https://github.com/Sarthak050205

LinkedIn:
https://www.linkedin.com/in/sarthak-kumar-lohani-214aab325

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.
