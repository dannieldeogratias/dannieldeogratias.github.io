---
name: Daniel Shayo Engineering Portfolio
description: Evidence-first systems passport for engineering work
colors:
  signal-blue: "#0649d8"
  paper: "#f4f6f8"
  surface: "#ffffff"
  ink: "#101318"
  muted: "#5d6570"
  line: "#cbd1d8"
  build-signal: "#98f542"
typography:
  display:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(3.4rem, 6.2vw, 5.8rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
rounded:
  control: "12px"
spacing:
  control: "17px"
  section: "clamp(96px, 12vw, 160px)"
components:
  button-primary:
    backgroundColor: "{colors.signal-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.control}"
    padding: "0 17px"
    height: "48px"
---

# Design System Daniel Shayo Engineering Portfolio

## Overview

**Creative North Star: "The Systems Passport"**

The portfolio presents every project as an inspected engineering record. Work leads visually, while concise status, evidence, and next-step fields let a recruiter distinguish implementation from ambition. The system feels precise and calm without resembling a generic developer dashboard.

**Key Characteristics:**
- Evidence before claims
- High-contrast white, graphite, and signal blue
- Project records separated by rules rather than card shells
- Functional translucency restricted to sticky navigation
- Compact mono labels reserved for record metadata

## Colors

Signal blue identifies actions and links. Cool paper and white surfaces create separation without decorative gradients. Lime marks active development only.

**The Signal Rule.** Lime is reserved for availability and active-development state; it never becomes general decoration.

## Typography

**Display Font:** DM Sans
**Body Font:** DM Sans
**Label Font:** IBM Plex Mono

Display text is dense and decisive. Body text stays neutral and readable. Mono text appears only where a record, date, status, or technical label benefits from measured alignment.

**The Evidence Voice Rule.** Large type states purpose; small mono type identifies evidence. Neither substitutes for body explanation.

## Layout

The page uses a fluid container capped at 1280px. The first viewport pairs the professional proposition with current work. Project records expand to the full reading width; secondary projects form a two-column comparison and become a single stream below 640px. Major sections use generous responsive spacing.

## Elevation & Depth

The system is flat by default. Borders and tonal changes establish hierarchy. Only the opening project image receives ambient depth; navigation blur is functional because content scrolls beneath it.

## Shapes

Content regions remain rectangular and edge-aligned. Twelve-pixel corners belong to controls. Status marks are circular because they represent state, not containers.

## Components

### Buttons
- Primary actions use signal blue, white text, 48px minimum height, and 12px corners.
- Secondary actions use the surface color and a neutral border.
- Hover lifts by two pixels; focus uses a three-pixel blue outline.

### Project Records
- A thin ink rule starts each record.
- Metadata shares one line above imagery.
- Evidence uses definition-list rows so labels and implementation details scan consistently.

### Navigation
- Sticky navigation uses restrained background blur with an opaque fallback for reduced transparency.
- Mobile navigation preserves Projects and Contact while hiding lower-priority anchors.

## Do's and Don'ts

### Do:
- **Do** lead with real project imagery and working links.
- **Do** distinguish current implementation from future development.
- **Do** preserve strong keyboard focus, reduced motion, and responsive reflow.

### Don't:
- **Don't** wrap every section in rounded cards.
- **Don't** invent adoption, performance, or production claims.
- **Don't** use lime as a broad accent or mono type as a technical costume.
