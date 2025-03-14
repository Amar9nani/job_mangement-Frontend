# 🚀 Job Management Admin Interface

This project is a **Job Management Admin Interface** that allows administrators to **create, manage, and filter job postings**. It is a **full-stack application** with:

## 🏗️ Tech Stack

### **Frontend** 🖥️
- **Framework:** Next.js ⚡
- **UI Library:** Mantine 🎨
- **Form Handling:** React Hook Form 📝
- **Language:** TypeScript 🏷️
- **Hosting:** [Vercel](https://vercel.com/) ☁️

### **Backend** 🛠️
- **Framework:** Node.js 🌍
- **Database:** PostgreSQL (hosted on [Railway](https://railway.app/)) 🛢️
- **Hosting:** [Render](https://render.com/) 🚀

---

## 🔥 Features

### **Frontend** 🎨
✅ **Job List Page:**
- Display a list of job postings.
- Filters:
  - **Job Title**: Text input.
  - **Location**: Text input.
  - **Job Type**: Dropdown (Full-time, Part-time, Contract, Internship).
  - **Salary Range**: Range slider.

✅ **Job Creation Page:**
- Form to create a new job posting.
- Form Handling: Uses **React Hook Form** for validation and efficient handling.

### **Backend** ⚙️
✅ Built with **Node.js** & **PostgreSQL**.
✅ Hosted on **Railway**.
✅ Provides **RESTful APIs** for managing job data:
  - **Job Creation**
  - **Job Retrieval**
  - **Job Updating**
  - **Job Deletion**

---

## 📌 Job Fields

### **Fields for Job Creation** 📝
- **Job Title**: Text input for the job's title.
- **Company Name**: Text input for the company's name.
- **Location**: Text input for the job's location.
- **Job Type**: Dropdown (Full-time, Part-time, Contract, Internship).
- **Salary Range**: Text input to specify the salary range.
- **Job Description**: Textarea for describing the job role.
- **Requirements**: Textarea to list job requirements.
- **Responsibilities**: Textarea to outline job responsibilities.
- **Application Deadline**: Date picker for application submission deadline.

### **Filters** 🔍
- **Job Title**: Text input for filtering jobs by title.
- **Location**: Text input for filtering jobs by location.
- **Job Type**: Dropdown for filtering by job type.
- **Salary Range**: Range slider for filtering jobs by salary.

---

## 🚀 Installation & Setup

### **Prerequisites** 📋
- **Node.js** (v16+)
- **PostgreSQL**
- **Railway account** (for backend hosting)
- **Yarn** or **npm** installed globally

### **Backend Setup** 🛠️
```sh
# Clone the backend repository:
git clone https://github.com/Amar9nani/job_mangement-Backend.git
cd backend

# Install dependencies:
npm install

# Set up environment variables:
touch .env
# Add the following in .env:
DATABASE_URL=<Your PostgreSQL connection string>

# Run the backend server:
npm run dev
```
📍 The backend server will be available at **http://localhost:8000**.

### **Frontend Setup** 🎨
```sh
# Clone the frontend repository:
git clone https://github.com/Amar9nani/job_mangement-Frontend.git
cd cybermindworks_frontend

# Install dependencies:
npm install

# Configure environment variables:
touch .env.local
# Add the following in .env.local:
NEXT_PUBLIC_API_URL=http://localhost:8000

# Run the frontend server:
npm run dev
```
📍 Access the frontend at **http://localhost:3000**.

---

## 🔗 API Endpoints

### **Jobs** 📌
- **GET /api/jobs** → Fetch all jobs 🗂️
- **POST /api/jobs** → Add a new job 🆕
- **PUT /api/jobs/:id** → Update a job ✏️
- **DELETE /api/jobs/:id** → Remove a job ❌

---

💡 **Contributions are welcome!** Feel free to open an issue or submit a PR. 🚀

