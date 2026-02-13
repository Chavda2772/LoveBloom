# 🌸 LoveBloom: Romantic & Funny Valentine's Web Experience

Created with ❤️ by Antigravity (Advanced Agentic Coding at Google Deepmind) for a special someone.

**LoveBloom** is an interactive, fully customizable, and mobile-responsive web experience designed to make your partner smile, laugh, and feel loved. It features smooth animations, playful interactions (like the escaping "No" button!), and a magical celebration.

## ✨ Features

- **🎨 Premium Romantic Design**: Soft pink/red gradients, elegant typography, and a cinematic radial spotlight effect.
- **📱 Fully Responsive**: Optimized for mobile, desktop, and tablets (using `100dvh/dvw` for a perfect full-screen fit).
- **🎭 Framer Motion Animations**: Smooth transitions, floating hearts, and a pulsing heartbeat centerpiece.
- **🎮 Playful "No" Button**: A mischievous button that escapes clicks and triggers a funny "technical error" screen.
- **🥳 Magical Celebration**: A high-quality confetti burst and a custom "Husband Subscription" reveal.
- **⚙️ 100% Customizable**: Change every single message, name, and button label without touching a line of code!

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Chavda2772/LoveBloom.git
   cd LoveBloom
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run in development mode**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

## ⚙️ Customization Guide

You don't need to be a developer to make this your own! Simply edit the `src/data.json` file.

### Customization Fields:

| Field | Description |
| :--- | :--- |
| `name` | Your partner's name. |
| `heroMessage` | The main message that appears first. |
| `loveQuestion` | The question asked above the buttons. |
| `yesButtonText` | Text for the "Yes" button (e.g., "Yes! ❤️"). |
| `noButtonText` | Text for the "No" button (e.g., "No 🙄"). |
| `yesMessage` | Title for the success/celebration screen. |
| `yesSubMessage` | Sub-message for the success screen (format: `Title: Content`). |
| `noMessage` | Title for the playful "error" screen. |
| `noSubMessage` | Message that appears when "No" is clicked. |
| `retryButtonText` | Text for the "Try Again" button. |
| `specialMessage` | A final romantic/funny custom note at the end. |

### Example `data.json`:
```json
{
  "name": "Heena",
  "heroMessage": "Do you love me or just my wallet? 😜❤️",
  "loveQuestion": "Think carefully... do you really love me? 👀",
  "yesButtonText": "Of course! ❤️",
  "noButtonText": "Meh 🙄",
  "yesMessage": "I knew it! 😎",
  "yesSubMessage": "Enrolled in: The Forever Love Program™",
  "noMessage": "Wait, what? 😭",
  "noSubMessage": "System detects your finger slipped. Please try again! ❤️",
  "retryButtonText": "Think again... 😌",
  "specialMessage": "You're stuck with me forever now! ❤️😜"
}
```

## 🛠️ Built With

- **React 19** - For the UI structure.
- **Vite** - For lightning-fast development.
- **Framer Motion** - For high-quality cinematic animations.
- **Canvas Confetti** - For the celebration effects.
- **Lucide-React** - For beautiful, lightweight icons.
- **Vanilla CSS** - For premium, custom-tailored styling.

## 📦 Deployment

The easiest way to share this with your Valentine is to deploy it to **Vercel** or **Netlify**:

1. Push your changes to GitHub.
2. Link your repository to Vercel/Netlify.
3. It will automatically build and provide you with a live link!