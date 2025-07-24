# Baking Bliss - Cake Shop & Academy

## Overview

This is a full-stack web application for "Baking Bliss," a bakery business that offers custom cakes, baking courses, and various sweet treats. The application combines an e-commerce-style product showcase with educational content for their baking academy, built using modern web technologies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite with TypeScript support
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: Hot module replacement via Vite integration
- **API Pattern**: RESTful endpoints with `/api` prefix
- **Error Handling**: Centralized error middleware

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL via Neon serverless
- **Schema Management**: Type-safe schema definitions in shared directory
- **Migrations**: Drizzle Kit for database migrations
- **Validation**: Zod schemas for runtime validation

## Key Components

### Database Schema
The application defines several core entities:
- **Products**: Cakes with categories (birthday, wedding, bento, pastries)
- **Courses**: Baking classes with skill levels (beginner, intermediate, advanced)
- **Reviews**: Customer testimonials with rating system
- **Contact Messages**: Customer inquiries and contact form submissions

### Frontend Pages
- **Home**: Hero section, business overview, customer reviews
- **Products**: Product catalog with category filtering
- **Academy**: Course listings and educational content
- **Services**: Service offerings and pricing
- **About**: Company story and values
- **Contact**: Contact form and business information

### Shared Components
- **Navigation**: Responsive navigation with mobile menu
- **Product Cards**: Reusable product display components
- **Review Cards**: Customer testimonial display
- **Contact Section**: Contact form with WhatsApp integration
- **Footer**: Site-wide footer with social links

### Storage Layer
- **Interface**: IStorage interface for CRUD operations
- **Implementation**: MemStorage for development (in-memory)
- **Database Ready**: Structured for easy migration to PostgreSQL

## Data Flow

1. **Client Requests**: React components make API calls via TanStack Query
2. **API Layer**: Express routes handle business logic and data validation
3. **Storage Layer**: Storage interface abstracts database operations
4. **Response**: JSON data returned to client with error handling
5. **UI Updates**: React Query manages caching and UI state updates

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first styling framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets (TikTok, etc.)

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast JavaScript bundling
- **PostCSS**: CSS processing with Autoprefixer
- **Replit Plugins**: Development environment integration

### Backend Libraries
- **Express**: Web framework with middleware support
- **Drizzle**: Type-safe database operations
- **Zod**: Schema validation
- **Date-fns**: Date manipulation utilities

## Deployment Strategy

### Development
- **Hot Reload**: Vite development server with HMR
- **TypeScript**: Real-time type checking
- **Environment**: NODE_ENV=development with tsx runtime

### Production Build
- **Frontend**: Vite build process generates optimized static assets
- **Backend**: ESBuild bundles server code for deployment
- **Assets**: Static files served from dist/public directory
- **Process**: Single Node.js process serving both API and static content

### Database Setup
- **Environment**: DATABASE_URL environment variable required
- **Migrations**: `npm run db:push` applies schema changes
- **Provider**: Configured for Neon PostgreSQL serverless

The architecture supports easy scaling from development to production while maintaining type safety and developer experience throughout the stack.