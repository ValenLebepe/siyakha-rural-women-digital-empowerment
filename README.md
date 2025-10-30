# Siyakha - Women Entrepreneurship Platform

A modern web platform designed to develop digital literacy and empower women entrepreneurs through education, resources, and community support.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite)

## Features

- **User Authentication**: Secure email/password authentication powered by Supabase
- **Digital Literacy Resources**: Access to 100+ learning resources
- **Responsive Design**: Beautiful, mobile-first interface that works on all devices
- **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS
- **Secure Database**: PostgreSQL database with Row Level Security (RLS)

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Backend**: Supabase (Authentication & Database)
- **Database**: PostgreSQL with RLS policies
- **Icons**: Lucide React

## Project Structure

```
women-entrepreneurship-platform/
├── src/
│   ├── components/        # React components
│   │   ├── Auth/         # Authentication components
│   │   └── Home/         # Home page components
│   ├── contexts/         # React contexts (Auth)
│   ├── lib/              # Library configurations (Supabase)
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript type definitions
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   └── assets/           # Static assets (images, logos)
├── supabase/
│   └── migrations/       # Database migrations
├── docs/                 # Documentation
└── public/               # Public static files
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account (free tier available)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ValenLebepe/women-entrepreneurship-platform.git
cd women-entrepreneurship-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run database migrations:

The migrations are located in `supabase/migrations/`. Apply them through your Supabase dashboard or CLI.

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Database Setup

This project uses Supabase for authentication and data storage. The database includes:

- **profiles** table: User profile information
- **Row Level Security (RLS)**: Ensures users can only access their own data

All migrations are in the `supabase/migrations/` folder.

## Authentication

The platform uses Supabase Authentication with:
- Email/password sign-up and login
- Secure session management
- Protected routes
- Profile creation on sign-up

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Security

- All database tables have Row Level Security (RLS) enabled
- User data is protected and isolated
- Environment variables are used for sensitive configuration
- Passwords are hashed and never stored in plain text

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Supabase](https://supabase.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)

## Support

For support, please open an issue in the GitHub repository.

## Roadmap

- [ ] Add course management system
- [ ] Implement community forums
- [ ] Add mentorship matching
- [ ] Create resource library
- [ ] Mobile app development
- [ ] Multi-language support

---

Made with ❤️ for women entrepreneurs
