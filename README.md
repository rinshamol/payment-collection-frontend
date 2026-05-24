# 💳 Payment Collection App

A cross-platform mobile application built with **Expo** and **React Native** for managing customer loan payments. Supports viewing customer loans, making payments, and checking payment history — all with a clean themed UI.

backend repo: https://github.com/rinshamol/PaymentAppTest.git

---

## 📌 Features

- 👥 **Customer Loan View** – Browse and manage customer loan records
- 💰 **Payment Processing** – Collect and submit payments seamlessly
- 🕓 **Payment History** – View past transactions per customer
- 🌗 **Light / Dark Mode** – Themed UI that adapts to system preferences
- 📱 **Cross-Platform** – Runs on Android, iOS, and Web via Expo

---

## 🛠️ Tech Stack

| Category    | Technology                        |
|-------------|-----------------------------------|
| Language    | TypeScript                        |
| Framework   | React Native, Expo                |
| Navigation  | Expo Router (file-based routing)  |
| HTTP Client | Axios                             |
| UI Library  | React Native Paper                |
| Navigation  | React Navigation                  |
| Platform    | Android, iOS, Web                 |

---

## 📂 Project Structure

```
payment-collection-frontend/
│
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx         # Customer loan list
│   │   ├── payment.tsx       # Payment screen
│   │   └── history.tsx       # Payment history
│   └── _layout.tsx
│
├── components/
│   ├── ExternalLink.tsx
│   └── HapticTab.tsx
│
├── config/
│   └── api.ts                # API configuration
│
├── hooks/                    # Theming and custom hooks
├── assets/
├── app.json
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- Expo CLI
- Android/iOS device or emulator

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/rinshamol/payment-collection-frontend.git
cd payment-collection-frontend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure API URL
Create a `.env` file in the root:
```env
API_URL=https://your-backend-url.com
```

### 4️⃣ Start the App
```bash
npx expo start
```

Press `a` for Android emulator, `i` for iOS simulator, or scan the QR code with Expo Go.

---

## ⚠️ Known Limitations

- No unit or integration tests yet
- Input validation for payment amount is minimal

---

## 🔮 Roadmap

- [ ] Environment variable support for API URL
- [ ] Enhanced input validation for payments
- [ ] Unit tests with Jest
- [ ] Offline support

---

## 👩‍💻 Author

**Rinsha Mol K S** – Software Developer  
GitHub: [@rinshamol](https://github.com/rinshamol)

---

## 📝 License

This project is for educational purposes.
