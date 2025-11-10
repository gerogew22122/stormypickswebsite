# Stormy Picks Landing Page - Design Guidelines

## Design Approach
Reference-based approach drawing from modern betting/finance platforms (Draftkings, FanDuel aesthetic) combined with subscription service clarity (similar to streaming platforms). Focus on trust, transparency, and immediate conversion.

## Core Layout Structure

### Hero Section (Above Fold)
**Primary Focus Area - Clean & Conversion-Optimized**

- **Logo Placement**: Position SP logo in upper portion of hero, naturally integrated with the design (not floating in isolation)
- **Headline**: Bold, attention-grabbing headline directly beneath logo communicating core value proposition
- **Supporting Copy**: Brief, punchy blurb explaining what Stormy Picks offers (1-2 short sentences max)
- **Trust Stats**: Prominent display of key metrics - "Units Profited Last Month" and/or "Total Units Profited Overall" - positioned to build immediate credibility
- **Single CTA**: One primary button reading "Start for less than $1 a day" - this is the ONLY clickable action in the hero section, linking directly to: https://whop.com/stormy-picks?a=stormypicks
- **Visual Treatment**: Hero should use a sports betting aesthetic - consider dark backgrounds with strategic color accents that complement the SP brand

### Below Fold Sections
- **Performance Metrics Section**: Detailed stats, charts, and historical performance data - positioned below the hero to avoid cluttering the initial view
- **Social Proof**: Testimonials or user success stories if available
- **How It Works**: Simple 3-step process explaining the service
- **Footer**: Minimal footer with necessary links and information

## Typography System
- **Headlines**: Bold, impactful fonts for attention-grabbing headlines
- **Stats/Numbers**: Large, clear typography for trust-building metrics
- **Body Copy**: Clean, readable sans-serif for supporting text
- **CTA Button Text**: Medium weight, easily readable

## Spacing System
Use Tailwind units: 2, 4, 8, 12, 16, 20, 24 for consistent rhythm throughout the page

## Component Specifications

### Primary CTA Button
- Text: "Start for less than $1 a day"
- Direct link to Whop subscription page (no intermediate steps)
- Prominent placement in hero section
- Implements blur background effect if overlaying images
- Built-in hover/active states (no custom hover specifications needed)

### Trust Stats Display
- Large numerical values with clear labels
- Positioned prominently in hero area
- Designed to be immediately scannable

### Logo Integration
- SP logo sized appropriately for hero prominence
- Natural integration with background/layout (not isolated)
- Positioned in upper portion of viewport

## Images
**Large Hero Background Image**: Yes - use a sports-themed background image that evokes betting/analytics atmosphere. The image should be dark or have an overlay to ensure text/logo readability. Position logo and content naturally over this background.

## Critical Requirements
- **Single Conversion Path**: Only ONE primary CTA button on entire landing page leading directly to Whop subscription
- **Removed Elements**: No "Join Now" button with scroll-down behavior, no "View Performance" button in hero section
- **First Section Philosophy**: Uncluttered, focused, conversion-optimized with clear hierarchy: Logo → Headline → Stats → CTA

## Accessibility
- High contrast text over hero background
- Clear visual hierarchy
- Mobile-responsive design ensuring CTA remains prominent on all devices