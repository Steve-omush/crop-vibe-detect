# CropCare AI - Crop Disease Detection App

An AI-powered web application that helps farmers and agricultural professionals identify crop diseases by analyzing leaf images. Built with React, TypeScript, and powered by Lovable AI.

## 🌐 Live Demo

**Published App**: [https://crop-vibe-detect.lovable.app/](https://crop-vibe-detect.lovable.app/)

## 👨‍💻 Author

**Stephen Omusula**  
Email: stephenomusula3@gmail.com

## 📋 Project Overview

CropCare AI is an intelligent crop disease detection system that enables users to:
- Upload images of crop leaves
- Receive instant AI-powered disease diagnosis
- View detailed disease information including causes and remedies
- Access confidence scores for each prediction
- Get actionable treatment recommendations

The application uses advanced computer vision and AI to identify various crop diseases such as leaf spot, mildew, rust, and more, helping farmers make informed decisions about crop health management.

## ✨ Features

### Current Features (Free Tier)
- **User Authentication**: Secure email-based authentication system
- **Image Upload**: Easy drag-and-drop or click-to-upload interface
- **AI Disease Detection**: Powered by Google's Gemini 2.5 Flash for accurate disease identification
- **Confidence Scoring**: Percentage-based confidence level for each detection
- **Disease Information**: Comprehensive details about detected diseases
- **Treatment Recommendations**: Practical remedies and agricultural advice
- **Responsive Design**: Mobile-friendly interface optimized for field use
- **Real-time Analysis**: Instant results with loading indicators

### Planned Premium Features
- Farmer profile and history tracking
- Weather-aware disease prediction
- Geolocation and regional disease insights
- Real-time disease outbreak alerts
- AI chat assistant for farming questions
- Expert consultation portal
- Custom model training for local crops
- Subscription system

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

### Backend & Cloud
- **Lovable Cloud** - Full-stack platform powered by Supabase
- **Supabase Auth** - User authentication
- **Supabase Edge Functions** - Serverless backend logic
- **Lovable AI** - AI model integration (Google Gemini 2.5 Flash)

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript Compiler** - Type checking

## 📁 Project Structure

```
crop-disease-detection/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── placeholder.svg
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ... (other UI components)
│   │   ├── ResultDisplay.tsx    # Disease detection results UI
│   │   └── UploadZone.tsx       # Image upload component
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client.ts        # Supabase client config
│   │       └── types.ts         # Auto-generated types
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   ├── pages/
│   │   ├── Auth.tsx             # Authentication page
│   │   ├── Detect.tsx           # Main detection interface
│   │   ├── Landing.tsx          # Landing page
│   │   └── NotFound.tsx         # 404 page
│   ├── App.tsx                  # Main app component with routing
│   ├── index.css                # Global styles and design tokens
│   ├── main.tsx                 # App entry point
│   └── vite-env.d.ts
├── supabase/
│   ├── config.toml              # Supabase configuration
│   └── functions/
│       └── detect-disease/
│           └── index.ts         # Edge function for AI detection
├── index.html
├── package.json
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or bun package manager

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The app will be available at `http://localhost:5173`

## 📖 How to Use

1. **Visit the Landing Page**: Navigate to the home page to learn about the app
2. **Sign Up/Login**: Click "Get Started" and create an account or log in
3. **Upload an Image**: On the detection page, drag and drop or click to upload a crop leaf image
4. **View Results**: The AI will analyze the image and display:
   - Disease name
   - Confidence percentage
   - Disease description
   - Common causes
   - Recommended remedies
5. **Analyze Another**: Click "Analyze Another Image" to check more crops

## 🎨 Design System

The application uses a semantic color system defined in `src/index.css` with:
- Agricultural-themed color palette (greens, earth tones)
- Dark mode support
- Consistent spacing and typography
- Responsive breakpoints
- Custom shadows and animations

## 🔒 Authentication

The app uses Lovable Cloud authentication with:
- Email-based signup and login
- Auto-confirmed email (no verification required)
- Secure session management
- Protected routes for authenticated users

## 🤖 AI Integration

Disease detection is powered by:
- **Model**: Google Gemini 2.5 Flash
- **Capabilities**: Multimodal vision understanding
- **Features**: Image analysis, disease classification, confidence scoring
- **Response Format**: Structured JSON with disease details and remedies

## 🌐 Deployment

### Deploy with Lovable

1. Open the project in [Lovable](https://lovable.dev/projects/dba20979-1cb0-43ec-ac12-3580a952621d)
2. Click "Publish" in the top right corner
3. Your app will be deployed to `lovable.app`

### Custom Domain

To connect a custom domain:
1. Navigate to Project > Settings > Domains
2. Click "Connect Domain"
3. Follow the DNS configuration instructions

*Note: Custom domains require a paid Lovable plan*

## 📝 License

This project is built with Lovable and follows their terms of service.

## 🔗 Links

- **Project URL**: https://lovable.dev/projects/dba20979-1cb0-43ec-ac12-3580a952621d
- **Live App**: https://crop-vibe-detect.lovable.app/
- **Documentation**: https://docs.lovable.dev/

## 🤝 Contributing

This is a personal project by Stephen Omusula. For questions or suggestions, please contact: stephenomusula3@gmail.com

---

Built with ❤️ using [Lovable](https://lovable.dev)