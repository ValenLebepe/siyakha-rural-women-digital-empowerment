# Contributing to Siyakha

Thank you for your interest in contributing to the Women Entrepreneurship Platform! We welcome contributions from everyone.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear title and description
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (browser, OS, etc.)

### Suggesting Features

We love new ideas! To suggest a feature:
- Open an issue with the "feature request" label
- Describe the feature and its benefits
- Explain how it would work
- Consider potential implementation challenges

### Code Contributions

#### Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/women-entrepreneurship-platform.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test thoroughly
6. Commit with clear messages
7. Push to your fork
8. Open a Pull Request

#### Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Use functional components and hooks in React
- Write meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

#### Commit Messages

Write clear commit messages:
```
feat: Add user profile editing
fix: Resolve login redirect issue
docs: Update installation instructions
style: Format auth components
refactor: Simplify database queries
test: Add authentication tests
```

#### Pull Request Process

1. Update the README.md if needed
2. Ensure all tests pass
3. Make sure the build succeeds
4. Update documentation
5. Link related issues
6. Wait for review

### Testing

Before submitting:
- Test your changes locally
- Check for TypeScript errors: `npm run typecheck`
- Run linting: `npm run lint`
- Build the project: `npm run build`

### Code Review

All submissions require review. We'll:
- Review code quality and style
- Check functionality
- Suggest improvements
- Approve or request changes

## Development Guidelines

### Component Structure

```typescript
// Use functional components
export function MyComponent() {
  // Hooks at the top
  const [state, setState] = useState();

  // Effects
  useEffect(() => {
    // ...
  }, []);

  // Handlers
  const handleClick = () => {
    // ...
  };

  // Render
  return (
    <div>...</div>
  );
}
```

### Styling

- Use Tailwind CSS utility classes
- Keep responsive design in mind
- Follow the existing color scheme
- Ensure accessibility (contrast, aria labels)

### Database Changes

- Create migrations for schema changes
- Always enable Row Level Security
- Test policies thoroughly
- Document changes in migration files

### Security

- Never commit sensitive data
- Use environment variables
- Validate user input
- Follow security best practices
- Enable RLS on all tables

## Community

- Be respectful and inclusive
- Help others learn and grow
- Give constructive feedback
- Celebrate successes

## Questions?

Feel free to open an issue for any questions about contributing!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
