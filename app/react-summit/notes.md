# Notes

## Day 0: Workshops

### Tanstack AI

- Building with AI is actually quite simple
- Reuse APIs by wrapping them in tools

### Tanstack Query

- Loading spinners are a last resort!
- Know your tools inside out!
- Prefetching by predicting user intent
- Stop wrapping `useQuery`'s in hooks because hooks aren't as versatile
- Abstract queries into reusable objects for more versatility
- Gave us an example codebase to reference

## Day 1: JSNation

### State of AI in Web Dev

- In 2025, people said that ~20% of their code was written by AI - this year they said 70-80%

### How Netflix migrated to a design system

- Monorepo helped keep everything visible to all devs
- Incremental package adoption helped
- Apps lagging too far behind adopted primitives with temp local cmp's first until DS cmp's were ready to be swapped in

### Micro-FE's

- Seems like it causes more governance and could bottleneck development
- Good for risk aversion if designing to fail correctly

### Whatsapp's Design System for web and mobile

- If an org the size of Meta can do it, anyone can
- Every interaction on every platform is important

### Removing 28k LOC from the Sentry codebase

- Knip demo
- Dominic removed code that wasn't being used but was part of a roadmap to be used in the future

### OS Awards

- OSS is built on recognition, respect and, ultimately, the love of the game

### WebMCP with Wes

- WebMCP gives users the choice between manual interaction or a natural language abstraction

## Day 2: React Summit

### RSCs with Aurora

### Just use CSS with Scott

- Most people over-complicate things
- There's probably a more browser-native way of doing whatever you're doing
- `scroll-snap` is incredible

### Tanstack Start

- RSCs and SSR are not the same thing
- RSCs are just data fetched from the server like any other API request

### React compiler

- Knowing what happens under the hood means you'll make more informed and perfomant decisions when using the abstraction

### Designing for failure

- Loading spinners are a last resort!
- Localise error boundaries
- Utilise multiple patterns

### Panel discussion + discussion room

- AI is a reflection of the person using it
- A lot of people are using it as a reason to care less
- The best engineers are always reviewing and refactoring generated code
- The best engineers always ask it "why?"
- You have to understand the fundamentals to know what to prompt for
- Reading souless PR's is chiseling away at culture and motivation

## Morals of the story

- Design for failure
- Know your tools
- AI usage
- UI enhancement techniques
