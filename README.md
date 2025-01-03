# Ticketr - Real-Time Event Ticketing Platform

Ticketr is a cutting-edge platform for real-time event ticketing, designed to make ticket management seamless for attendees and organizers. Built with **Next.js 14**, **Convex**, **Clerk**, and **Stripe Connect**, it offers robust features like smart queuing, real-time updates, secure payments, and more.

## 🎉 Features

### For Event Attendees
- 🎫 Real-time ticket availability tracking
- ⚡ Smart queuing system with position updates
- 🕒 Time-limited ticket offers
- 📱 Mobile-friendly ticket management
- 🔒 Secure payment processing with Stripe
- 📲 Digital tickets with QR codes
- 💸 Automatic refunds for canceled events

### For Event Organizers
- 💰 Direct payments via Stripe Connect
- 📊 Real-time sales monitoring
- 🎯 Automated queue management
- 📈 Event analytics and tracking
- 🔄 Automatic ticket recycling
- 🎟️ Customizable ticket limits
- ❌ Event cancellation with automatic refunds
- 🔄 Bulk refund processing

### Technical Features
- 🚀 Real-time updates using Convex
- 👤 Authentication with Clerk
- 💳 Payment processing with Stripe Connect
- 🌐 Server-side and client-side rendering
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 📱 Fully responsive design
- 🛡️ Rate limiting for queue joins and purchases
- 🔒 Automated fraud prevention
- 🔔 Real-time toast notifications
- ✨ Accessible and animated UI components

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+
- **npm** or **yarn**
- **Stripe Account**
- **Clerk Account**
- **Convex Account**


#📦 Setting Up Third-Party Services
1.Clerk
2.Create a Clerk application here.
3.Configure authentication providers and redirect URLs.
4.Add your keys to .env.local.
5.Convex
6.Sign up for a Convex account here.
7.Create a new project and initialize it in your app:


npm install convex
npx convex init

🏗️ Architecture Overview
Database Schema
Events: Event details and ticket quantities
Tickets: Purchase status and QR codes
Waiting List: Queue management
Users: Organizer and attendee profiles
Key Components
Real-time queue management
Automated offer expiration
Secure payment processing
Rate limiting for purchases



### Environment Variables
Create a `.env.local` file with the following:
```env
NEXT_PUBLIC_CONVEX_URL=your_convex_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
stripe listen --forward-to localhost:3000/api/webhooks/stripe

npx shadcn-ui@latest init
npx shadcn-ui@latest add toast button card dialog toaster







