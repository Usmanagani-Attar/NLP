# 🧠 NLP Based Departmental Report Generator

A **MERN Stack NLP Application** that generates **summaries**, performs **sentiment analysis**, and extracts **keywords** from departmental reports.  
The results are visualized using charts for better insights.

---
## 🌐 Live Demo

🔗 **Live Demo:** https://nlp-frontend-alpha.vercel.app/  
📂 **Backend API:** https://nlp-gv28.onrender.com

---

## 📌 About This Project

This project applies **Natural Language Processing (NLP)** techniques to departmental reports in order to:

- Perform sentiment analysis
- Extract important keywords
- Display analytical results using charts

---

## 🧩 Tech Stack

### 🎨 Frontend
- React.js
- Chart libraries for visualization

### ⚙️ Backend
- Node.js
- Express.js
- NLP processing
- JWT Authentication

### 🗄️ Database
- MongoDB (Local / Atlas)

---

## 📂 Project Structure

NLP-Report_Generator/
- │── report-api/               # Backend (Node.js + Express + MongoDB)
- │── report-app/               # Frontend (React)
  


---

## ⚙️ Requirements

Make sure you have the following installed:
 - Node.js (Recommended: v18 or v20 LTS)
 - npm
 - MongoDB (Local or MongoDB Atlas)

Check versions:
- node -v
- npm -v


---

## 🔧 Backend Setup (report-api)

1. Navigate to backend folder

- cd report-api


2. Install dependencies

- npm install

3. Create `.env` file
- report-api/.env


Add the following:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/report-generator
NODE_ENV=development
JWT_SECRET=change_this_secret
```

MongoDB Atlas (optional):
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/nlp_reports?retryWrites=true&w=majority
```

4. Start backend server
   
- npm start


**Backend runs at:**
```
http://localhost:5000
```

---

## 💻 Frontend Setup (report-app)

1. Navigate to frontend folder
- cd report-app


2. Install dependencies
- npm install


3. Start frontend
- npm start


**Frontend runs at:**
```
http://localhost:3000

```

---

## ▶️ Running Full Project (Two Terminals)

### Terminal 1 – Backend

- cd report-api
- npm install
- npm start


### Terminal 2 – Frontend
- cd report-app
- npm install
- npm start


---

## 📝 Notes

- `node_modules` is ignored using `.gitignore`
- Run `npm install` after cloning the repository
- `.env` file is not pushed for security reasons

---

## 👨‍💻 Author

**Usman**
Engineering Student | Full Stack & NLP Developer 🚀
