import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // si Node <18
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;
const apiUrl = 'http://localhost:3050/api/auth';

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser())

app.get("/api/me", async (req, res)=> {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({ message: "Not authenticated", status: "error"});
  }

  try {
    const response = await fetch(`${apiUrl}/`, {
      headers: { Authorization: token }
    });

    if (!response.ok) {
      return res.status(response.status).json({ message: "Invalid token", status: "error" });
    }

    const user = await response.json();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "SSR error" });
  }
})
app.post('/api/login', async (req, res) => {
  try {
    const response = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      return res.status(response.status).json(await response.json());
    }
    const body= await response.json();
    const headers = {
      authorization: response.headers.get('Authorization') ?? undefined,
      idUsuario: response.headers.get('Id-Usuario') ?? undefined,
      username: response.headers.get('Nombre-Usuario') ?? undefined,
    };
    if(headers.authorization){
     res.cookie("accessToken", headers.authorization, {
        httpOnly: true,
        secure: false, // true si tenes HTTPS
        sameSite: "strict"
      });
    }

    res.status(response.status).json({ body, headers });
  } catch (err) {
    res.status(500).json({ status: 'error', message: `${err}` });
  }
});
app.post('/api/register', async (req, res) => {
  try {
    const response = await fetch(`${apiUrl}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    const text = await response.text(); // leemos como string
    let data;
    try {
      data = JSON.parse(text); // intentamos parsear JSON
    } catch {
      // si falla, devolvemos algo seguro
      data = { message: text };
    }


    res.status(response.status).json(data); // siempre JSON
  } catch (err) {
    res.status(500).json({ status: 'error', message: `SSR Server error: ${err}` });
  }
});
app.listen(PORT, () => console.log(`SSR backend running on port ${PORT}`));

