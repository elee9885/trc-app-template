🔐 TRC App Template (1health Embedded App)

This project is a reusable app template for building iframe-embedded tools on the 1health platform.It includes support for 1health JWT authentication, Firebase backend integration, and AI-assisted development setup.

📦 Tech Stack

Frontend: Next.js 15 (App Router) + Tailwind CSS + TypeScript

Backend: Firebase (Firestore, Hosting)

Deployment: Static Export + Firebase Hosting

AI-Assist: GitHub Copilot, GPT-4o (MCP support in progress)

🔐 Features

✅ Auth via postMessage (from 1health parent iframe)

✅ use1healthAuth.ts hook to receive JWT token

✅ Reusable postTo1healthAPI wrapper for calling 1health APIs

✅ Firebase Firestore write example (supplemental data)

✅ Fully static-exportable (output: 'export')

✅ Ready for iframe embedding inside the 1health platform

✅ GitHub-integrated dev pipeline (CI/CD coming soon)

🚀 Deployment (via Firebase Hosting)

📁 Static Export + Hosting

npm run build
npm run export
firebase deploy

The app is statically exported to the /out directory.

Firebase Hosting serves the contents of /out as the root.

✅ Firebase Setup

Install Firebase CLI if not already:

npm install -g firebase-tools

Login and initialize:

firebase login
firebase init

Choose Hosting and Firestore, set public directory to out.

Configure firebase.json:

{
  "hosting": {
    "public": "out",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ]
  }
}

🧪 Local Dev

npm run dev

Runs localhost:3000

Uses .env.local to access Firebase + allowed origins

Token is received from parent iframe when embedded inside 1health

🌐 Env Setup (.env.local)

NEXT_PUBLIC_ALLOWED_ORIGINS=https://app.1health.io
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id

🧠 AI-Assisted Development Pipeline

Goals

Use shared utility files (lib/use1healthAuth.ts, lib/firebase.ts, etc.)

Let GitHub Copilot / GPT understand auth and API patterns

Future integration with MCP (Model Context Protocol)

Shared component library via Tailwind UI (in progress)

Tools

GitHub Copilot

GPT-4 / GPT-4o

Miro (UX + flowcharts)

n8n (workflow/webhook orchestration – WIP)

📁 Project Structure

trc-app-template/
├── app/
│   └── page.tsx
├── lib/
│   ├── use1healthAuth.ts
│   ├── api.ts
│   └── firebase.ts
├── out/
├── public/
├── .env.local
├── firebase.json
├── next.config.ts
├── package.json

