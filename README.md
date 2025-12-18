# User Directory App

A modern React application for managing and browsing users. Fetches data from an external API with search, sorting, and the ability to add new users locally.

**Built as a technical assessment for Butter Money.**

---

## Setup Steps

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/AswinRaj1123/butter_money_user-directory.git

# 2. Navigate to project directory
cd butter_money_user-directory

# 3. Install dependencies
npm install
```

---

## How to Run

### Development
```bash
npm start
```
Opens the app at [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
```
Creates an optimized build in the `build/` folder.

---

## Features Implemented

### Core Features
- **Fetch & Display Users** — Loads users from JSONPlaceholder API
- **Loading State** — Spinner displayed while fetching data
- **Error Handling** — User-friendly error message on API failure
- **Search** — Real-time filtering by name or email
- **User Details Modal** — Click any user to view full details (address, company, website)
- **Add New User** — Form with validation to add users locally

### Bonus Features
- **Alphabetical Sorting** — Toggle A→Z / Z→A sorting
- **LocalStorage Persistence** — Added users survive page refresh
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Collapsible Form** — Add user form expands/collapses to save space

### Code Quality
- **Reusable Components** — `Avatar`, `Icon`, `EmptyState`, `FormField`, etc.
- **Custom Hooks** — `useUsers`, `useLocalStorage`
- **Utility Functions** — `filterUsers`, `sortUsersByName`, `getInitials`, `formatAddress`
- **Clean Architecture** — Organized into `components/`, `hooks/`, `utils/`, `services/`, `constants/`

---

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Avatar.jsx
│   ├── EmptyState.jsx
│   ├── ErrorMessage.jsx
│   ├── Icon.jsx
│   ├── LoadingSpinner.jsx
│   ├── SearchBar.jsx
│   ├── SortButton.jsx
│   ├── UserCard.jsx
│   ├── UserDetailsModal.jsx
│   ├── UserForm.jsx
│   └── UserList.jsx
├── hooks/            # Custom React hooks
│   ├── useLocalStorage.js
│   └── useUsers.js
├── services/         # API layer
│   └── api.js
├── utils/            # Utility functions
│   ├── filters.js
│   └── index.js
├── constants/        # App constants
│   └── index.js
├── styles/           # Global styles
│   └── index.css
└── App.js            # Main app component
```

---

## Assumptions Made

1. **No Backend** — Added users are stored in localStorage only (not sent to server)
2. **Fake IDs** — New user IDs are generated using `Date.now()` for uniqueness
3. **Minimal User Data** — Locally added users have empty `address`, `company`, and `website` fields to prevent modal errors
4. **Modal for Details** — Used a modal instead of a separate page/route for user details (simpler UX)
5. **Email Validation** — Basic regex pattern (`/^\S+@\S+$/i`) for email format validation
6. **No Authentication** — App is public with no user authentication

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 |
| Styling | Tailwind CSS |
| HTTP Client | Axios |
| Form Handling | React Hook Form |
| State | React Hooks (useState, useEffect) |
| Storage | localStorage |

---

## License

MIT