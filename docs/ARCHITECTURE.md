# Architecture Documentation

## Overview

The Women Entrepreneurship Platform (Siyakha) is built as a modern single-page application (SPA) using React with TypeScript, styled with Tailwind CSS, and powered by Supabase for backend services.

## Technology Stack

### Frontend
- **React 18.3**: UI library with hooks and functional components
- **TypeScript 5.5**: Type-safe JavaScript
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **Vite 5.4**: Fast build tool and dev server
- **Lucide React**: Icon library

### Backend
- **Supabase**: Backend-as-a-Service (BaaS)
  - Authentication
  - PostgreSQL database
  - Row Level Security (RLS)
  - Real-time subscriptions (future)

## Project Structure

```
src/
├── components/          # React components
│   ├── Auth/           # Authentication UI
│   │   ├── AuthPage.tsx
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   └── Home/           # Home page
│       └── HomePage.tsx
├── contexts/           # React Context providers
│   └── AuthContext.tsx # Authentication state management
├── lib/                # External library configurations
│   └── supabase.ts     # Supabase client setup
├── styles/             # Global styles
│   └── index.css       # Tailwind imports & custom styles
├── types/              # TypeScript type definitions
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── assets/             # Static assets
├── App.tsx             # Root component
└── main.tsx           # Application entry point
```

## Core Concepts

### 1. Authentication Flow

```
User Action → AuthContext → Supabase Auth → Database
                ↓
         Update UI State
```

- User initiates signup/login
- AuthContext manages auth state
- Supabase handles authentication
- User profile created in database
- UI updates based on auth state

### 2. State Management

**Authentication State**
- Managed by `AuthContext`
- Provides global access to user data
- Handles session persistence
- Manages loading states

**Component State**
- Local state with `useState` for UI interactions
- Form state in auth components
- Loading and error states

### 3. Data Flow

```
Component → Supabase Client → PostgreSQL Database
              ↓
          RLS Policies
              ↓
        Authorized Data
```

### 4. Security Architecture

**Row Level Security (RLS)**
- Enabled on all tables
- Policies restrict data access
- Users can only access their own data
- Authenticated-only operations

**Authentication Security**
- Password hashing by Supabase
- Secure session management
- JWT-based authentication
- Environment variables for secrets

## Component Architecture

### Component Hierarchy

```
App
├── AuthContext Provider
    ├── AuthPage (unauthenticated)
    │   ├── LoginForm
    │   └── SignupForm
    └── HomePage (authenticated)
```

### Component Design Principles

1. **Single Responsibility**: Each component has one clear purpose
2. **Composition**: Build complex UIs from simple components
3. **Reusability**: Create generic, reusable components
4. **Props Over State**: Prefer props drilling for simple cases
5. **Context for Global State**: Use context for cross-cutting concerns

## Database Schema

### Tables

**profiles**
- `id` (uuid, primary key): Links to auth.users
- `email` (text): User email
- `full_name` (text): User's full name
- `created_at` (timestamp): Account creation time
- `updated_at` (timestamp): Last update time

### RLS Policies

**profiles table:**
- Users can read their own profile
- Users can update their own profile
- Profiles created automatically on signup

## Authentication System

### Supabase Auth Flow

1. **Sign Up**
   - User provides email and password
   - Supabase creates auth.users entry
   - Trigger creates profiles entry
   - User session established

2. **Login**
   - Credentials verified by Supabase
   - Session token issued
   - User state updated in context

3. **Session Management**
   - Token stored in localStorage
   - Auto-refresh on expiry
   - Persistent across page reloads

## Build & Deployment

### Development

```bash
npm run dev          # Start dev server
npm run typecheck    # Check types
npm run lint         # Lint code
```

### Production

```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

### Build Output

- Optimized bundles
- Code splitting
- Tree shaking
- Minified assets

## Performance Considerations

### Current Optimizations

- Component lazy loading (future)
- Image optimization (future)
- Code splitting by route (future)
- Caching strategies (future)

### Best Practices

- Keep components small and focused
- Avoid unnecessary re-renders
- Use React.memo for expensive components
- Optimize bundle size

## Future Architecture Plans

### Planned Features

1. **Routing**: React Router for multi-page navigation
2. **State Management**: Consider Zustand/Redux for complex state
3. **API Layer**: Abstraction over Supabase calls
4. **Error Boundaries**: Graceful error handling
5. **Testing**: Unit and integration tests
6. **Analytics**: User behavior tracking
7. **Internationalization**: Multi-language support

### Scalability Considerations

- Component library for consistent UI
- API abstraction layer
- Advanced caching strategies
- CDN for static assets
- Database indexing and optimization
- Real-time features with Supabase subscriptions

## Development Guidelines

### Code Style

- Use TypeScript for all new files
- Functional components with hooks
- Tailwind for styling
- ESLint for code quality
- Meaningful names for variables/functions

### File Naming

- Components: PascalCase (e.g., `HomePage.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Types: PascalCase (e.g., `User.ts`)
- Hooks: camelCase with "use" prefix (e.g., `useAuth.ts`)

### Git Workflow

- Feature branches for new work
- Clear commit messages
- Pull requests for code review
- Keep main branch stable

## Monitoring & Debugging

### Tools

- React DevTools for component inspection
- Browser DevTools for network and performance
- Supabase Dashboard for database queries
- TypeScript for compile-time error catching

### Logging

- Console logs in development
- Error tracking service (future)
- Performance monitoring (future)

## Security Best Practices

1. Never commit `.env` files
2. Use environment variables for secrets
3. Enable RLS on all tables
4. Validate user input
5. Sanitize data before display
6. Keep dependencies updated
7. Regular security audits

## Conclusion

This architecture provides a solid foundation for a scalable, maintainable web application. The use of modern tools and best practices ensures good developer experience and application performance.
