# Codey - Your Modern Code Playground 🚀

<div align="center">
  <img src="/public/icon.png" alt="Codey Logo" width="120" />
  <h3>Write ⌨️ Execute 🏃‍♂️ Share 🌐</h3>
  <p>A powerful online code editor with real-time execution and collaboration features.</p>
</div>

## ✨ Features

- 🎯 **Real-Time Code Execution**
  - Write and run code instantly
  - Detailed error messages and output
  - Multiple language support
  - Code execution history

- 🎨 **Premium Developer Experience**
  - VS Code-inspired Monaco Editor
  - Syntax highlighting
  - Multiple themes
  - Custom font sizing
  - Beautiful UI with Tailwind CSS

- 💎 **Pro Features**
  - JavaScript (Free)
  - Premium Languages:
    - Python
    - Java
    - C++
    - Go
    - And more!

- 🤝 **Community Features**
  - Share code snippets
  - Browse community code
  - Interactive comments
  - Save favorite snippets

## 🛠️ Tech Stack

- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Database**: Convex
- **Authentication**: Clerk
- **Editor**: Monaco Editor
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **UI/UX**: Framer Motion
- **Icons**: Lucide React
- **Payments**: LemonSqueezy

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/codey.git
cd codey
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**

Create a `.env.local` file in the root directory:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Convex Database
CONVEX_DEPLOYMENT=your_convex_deployment_id
NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
# Format: https://[deployment-id].convex.cloud

# LemonSqueezy Payment (Pro Features)
LEMONSQUEEZY_PAYMENT_SECRET_KEY=your_payment_key
```

4. **Start Development Server**
```bash
npm run dev
```

Visit `http://localhost:3000` 🎉

## 🔧 Configuration Steps

### 1. Clerk Setup
1. Create account at [clerk.dev](https://clerk.dev)
2. Create new application
3. Get API keys from dashboard
4. Update auth.config.ts with your domain

### 2. Convex Setup
1. Install Convex CLI:
```bash
npm install -g convex
```

2. Initialize Convex:
```bash
npx convex dev
```

3. Copy the deployment URL to your .env.local

### 3. LemonSqueezy Setup
1. Register at [lemonsqueezy.com](https://lemonsqueezy.com)
2. Create your product
3. Configure payment settings
4. Add API key to .env.local

## 📝 Project Structure

```
codey
├─ .eslintrc.json                # ESLint configuration file for linting rules
├─ convex                         # Directory for Convex backend functions and configurations
│  ├─ auth.config.ts             # Configuration for authentication providers
│  ├─ codeExecutions.ts           # Functions related to code execution
│  ├─ http.ts                     # HTTP route handlers for Convex
│  ├─ lemonSqueezy.ts
│  ├─ README.md                   # Documentation for Convex-related functionalities
│  ├─ schema.ts                   # Database schema definitions
│  ├─ snippets.ts
│  ├─ tsconfig.json
│  ├─ users.ts                    # Functions for user management
│  └─ _generated                  # Auto-generated files by Convex
│     ├─ api.d.ts
│     ├─ api.js
│     ├─ dataModel.d.ts
│     ├─ server.d.ts
│     └─ server.js
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public                         # Directory for static assets
│  ├─ all the images
├─ README.md
├─ src
│  ├─ app
│  │  ├─ (root)                  # Root layout and pages
│  │  │  ├─ page.tsx
│  │  │  ├─ _components           # Reusable components for the app
│  │  │  │  ├─ EditorPanel.tsx
│  │  │  │  ├─ EditorPanelSkeleton.tsx
│  │  │  │  ├─ Header.tsx
│  │  │  │  ├─ HeaderProfileBtn.tsx
│  │  │  │  ├─ LanguageSelector.tsx
│  │  │  │  ├─ OutputPanel.tsx
│  │  │  │  ├─ RunButton.tsx
│  │  │  │  ├─ RunningCodeSkeleton.tsx
│  │  │  │  ├─ ShareSnippetDialog.tsx
│  │  │  │  └─ ThemeSelector.tsx
│  │  │  └─ _constants             # Constants used in the app
│  │  │     └─ index.ts
│  │  ├─ fonts
│  │  │  ├─ GeistMonoVF.woff
│  │  │  └─ GeistVF.woff
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ pricing                   # Pricing page directory
│  │  │  ├─ page.tsx
│  │  │  ├─ _components
│  │  │  │  ├─ FeatureCategory.tsx
│  │  │  │  ├─ FeatureItem.tsx
│  │  │  │  ├─ ProPlanView.tsx
│  │  │  │  └─ UpgradeButton.tsx
│  │  │  └─ _constants
│  │  │     └─ index.ts
│  │  ├─ profile                   # User profile page directory
│  │  │  ├─ page.tsx
│  │  │  └─ _components
│  │  │     ├─ CodeBlock.tsx
│  │  │     ├─ ProfileHeader.tsx
│  │  │     └─ ProfileHeaderSkeleton.tsx
│  │  └─ snippets                  # Snippet management directory
│  │     ├─ page.tsx
│  │     ├─ [id]
│  │     │  ├─ page.tsx
│  │     │  └─ _components
│  │     │     ├─ CodeBlock.tsx
│  │     │     ├─ Comment.tsx
│  │     │     ├─ CommentContent.tsx
│  │     │     ├─ CommentForm.tsx
│  │     │     ├─ Comments.tsx
│  │     │     ├─ CopyButton.tsx
│  │     │     └─ SnippetLoadingSkeleton.tsx
│  │     └─ _components
│  │        ├─ SnippetCard.tsx
│  │        └─ SnippetsPageSkeleton.tsx
│  ├─ components                    # Shared components across the app
│  │  ├─ Footer.tsx
│  │  ├─ LoginButton.tsx
│  │  ├─ NavigationHeader.tsx
│  │  ├─ provider
│  │  │  └─ ConvexClientProvider.tsx
│  │  └─ StarButton.tsx
│  ├─ hooks                         # Custom hooks directory
│  │  └─ useMounted.ts
│  ├─ middleware.ts
│  ├─ store                          # Zustand store for state management
│  │  └─ useCodeEditorStore.ts
│  └─ types                          # Type definitions
│     └─ index.ts
├─ tailwind.config.ts
└─ tsconfig.json

```

## 🚀 Deployment

Deploy on Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/codey)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
  Made with ❤️ by Akshar Bhesaniya
</div>