# NLP-Report_Generator
MERN stack NLP app for generating summaries, sentiment analysis, and keyword extraction from departmental reports



# NLP Based Departmental Report Generator

A MERN stack project that generates departmental reports using NLP (summary, sentiment analysis, key terms) and displays results using charts.

---

##  Project Structure

Report Generator/
│── report-api/ # Backend (Node.js + Express + MongoDB)
│── report-app/ # Frontend (React)



---

##  Requirements

Make sure you have installed:

- Node.js (Recommended: v18 or v20 LTS)
- npm
- MongoDB (Local OR MongoDB Atlas)

Check versions:
```bash
node -v
npm -v


Backend Setup (report-api)
1. Go to backend folder
cd report-api

2. Install dependencies
npm install

3. Create .env file inside report-api
Create file:

report-api/.env


Add this:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/report-generator
NODE_ENV=development
JWT_SECRET=change_this_secret


If you are using MongoDB Atlas, use:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/nlp_reports?retryWrites=true&w=majority

4. Start backend server
npm start


Backend runs at:

http://localhost:5000




################################################################

Frontend Setup (report-app)
1. Open new terminal and go to frontend folder
cd report-app

2. Install dependencies
npm install

3. Start frontend
npm start
Frontend runs at:

arduino
Copy code
http://localhost:3000

Running Full Project (2 Terminals)

Terminal 1:
cd report-api
npm install
npm start

Terminal 2:
cd report-app
npm install
npm start


########$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$########

Notes

node_modules is not pushed (ignored using .gitignore)

Users must run npm install after cloning

.env is not pushed for security reasons


Author

Usmanagani-Attar