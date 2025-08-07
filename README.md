# 💬 MindCare

**MindCare** is an empathetic mental health chatbot web application designed to provide real-time conversational support, personalized well-being resources, and detailed emotional health reports.

Built using a React frontend and powered by an n8n backend workflow, MindCare intelligently interacts with users, delivers tailored suggestions, and generates emotional session reports — all in a seamless, privacy-conscious experience.

---

## 🧠n8n Workflow Agents:

- **EmoGuide Agent**: Handles empathetic, context-aware conversation with users. Maintains session memory, processes user input with the Gemini Chat Model, and fetches   personalized resource suggestions from Google Sheets.

- **InsightSynth Agent**: Analyzes the entire conversation and emotional context to generate detailed, personalized mental well-being session reports using the        OpenAI Chat Model and stored session data.

-  **CareCourier Agent**: Secures and sends the personalized session report via email to the user, completing the session workflow with delivery confirmation.

---

## ✨ Features

- 🧠 **Conversational AI**: Empathetic real-time interaction powered by the **EmoGuide** agent.
- 🌐 **Modern UI**: React-based chat interface styled with Tailwind CSS and typed with TypeScript.
- 🔗 **n8n Workflow Integration**: Webhook POST connections to backend logic hosted on n8n.
- 📚 **Smart Suggestions**: Personalized recommendations (apps, games, music, mental health content) retrieved via Google Sheets API.
- 📨 **Session Reports**: End-of-session emotional health summaries generated via **InsightSynth** and emailed through **CareCourier**.
- 🛠️ **Command Support**: Use `/end` to close session and trigger the report workflow.
- 🔒 **Privacy-first**: No user data is stored; interactions are ephemeral and focused solely on the current session.

---

## 🛠️ Technology Stack

| Component         | Technology                                  |
|------------------|----------------------------------------------|
| **Frontend**      | React, TypeScript, Vite, Tailwind CSS        |
| **State Mgmt**    | React Context API                            |
| **Backend**       | n8n (Workflow Automation & Agents)           |
| **Data Source**   | Google Sheets API                            |
| **Communication** | RESTful Webhooks                             |
| **Email Delivery**| n8n Secure Email Node (`CareCourier`)        |
| **Deployment**    | Vercel             |
| **Version Control**| GitHub                                      |

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mindcare.git
cd mindcare
