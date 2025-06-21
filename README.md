# 🚀 Mini URL Shortener API

This is a simple REST API that shortens long URLs and returns a short code. When the short code is accessed, it redirects to the original long URL.

Live Project: [https://url-shortner-e9km.onrender.com](https://url-shortner-e9km.onrender.com)

---

## 🧰 Tech Stack

- **Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **Database**: MongoDB (Atlas)
- **Hosting**: Render

---

## 📌 API Endpoints

### 🔹 POST `/shorten`
Shortens a long URL.

**Request:**
```
POST https://url-shortner-e9km.onrender.com/shorten
Content-Type: application/json
```

**Body:**
```json
{
  "url": "https://example.com/very/long/link"
}
```

**Success Response:**
```json
{
  "shortUrl": "https://short.ly/abc123x"
}
```

---

### 🔹 GET `/:code`
Redirects to the original long URL.

**Example:**
```
GET https://url-shortner-e9km.onrender.com/abc123x
```
Redirects to: `https://example.com/very/long/link`

---

## 🧪 Test Instructions (via Postman)

1. **POST /shorten**  
   Input a long URL in JSON body  
   Output will be a short URL

2. **GET /:code**  
   Paste the short URL in browser — it redirects

---

## 📦 Database Schema

- `shortId`: String (generated using `nanoid`)
- `longUrl`: Original long URL
- `createdAt`: (Default Mongo timestamp)

---

## ✅ Features

- URL validation using `validator`
- Error handling with `400` status
- MongoDB Atlas connection
- Deployed live on Render
- Output matches internship requirement (`https://short.ly/<code>`)

---

## 🚀 Getting Started (Local Setup)

```bash
git clone https://github.com/SanthoshNantha/url-shortner.git
cd url-shortener-api
npm install
```

Create a `.env` file:

```
MONGO_URL=your-mongodb-atlas-uri
```

Run the server:

```bash
node server.js
```

---

## 📄 Optional Features (To Add If Time Permits)

- [ ] Expiry logic for links
- [ ] Analytics: Track number of clicks
- [ ] Rate limiting with middleware

---

## 📬 Author

**Santhosh Nantha**

Feel free to fork and contribute!