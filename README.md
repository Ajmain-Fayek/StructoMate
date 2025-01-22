# Structomate

Structomate is a building management software designed for single-building management. It simplifies administrative tasks such as managing renters, agreements, announcements, and monthly rent payments, all in one seamless application.

## Live URL

[Live Demo](https://structomate.web.app/)

---

## Purpose

Structomate aims to streamline the building management process for landlords and building administrators by providing an intuitive platform to:

- Add and manage renter profiles.
- Track rental agreements.
- Send announcements efficiently.
- Facilitate monthly rent payments for tenants.

---

## Key Features

1. **Renter Management**: Add, update, and remove renter profiles with detailed information.
2. **Rental Agreements**: Manage and store agreement details with start and end dates.
3. **Monthly Rent Payments**: Enable renters to pay rent online and track payment statuses.
4. **Announcements**: Send important notifications to all renters with ease.
5. **Dashboard Overview**: View key building statistics and statuses in a centralized dashboard.
6. **Role-Based Authentication**: Ensure secure access for admins and renters using Firebase Authentication.
7. **Payment Integration**: Integrate payment gateways for seamless rent transactions.
8. **Notifications**: Notify renters via email or app notifications for rent dues and announcements.
9. **Search and Filter**: Quickly search and filter renters or agreements based on specific criteria.
10. **Responsive Design**: Fully responsive UI for both desktop and mobile devices.

---

## Access Admin Panel

- **Email**: `admin@structo.com`
- **Passoword**: `Admin1234`

---

## Access Member Panel

- **Email**: `member@structo.com`
- **Passoword**: `Member1234`

---

## Access User Panel

- **Email**: `user@structo.com`
- **Passoword**: `User1234`

---

## Technologies Used

### Frontend

- **React.js**: For building the user interface.
- **React Router**: For client-side routing.

### Backend

- **Node.js**: For building the backend server.
- **Express.js**: For managing API requests and responses.

### Database

- **MongoDB**: For storing renter, agreement, and payment data.

### Authentication

- **Firebase Authentication**: For secure login and user management.

### Payment Integration

- **Stripe**: For processing online rent payments.

### State Management

- **Context API**: For managing global state.

---

## NPM Packages Used

### Main Dependencies

- `@stripe/react-stripe-js: ^3.1.1`
- `@stripe/stripe-js: ^5.5.0`
- `axios: ^1.7.9`
- `date-fns: ^4.1.0`
- `firebase: ^11.1.0`
- `react: ^18.3.1`
- `react-datepicker: ^7.6.0`
- `react-dom: ^18.3.1`
- `react-helmet-async: ^2.0.5`
- `react-icons: ^5.4.0`
- `react-responsive-carousel: ^3.2.23`
- `react-router: ^7.1.1`
- `react-toastify: ^11.0.3`

### Development Dependencies

- `@eslint/js: ^9.17.0`
- `@types/react: ^18.3.18`
- `@types/react-dom: ^18.3.5`
- `@vitejs/plugin-react: ^4.3.4`
- `autoprefixer: ^10.4.20`
- `daisyui: ^4.12.23`
- `eslint: ^9.17.0`
- `eslint-plugin-react: ^7.37.2`
- `eslint-plugin-react-hooks: ^5.0.0`
- `eslint-plugin-react-refresh: ^0.4.16`
- `globals: ^15.14.0`
- `postcss: ^8.5.0`
- `tailwindcss: ^3.4.17`
- `vite: ^6.0.5`

---

## Installation

To run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/Ajmain-Fayek/StructoMate.git
cd StructoMate
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server: 

```bash
npm run dev
```

5. Open Localhost URL in your browser.

```bash
http://localhost:<port>
```

---

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## License

This project is licensed under the MIT License.
