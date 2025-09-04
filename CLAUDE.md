# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13 vacation rental website for "Gîtes Mon Trésor" built with the T3 Stack. It's a static website showcasing vacation rentals with pricing tables, contact forms, and maps integration.

## Commands

- **Development**: `npm run dev` - Start development server
- **Build**: `npm run build && next export` - Build and export static site
- **Lint**: `npm run lint` - Run ESLint
- **Start**: `npm start` - Start production server

## Architecture

### Tech Stack
- **Framework**: Next.js 13 with TypeScript
- **UI**: Chakra UI + Tailwind CSS
- **Maps**: @react-google-maps/api (currently broken, needs iframe replacement)
- **Forms**: react-hook-form + EmailJS
- **Images**: ImageKit.io for remote images
- **Icons**: React Icons
- **Animation**: Framer Motion

### Project Structure
- `src/components/` - React components (modals, pricing, maps, etc.)
- `src/pages/` - Next.js pages (main entry point is MainPage.tsx)
- `src/styles/` - Global CSS styles
- `src/env/` - Environment variable validation
- `public/` - Static assets

### Key Components
- **PriceTable.tsx**: Main pricing display with seasonal rates
- **Maps.tsx**: Google Maps integration (currently using API key, needs iframe replacement)
- **Contact.tsx**: Contact form using EmailJS
- **Various Modal components**: Different gîte information modals (Ananas, Palmier, Kawan)

### Environment Variables
- EmailJS configuration stored in .env
- Google Maps API key embedded in code (security issue)

## Current Issues

1. **Google Maps**: Using exposed API key in Maps.tsx:34, needs to be replaced with iframe embed
2. **Pricing**: Pricing information may need updates per client maintenance requirements
3. **Static Export**: Configured for static site generation with `next export`

## Important Notes

- This is a maintenance project for an existing client
- The site uses both Chakra UI and Tailwind CSS (mixed approach)
- Maps component currently exposes Google API key publicly
- EmailJS handles contact form submissions
- Images are served from ImageKit.io CDN