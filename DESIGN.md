---
name: Daniel Shayo Engineering Portfolio
description: Kinetic editorial portfolio for engineering work in progress
colors:
  paper: "#f2f2f0"
  ink: "#0b0b0b"
  signal-orange: "#e44700"
  test-lime: "#d9ff43"
typography:
  display: "DM Sans 700"
  body: "DM Sans 400"
  metadata: "IBM Plex Mono 500"
motion:
  scroll: "Lenis smooth wheel"
  choreography: "GSAP ScrollTrigger"
---

# Design System — Engineering in Motion

## Creative north star

A moving engineering field notebook. The portfolio should feel authored, direct, and unfinished in the productive sense: real work is shown at useful scale, current limits are named, and every section advances the story.

## Visual language

Off-white paper and black form the base. Signal orange carries the main voice and contact action. Acid lime appears only in the moving discipline strip and active build states. Large type creates the composition; rules and mono labels provide technical rhythm without imitating a dashboard.

## Layout

The opening frame uses oversized typography, sparse metadata, and a small live experiment window. Projects are full-screen chapters: imagery stays pinned while the project story passes beside it. Practice becomes one high-energy lime field. Background remains a quiet ruled list.

## Motion

GSAP controls the opening type reveal, project image parallax, copy entrances, ticker movement, and reading progress. Lenis provides restrained wheel smoothing. Motion is tied to scroll and never blocks navigation. `prefers-reduced-motion` removes the choreography while preserving every element.

## Rules

- Use project chapters, never interchangeable cards.
- Lead with the artifact and name uncertainty plainly.
- Keep one palette; do not add a theme switcher.
- Reserve mono type for metadata, state, and captions.
- Reserve orange for voice and action; reserve lime for process and active state.
- Preserve keyboard focus, semantic landmarks, readable contrast, and mobile reflow.
