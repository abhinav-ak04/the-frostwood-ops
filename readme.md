# 🪵 The Frostwood Ops

**The Frostwood Ops** is a full-stack internal hotel management system built for **The Frostwood**, a boutique hotel offering 8 luxury wooden cabins. This modern dashboard allows hotel staff to manage bookings, cabins, guests, check-ins, and overall operations — all in one place.

> 🔐 Designed exclusively for hotel staff. Secure, robust, and intuitive.

---

## 🌐 Live Demo

[🔗 Live Site](https://the-frostwood-ops.vercel.app/) 
---

## 🎯 Project Overview

The Frostwood previously had no digital infrastructure for handling bookings or cabin management. This application was built from scratch — including its backend and API — to modernize operations and improve efficiency.

It enables authenticated hotel employees to:
- Manage guest bookings and check-ins
- Track cabin availability and pricing
- Monitor key metrics and analytics
- Configure app-wide operational settings

---

## ✨ Features

### ✅ Authentication & User Accounts
- Secure login for staff only
- Signup restricted to in-app to prevent unauthorized access
- Users can update avatar, name, and password
- Session persistence with protected routes

### 🛏️ Cabin Management
- View all cabins with images, price, capacity, and discounts
- Add, edit, or delete cabins
- Upload cabin photos

### 📆 Booking System
- Track bookings with status: `unconfirmed`, `checked-in`, `checked-out`
- Accept payments and handle breakfast options at check-in
- View booking details: dates, guest count, notes, nights, and breakfast info
- Filter bookings by status and check-in date
- Perform check-in/check-out actions from dashboard

### 🙋 Guest Management
- Store and display guest details: name, email, ID, nationality, and

---

## 📁 Folder Structure

 ```bash src/ ├── pages/ # Route pages: Dashboard, Bookings, Cabins, Settings, etc. ├── features/ # Feature modules like bookings, cabins, guests ├── context/ # Context API for UI state ├── services/ # Supabase and API logic ├── hooks/ # Custom React hooks ├── components/ # Reusable UI components ├── styles/ # Global & styled-components theming ```


---

## 🧰 Tech Stack

| Layer              | Tech / Tool                          |
|-------------------|--------------------------------------|
| Frontend           | React                                |
| Routing            | React Router                         |
| Remote State       | React Query                          |
| UI State           | Context API                          |
| Forms              | React Hook Form                      |
| Charts & Utilities | Recharts, date-fns, react-hot-toast |
| Styling            | Styled Components                    |
| Database/API       | Supabase                             |
| Icons              | React Icons                          |

---

## 🧪 Pages and Routes

| Route Path            | Page Description                             |
|-----------------------|----------------------------------------------|
| `/login`              | Staff login                                  |
| `/user`               | Add new staff (signup inside app)            |
| `/account`            | Update avatar, name, password                |
| `/dashboard`          | Main overview with check-in/out & analytics  |
| `/bookings`           | Manage all bookings                          |
| `/cabins`             | Manage cabin inventory                       |
| `/checkin/:bookingId` | Handle guest check-in                        |
| `/settings`           | Application-wide preferences                 |

---


## 🙋‍♂️ Author
**Abhinav Kumar**    

📧 [Email](mailto:abhinavk.kumar04@gmail.com)  
📎 [LinkedIn](https://www.linkedin.com/in/abhinavkumar0803) • [GitHub](https://github.com/abhinav-ak04) • [Leetcode](https://leetcode.com/u/abhinav_ak04/)
