# 🌌 Veo3 Prompt Optimizer  
### Transform your raw creative idea into a flawless, production-ready AI advertisement prompt.

---



<p align="center">
  <img src="https://img.shields.io/badge/Framework-React.js-blue?logo=react" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-38BDF8?logo=tailwind-css" />
  <img src="https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript" />
</p>

---

## 🧠 Overview

**Veo3 Prompt Optimizer** is a React-based application that helps creators, marketers, and AI developers generate **optimized JSON prompts** for platforms like **Flow AI**, **Runway**, or **Pika**.  

Instead of spending hours crafting perfect prompts, you simply type your idea, select preferences (like cinematic style, lighting, camera movement, etc.), and **Veo3 automatically generates a high-quality JSON** formatted exactly for AI ad-generation engines.  


---

## 🚀 Features

| Feature | Description |
|----------|-------------|
| 🎞️ **Prompt Enhancement Engine** | Converts a simple idea into a detailed, descriptive cinematic-style prompt. |
| ⚙️ **JSON Auto-Generator** | Outputs a perfectly structured JSON object ready for AI ad systems like Flow AI. |
| 🎨 **Interactive Customization** | Choose your preferred duration, lighting, camera movement, resolution, etc. |
| 📋 **One-Click Copy** | Instantly copy your final optimized JSON to the clipboard. |
| 💡 **AI-Centric Optimization** | Automatically adds pacing, lighting, and visual enhancements for realism. |
| 🧩 **No Backend Required** | Entirely client-side and works in any browser. |
| 🌈 **Modern Glassmorphism UI** | Clean, gradient-based design built using Tailwind CSS and Lucide icons. |

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| ⚛️ **React.js** | Frontend framework for component-driven UI |
| 🎨 **Tailwind CSS** | Utility-first styling for responsiveness & design consistency |
| 🧠 **Lucide Icons** | Modern icon library for interactive UX |
| 📜 **JavaScript (ES6)** | Logic, prompt transformation, and state management |
| 💾 **Vite** | Lightning-fast development and build environment |

---

## 🧱 Project Structure


---

## 💻 How It Works (Step-by-Step)

1. **User Input**
   - You start by typing your idea, e.g.  
     > “A Coca-Cola can falling from above and breaking the ground on impact.”

2. **Preference Selection**
   - The app asks a series of questions:
     - 🎬 Visual Style (Cinematic, Animated, Documentary, etc.)
     - 🎥 Camera Movement (Tracking shot, Pan, Dolly, etc.)
     - 💡 Lighting Mood (Golden Hour, Studio, Dramatic, etc.)
     - ⚡ Video Pace (Fast, Medium, Slow)
     - 📺 Resolution (720p, 1080p, 4K)
     - ⏱️ Duration (5s–30s)

3. **Automatic Enhancement**
   - The system intelligently adds cinematic and descriptive elements to enrich the text.  
     For example:  
     ```
     A Coca-Cola can falling from above and breaking the ground on impact.
     Shot in cinematic style with tracking shot. Lighting: golden hour. Pacing: fast and energetic.
     ```

4. **JSON Generation**
   - The app automatically builds an AI-ready JSON:
     ```json
     {
       "model": "veo3",
       "prompt": "A Coca-Cola can falling from above and breaking the ground on impact. Shot in cinematic style with tracking shot. Lighting: golden hour. Pacing: fast and energetic.",
       "parameters": {
         "duration": "15 seconds",
         "resolution": "4K",
         "style": "Cinematic",
         "camera_movement": "Tracking shot",
         "lighting": "Golden hour",
         "pace": "Fast and energetic"
       },
       "optimization": {
         "quality": "high",
         "consistency": true,
         "motion_smoothness": "enhanced"
       }
     }
     ```

5. **Instant Copy**
   - Click “Copy” and paste it directly into your **Flow AI**, **Runway**, or **Pika** prompt field — done!

---

## 🪄 Interface Flow

```text
User Idea ➜ Style Questions ➜ Prompt Enhancement ➜ JSON Generation ➜ Copy/Use in AI Platform
