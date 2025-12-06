# React Components Library

A modern, flexible, and accessible React components library featuring buttons, cards, and modals. Built with simple JavaScript (no TypeScript), styled with CSS, and packaged for easy distribution.

## 🎯 Project Overview

This library provides three essential UI components that are commonly used in modern web applications:

1. **Button** - A versatile button component with multiple variants and sizes
2. **Card** - A flexible container component for displaying content
3. **Modal** - A dialog component with animations and accessibility features

## ✨ Features

- ✅ **Multiple Components**: Button, Card, and Modal components with simple API
- 🎨 **Customizable**: Multiple variants, sizes, and styling options
- ♿ **Accessible**: WCAG compliant with proper ARIA attributes
- 📱 **Responsive**: Mobile-friendly components
- 🚀 **Simple**: Plain JavaScript, no TypeScript required
- 🎬 **Live Demo**: Interactive demo page with all components
- 💪 **Lightweight**: Minimal dependencies (React only)

## 📦 Installation

### Using npm

```bash
npm install @abdulwhb1567/react-components-library
```

### Using yarn

```bash
yarn add @abdulwhb1567/react-components-library
```

### Using pnpm

```bash
pnpm add @abdulwhb1567/react-components-library
```

## 🚀 Quick Start

1. Import the components and styles:

```jsx
import { Button, Card, Modal } from '@abdulwhb1567/react-components-library';
import '@abdulwhb1567/react-components-library/styles';
```

2. Use the components in your application:

```jsx
import React, { useState } from 'react';
import { Button, Card, Modal } from '@abdulwhb1567/react-components-library';
import '@abdulwhb1567/react-components-library/styles';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card title="Welcome">
        <p>Click the button to open a modal</p>
      </Card>
      
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Hello!"
      >
        This is a modal dialog.
      </Modal>
    </>
  );
}
```

## 📚 Components Documentation

### Button Component

A versatile button with multiple variants and sizes.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'success' \| 'outline'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `fullWidth` | `boolean` | `false` | Whether button should take full width |
| `isLoading` | `boolean` | `false` | Show loading state with spinner |
| `disabled` | `boolean` | `false` | Disable the button |
| `children` | `ReactNode` | - | Button content |

**Examples:**

```jsx
// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Delete</Button>
<Button variant="success">Confirm</Button>
<Button variant="outline">Outline</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button disabled>Disabled</Button>
<Button isLoading>Loading...</Button>
<Button fullWidth>Full Width</Button>

// Click Handler
<Button onClick={() => console.log('Clicked!')}>
  Click me
</Button>
```

---

### Card Component

A flexible container for displaying content with optional sections.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title |
| `subtitle` | `string` | - | Card subtitle |
| `image` | `string` | - | URL of image to display at top |
| `imageAlt` | `string` | `''` | Alt text for image |
| `header` | `ReactNode` | - | Custom header content |
| `body` | `ReactNode` | - | Custom body content |
| `footer` | `ReactNode` | - | Footer content |
| `elevated` | `boolean` | `false` | Enhanced shadow effect |
| `children` | `ReactNode` | - | Card body content |

**Examples:**

```jsx
// Simple card
<Card title="My Card">
  Card content
</Card>

// Card with image
<Card 
  title="Product"
  subtitle="Amazing Product"
  image="/product.jpg"
  imageAlt="Product"
>
  Product description here
</Card>

// Card with all sections
<Card 
  header={<h3>Header</h3>}
  body={<p>Main content</p>}
  footer={<Button>Action</Button>}
/>

// Elevated card (more prominent)
<Card elevated title="Important">
  This card stands out more
</Card>
```

---

### Modal Component

A dialog component with animations and accessibility features.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | - | Controls modal visibility |
| `onClose` | `() => void` | - | Callback when modal should close |
| `title` | `string` | - | Modal title |
| `header` | `ReactNode` | - | Custom header content |
| `body` | `ReactNode` | - | Custom body content |
| `footer` | `ReactNode` | - | Footer content |
| `showCloseButton` | `boolean` | `true` | Show close button |
| `closeOnOverlayClick` | `boolean` | `true` | Close on overlay click |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Modal size |
| `children` | `ReactNode` | - | Modal body content |

**Examples:**

```jsx
const [isOpen, setIsOpen] = useState(false);

// Basic modal
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm"
>
  Are you sure you want to proceed?
</Modal>

// Modal with footer buttons
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Delete Item"
  footer={
    <div style={{ display: 'flex', gap: '0.75rem' }}>
      <Button variant="secondary" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  }
>
  This action cannot be undone.
</Modal>

// Different sizes
<Modal isOpen={true} onClose={() => {}} size="sm">Small Modal</Modal>
<Modal isOpen={true} onClose={() => {}} size="md">Medium Modal</Modal>
<Modal isOpen={true} onClose={() => {}} size="lg">Large Modal</Modal>
```

**Features:**
- ⌨️ Press Escape to close
- 🖱️ Click outside to close (optional)
- 🎬 Smooth fade-in and slide-up animations
- 🔒 Body scroll locked when open
- ♿ Accessible with ARIA attributes

## 🎨 Theming

All components use CSS custom properties for theming. Override them in your CSS:

```css
:root {
  --primary-color: #3b82f6;
  --primary-hover: #2563eb;
  --danger-color: #ef4444;
  --success-color: #10b981;
  --secondary-color: #6b7280;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --border-color: #e5e7eb;
  --light-bg: #f3f4f6;
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --radius-md: 6px;
}
```

**Customize theme:**

```css
:root {
  --primary-color: #8b5cf6;
  --danger-color: #ec4899;
  --success-color: #06b6d4;
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Development

### Setup

```bash
# Install dependencies
npm install

# Run development server with demo page
npm run dev

# Build library
npm run build

# Preview built library
npm run preview
```

### Project Structure

```
src/
├── components/
│   ├── Button.jsx        # Button component
│   ├── Card.jsx          # Card component
│   ├── Modal.jsx         # Modal component
│   └── index.js          # Components export
├── styles/
│   └── index.css         # Global styles and component styles
└── index.js              # Library entry point

examples/
├── App.jsx               # Demo application
├── main.jsx              # React DOM entry
└── index.css             # Demo page styles

index.html               # HTML template
package.json             # Dependencies and scripts
vite.config.ts           # Vite build configuration
```

## 🚀 Build Output

When you run `npm run build`, the library creates:

- `dist/index.js` - ES module format
- `dist/index.cjs` - CommonJS format
- `dist/index.css` - Component styles

## 📄 License

MIT © Abdul Wahab

## 🔗 Repository

[GitHub Repository](https://github.com/abdulwhb1567-ui/react_components_library)

## 👨‍💻 Author

**Abdul Wahab**
- GitHub: [@abdulwhb1567-ui](https://github.com/abdulwhb1567-ui)

## 🎯 Key Differences from TypeScript Version

- Pure JavaScript with JSDoc comments for documentation
- No build time type checking
- Simpler setup and faster development
- Compatible with both JSX and plain JavaScript projects
- Uses React PropTypes style component props (documented in comments)

## 🙏 Acknowledgments

Built with modern web standards and best practices for React component development.
