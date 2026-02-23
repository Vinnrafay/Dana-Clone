# Copilot Instructions for newdana

## Project Overview

**newdana** is an Expo/React Native universal app (iOS, Android, Web) using Expo Router v6 for file-based routing and React Navigation for tab-based navigation. The project uses React 19 with TypeScript strict mode and modern Expo tooling (Expo SDK 54).

## Architecture & Key Concepts

### File-Based Routing (Expo Router)

- Routes defined in `app/` directory with file-based routing
- `(tabs)` directory uses route groups for tab navigation layout
- Main entry point: `app/_layout.tsx` - wraps entire app with `ThemeProvider`
- Tab navigation entry: `app/(tabs)/_layout.tsx` - configures bottom tab bar
- Key screens: `index.tsx` (Home), `explore.tsx` (Explore)
- Modal: `app/modal.tsx` - presented as modal with custom animations

### Theming System

- **Colors** defined in `constants/theme.ts` with light/dark mode variants
- **Key hook**: `useThemeColor()` in `hooks/use-theme-color.ts` - accepts `{light, dark}` props and colorName key
- **Themed components**: `ThemedText` and `ThemedView` wrap React Native components with theme-aware styling
- Color scheme detected via `useColorScheme()` hook (from react-native)
- All themed components accept `lightColor` and `darkColor` overrides

### Component Patterns

#### Themed Components

Use `ThemedText` instead of raw `Text`:

```tsx
import { ThemedText } from "@/components/themed-text";
<ThemedText type="title">Hello</ThemedText>;
```

Available types: `default`, `defaultSemiBold`, `title`, `subtitle`, `link`

#### Icon Usage

- `IconSymbol` component in `components/ui/icon-symbol.tsx` renders SF Symbols (iOS) or Material icons
- Usage: `<IconSymbol size={28} name="house.fill" color={color} />`

#### Haptic Feedback

- `HapticTab` component wraps tab buttons for haptic feedback on press
- Use `expo-haptics` for custom haptic patterns

### Navigation Structure

```
app/
├── _layout.tsx (RootLayout - ThemeProvider + Stack)
├── (tabs)/
│   ├── _layout.tsx (TabLayout - Bottom tabs)
│   ├── index.tsx (Home screen)
│   └── explore.tsx (Explore screen)
├── modal.tsx (Modal screen)
└── splash.tsx (Splash screen)
```

## Developer Workflows

### Running the App

```bash
npm start              # Start development server
npx expo start --ios   # Start iOS simulator
npx expo start --android # Start Android emulator
npx expo start --web   # Start web development server
```

### Linting & Code Quality

```bash
npm run lint           # Run ESLint with expo config
```

### Reset Project

```bash
npm run reset-project  # Clears app/ and creates app-example/ backup
```

## Project-Specific Conventions

### TypeScript Path Alias

- `@/*` maps to root directory - use for all imports: `import { X } from '@/components/...'`
- Never use relative paths like `../components/`

### Styling Approach

- Use React Native `StyleSheet.create()` for performance
- Define styles within component files, not separate stylesheet files
- Platform-specific styling via `Platform.select()` in `constants/theme.ts`
- No CSS frameworks (NativeWind, Tamagui) in current setup

### Naming Conventions

- Component files: kebab-case (e.g., `themed-text.tsx`, `haptic-tab.tsx`)
- Component exports: PascalCase (e.g., `export function ThemedText()`)
- Hooks: camelCase starting with `use-` (e.g., `use-color-scheme.ts`)
- Web-specific variants use `.web` suffix (e.g., `use-color-scheme.web.ts`)

### Dark/Light Mode Implementation

- Always accept optional `lightColor` and `darkColor` props
- Use `useThemeColor()` to resolve the current theme's color
- Fall back to `Colors` constant if no override provided
- Example: `const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');`

## Critical Integration Points

### React Navigation + Expo Router

- `@react-navigation/*` provides low-level navigation primitives
- `expo-router` provides file-based routing on top of React Navigation
- Stack, Tabs, and Drawer all work through Expo Router
- TabLayout configures `tabBarActiveTintColor` from Colors theme

### New Architecture (React Compiler)

- `newArchEnabled: true` and `reactCompiler: true` in app.json
- React 19 with concurrent features enabled
- Avoid deprecated APIs and use modern React patterns

### Expo-Specific Features in Use

- `expo-font` - font loading
- `expo-icons` - vector icon support (SF Symbols)
- `expo-splash-screen` - custom splash configuration
- `expo-linking` - deep linking
- `expo-status-bar` - platform-aware status bar styling
- `expo-haptics` - haptic feedback

## Common Tasks & Patterns

### Adding a New Tab Screen

1. Create file in `app/(tabs)/yourscreen.tsx`
2. Add `<Tabs.Screen>` entry in `app/(tabs)/_layout.tsx`
3. Use `ThemedView` and `ThemedText` for consistent theming
4. Import `IconSymbol` for tab icon

### Adding a Modal Screen

1. Create file: `app/yourmodal.tsx`
2. Reference in root layout: `<Stack.Screen name="yourmodal" options={{presentation: 'modal'}} />`
3. Navigate with: `router.push('/yourmodal')`

### Creating a Reusable Themed Component

1. Place in `components/` directory
2. Accept `lightColor?` and `darkColor?` as optional props
3. Use `useThemeColor()` hook to resolve colors
4. Extend React Native component types for proper typing

## Build & Distribution (When Needed)

- Managed by Expo - no native code changes required currently
- Use Expo CLI: `expo build:android` / `expo build:ios`
- Web deployment uses static output to `dist/`
