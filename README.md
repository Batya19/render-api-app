# 🚀 Render API App
> Node.js application for managing Render cloud services via REST API

[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18+-black?logo=express&logoColor=white)](https://expressjs.com/)
[![Render API](https://img.shields.io/badge/Render-API-blue?logo=render&logoColor=white)](https://render.com/)

**Simple, efficient API client for retrieving and managing your Render services.**

## 🎯 What It Does
This app connects to your Render account via API and provides a clean endpoint to fetch all your deployed services as JSON. Perfect for monitoring, automation, or building custom dashboards.

## ⚡ Quick Start

```bash
# Clone & install
git clone https://github.com/Batya19/render-api-app.git
cd render-api-app
npm install

# Setup your API key
cp .env.example .env
# Add your Render API key to .env

# Run the app
npm start
```

## 🔌 API Endpoints

- **`GET /`** - Welcome message and available endpoints
- **`GET /services`** - Returns all services from your Render account

## 🔑 Setup API Key

1. Go to [Render Dashboard → Account Settings](https://dashboard.render.com/u/settings)  
2. Navigate to **API Keys** section  
3. Click **Create API Key**  
4. Copy the key and add to your `.env` file:

```env
RENDER_API_KEY=your_api_key_here
PORT=3000
```

## 📊 Example Response

```json
{
  "success": true,
  "count": 3,
  "services": [
    {
      "id": "srv-xxxxx",
      "name": "my-web-app",
      "type": "web_service",
      "repo": "github.com/user/repo",
      "status": "active"
    }
  ]
}
```

## 🌐 Deploy to Render

1. Push code to GitHub
2. Create **Web Service** in Render
3. Connect your repository  
4. Add environment variable: `RENDER_API_KEY`
5. Deploy! 🎉

## 🛠️ Tech Stack

**Backend:** Node.js, Express.js  
**HTTP Client:** Axios  
**Environment:** dotenv  
**API:** Render REST API v1

## 👩‍💻 Author

**Batya** - [GitHub](https://github.com/Batya19)

---

<div align="center">

**Made with ❤️ for seamless cloud management**

</div>