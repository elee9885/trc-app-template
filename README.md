# 🔐 TRC App Template (1health Embedded App)

This project is a reusable app template for building iframe-embedded tools on the 1health platform.  
It includes support for 1health JWT authentication, Firebase backend integration, and AI-assisted development setup.

---

## 📦 Tech Stack

- **Frontend**: Next.js 15 (App Router) + Tailwind CSS + TypeScript  
- **Backend**: Firebase (Firestore, Hosting)  
- **Deployment**: Static Export via `output: 'export'` + Firebase Hosting  
- **AI Assist**: GitHub Copilot, GPT-4o (MCP integration in progress)

---

## 🔐 Features

- ✅ Auth via postMessage (from 1health parent iframe)  
- ✅ `use1healthAuth.ts` hook to receive JWT token  
- ✅ `postTo1healthAPI` wrapper to call 1health APIs  
- ✅ Firebase Firestore write example (supplemental data)  
- ✅ Fully static-exportable (Next.js `output: 'export'`)  
- ✅ Ready for iframe embedding inside the 1health platform  
- ✅ GitHub-integrated dev pipeline (CI/CD WIP)

---

## 🚀 Deployment (via Firebase Hosting)

This project uses the modern `output: 'export'` static export approach introduced in **Next.js 13+**.

### 🔧 Build and Deploy

```bash
npm run build
firebase deploy

