# Technical Context: P.P EV Energy Co., Ltd. Website

## Technologies Used

### Core Framework & Libraries
- **Next.js**: React framework for production-grade websites with built-in features
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript for improved developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

### Development Tools
- **ESLint**: Code linting for identifying problematic patterns
- **Prettier**: Code formatting to ensure consistent style
- **npm/yarn**: Package management
- **Git**: Version control

## Development Setup
- Next.js project initialized with TypeScript support
- Tailwind CSS configured with custom theme colors:
  - Blue: #164A71
  - Green: #93AE4F
  - Grey: #C7C9C8
- Responsive design implementation using Tailwind's breakpoint system
- Component-based architecture for reusable UI elements

## Technical Constraints
- SEO optimization required for better visibility
- Performance optimization needed for quick page loads
- Responsive design required for all device sizes
- Accessible design needed to comply with web standards

## Dependencies
```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x"
  },
  "devDependencies": {
    "@types/node": "^20.x",
    "@types/react": "^18.x",
    "@types/react-dom": "^18.x",
    "autoprefixer": "^10.x",
    "eslint": "^8.x",
    "postcss": "^8.x",
    "tailwindcss": "^3.x",
    "typescript": "^5.x"
  }
}
```

## File Structure
```
ppev/
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js app directory (pages)
│   ├── components/    # Reusable UI components
│   ├── lib/           # Utility functions and libraries
│   ├── styles/        # Global styles
│   └── types/         # TypeScript type definitions
├── tailwind.config.js # Tailwind configuration
└── next.config.js     # Next.js configuration
```

This technical context ensures a clear understanding of the technology stack and development environment for the P.P EV Energy website.
