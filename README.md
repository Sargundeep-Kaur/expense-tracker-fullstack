# Expense Tracker — Full Stack Web Application

A full-stack expense tracking application built using React and Spring Boot to help users manage expenses and view expense summaries.

## Features

- Track and manage expenses.
- Organize expenses by category.
- View expense summaries.
- Interactive frontend built with React.
- REST API backend using Spring Boot.
- Maven-based backend dependency management.

## Tech Stack

**Frontend**
- React
- JavaScript
- Vite
- Tailwind CSS

**Backend**
- Java
- Spring Boot
- Maven

**Database**
- MySQL (if configured in the project)

## Project Structure

```text
expense-tracker-fullstack/
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── src/
│   ├── pom.xml
│   └── mvnw
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- Java JDK compatible with the project
- Maven wrapper included in the backend
- MySQL, if required by the application configuration

### 1. Clone the repository

```bash
git clone https://github.com/Sargundeep-Kaur/expense-tracker-fullstack.git
cd expense-tracker-fullstack
```

### 2. Run the frontend

```bash
cd client
npm install
npm run dev
```

Open the local URL shown in the terminal.

### 3. Run the backend

Open another terminal:

```bash
cd server
```

On Windows:

```bash
mvnw.cmd spring-boot:run
```

On macOS/Linux:

```bash
./mvnw spring-boot:run
```

Configure the database connection and required environment variables before running the backend, if applicable.

## Future Improvements

- Add authentication and user-specific expense records.
- Introduce monthly budgets and spending analytics.
- Add data visualization and export options.
- Deploy the frontend and backend.
- Add automated tests and stronger input validation.

## Author

**Sargundeep Kaur**

GitHub: https://github.com/Sargundeep-Kaur
