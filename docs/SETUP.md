# Setup Guide

This guide will help you set up the Women Entrepreneurship Platform locally.

## Prerequisites

Before you begin, ensure you have:
- Node.js 18 or higher installed
- npm (comes with Node.js)
- A Supabase account (free tier available at https://supabase.com)
- Git installed on your computer

## Step 1: Clone the Repository

```bash
git clone https://github.com/ValenLebepe/women-entrepreneurship-platform.git
cd women-entrepreneurship-platform
```

## Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including React, TypeScript, Tailwind CSS, and Supabase client.

## Step 3: Set Up Supabase

### Create a Supabase Project

1. Go to https://supabase.com and sign up or log in
2. Click "New Project"
3. Fill in your project details:
   - Name: "Women Entrepreneurship Platform" (or your choice)
   - Database Password: Create a strong password
   - Region: Choose closest to your location
4. Click "Create new project" and wait for setup to complete

### Get Your API Keys

1. Once your project is ready, go to Project Settings (gear icon)
2. Click on "API" in the sidebar
3. Copy the following:
   - Project URL
   - Anon/Public key

### Configure Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Open `.env` and add your Supabase credentials:
```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 4: Set Up the Database

### Apply Migrations

1. Go to your Supabase project dashboard
2. Click on "SQL Editor" in the sidebar
3. Click "New query"
4. Open the migration file: `supabase/migrations/20251028202152_create_profiles_table.sql`
5. Copy the entire contents
6. Paste into the Supabase SQL Editor
7. Click "Run" to execute the migration

This will:
- Create the `profiles` table
- Set up Row Level Security (RLS)
- Create necessary policies for data access

### Verify Database Setup

1. Go to "Table Editor" in Supabase
2. You should see a `profiles` table
3. Check the "Policies" tab to ensure RLS is enabled

## Step 5: Start the Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

## Step 6: Test the Application

1. Open your browser to `http://localhost:5173`
2. Click "Sign Up" and create a test account
3. Log in with your credentials
4. Verify you can access the home page

## Troubleshooting

### Port Already in Use

If port 5173 is already in use:
```bash
# Kill the process using the port
# On Mac/Linux:
lsof -ti:5173 | xargs kill -9

# On Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### Environment Variables Not Loading

- Make sure your `.env` file is in the root directory
- Restart the development server after changing `.env`
- Check that variables start with `VITE_`

### Database Connection Issues

- Verify your Supabase URL and key are correct
- Check that your Supabase project is running
- Ensure migrations have been applied

### Authentication Errors

- Clear browser cookies and local storage
- Check Supabase Auth settings in the dashboard
- Verify RLS policies are correctly set up

## Additional Commands

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Next Steps

- Read the [Contributing Guide](./CONTRIBUTING.md)
- Explore the codebase
- Check out the [README](../README.md) for more information

## Getting Help

If you encounter issues:
1. Check the troubleshooting section above
2. Search existing GitHub issues
3. Open a new issue with details about your problem

Happy coding!
