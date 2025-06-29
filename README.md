# NASA Explorer – Backend

This is the backend server for the NASA Explorer app. It is built with Node.js and Express using data from NASA's official public APIs.

## Features APIS

- View the Astronomy Picture of the Day (APOD
- Search NASA's vast image and video library
- Explore TechTransfer patents with category filter
- View live space weather alerts from DONKI
- Visualize Near-Earth Objects per day using a bar chart

##  Best Practices Followed

- **MVC file structure**: Controllers handle logic, services handle API calls, routes handle paths.
- **No hardcoded URLs or API keys** — everything is configurable via `.env`
- **Scalable API handling** using `axios.create` for base NASA APIs
- **Reusable utilities** (e.g. `formatDate()`)
- **Modular error handling** in all controllers
- **Clean folder organization** for readability 
  
File structure 
```bash
├── config/                # CORS and config setup
├── constants/             # Shared constants
├── controllers/           # business logic
├── routes/                # connects to controllers
├── services/              # handles external API logic
├── utils/                 # Utility functions (e.g., date formatter)
├── app.js                 # App entry point — sets up Express
├── .env                   # Environment variables (e.g., API keys)
└── README.md              # Project documentation
```

## Technologies

- Node.js
- Express.js
- Axios
- dotenv

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Akhiljith-kumar/NASA-EXPLORER-BE
   cd NASA-EXPLORER-BE
2. Create a .env file in the root directory
3. Install dependencies: npm install
4. Start the development server: npm run dev
