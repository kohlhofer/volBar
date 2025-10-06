# MIDI Volume Control - Landing Page Specification

## Project Overview
Landing page for **MIDI Volume Control**, a macOS app that enables MIDI controller-based volume control for system audio and Apple Music. The app features a beautiful purple gradient icon with volume control knob design.

## Architecture Decision: Astro Static Site Generator
**Chosen:** Astro with Tailwind CSS
**Reasoning:**
- Zero JS by default for optimal performance
- Excellent GitHub Pages deployment support
- Built-in markdown support for future content pages (help docs, blog)
- Component-based architecture for maintainability
- Great SEO and Core Web Vitals scores
- Easy integration with Tailwind CSS

## App Context
- **Name:** MIDI Volume Control
- **Platform:** macOS (requires macOS 10.15+)
- **Current Version:** 4.0
- **Distribution:** Apple App Store
- **Icon:** Purple gradient with volume knob design
- **Key Features:** System volume control, Apple Music integration, MIDI Learn, menu bar interface

## Site Structure

### Pages
1. **Homepage** (`/`)
   - Hero section with large app icon
   - Feature highlights
   - App Store download CTA
   - Screenshots gallery

2. **Terms of Service** (`/terms`)
   - Standard terms for app usage
   - Privacy policy integration

3. **Help** (`/help`) - Future expansion
   - FAQ section
   - Setup guides
   - Troubleshooting

### Homepage Layout

#### Hero Section
- **Left Side:** Super-sized app icon (responsive)
- **Right Side:** 
  - App name and tagline
  - Brief description
  - Primary CTA: "Download from App Store" button
  - System requirements (macOS 10.15+)

#### Features Section
Three-column grid highlighting:
1. **System Volume Control** - Instant MIDI control
2. **Apple Music Integration** - Independent music volume
3. **MIDI Learn** - Easy controller setup

#### Screenshots Section
- Settings window screenshot
- Menu bar interface screenshot
- Usage demonstration

#### Technical Specs Section
- Requirements: macOS 10.15+, MIDI controller
- Key frameworks: Core MIDI, Core Audio
- Security: Fully sandboxed

## Design System

### Color Palette
- **Primary:** Purple gradients (matching app icon)
- **Accent:** Blue for CTAs
- **Neutral:** Grays for text
- **Background:** White/light gray

### Typography
- **Headers:** Inter or system fonts
- **Body:** System fonts for macOS feel

### Components Needed
- Hero section with app icon showcase
- Feature cards
- Screenshot gallery
- App Store badge/button
- Footer with links

## Technical Requirements

### Framework Stack
- **Site Generator:** Astro
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages
- **Images:** Optimized PNG/WebP
- **Icons:** Heroicons or similar

### Performance Goals
- Lighthouse score: 95+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s

### SEO Requirements
- Open Graph tags for social sharing
- Twitter Card meta tags
- Schema.org markup for app
- Proper heading hierarchy
- Alt text for all images

## Content Strategy

### Messaging Hierarchy
1. **Primary:** "Control your Mac's volume with any MIDI controller"
2. **Secondary:** "Perfect for anyone with a MIDI controller who wants convenient volume control"
3. **Features:** System volume, Apple Music, MIDI Learn, menu bar integration

### App Store Optimization
- Focus on keywords: MIDI, volume control, macOS, audio, convenience
- Highlight ease of use for everyday Mac users
- Emphasize simple setup with MIDI Learn

## Future Considerations
- Blog section for updates and tutorials
- User testimonials/reviews section
- Video demonstrations
- Multi-language support
- Analytics integration

## Asset Requirements
- App icon (high-res PNG/SVG)
- Screenshots: Settings window, Menu bar interface
- App Store badges (official Apple assets)
- Social media sharing images

## Deployment
- **Platform:** GitHub Pages
- **Domain:** Custom domain recommended
- **SSL:** Automatic via GitHub Pages
- **Build:** Astro static build process