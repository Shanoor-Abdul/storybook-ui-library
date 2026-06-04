# @shanoorabdul/ui-library

Reusable React UI Component Library built with React, TypeScript, Tailwind CSS, Vite, and Storybook.

## Features

- TypeScript support
- Accessible components
- Customizable styling via `className`
- Storybook documentation
- Lightweight and reusable
- React 19 compatible

---

## Installation

```bash
npm install @shanoorabdul/ui-library
```

---

## Peer Dependencies

Requires React 19 or later.

```bash
npm install react react-dom
```

---

## Usage

```tsx
import { Button } from "@shanoorabdul/ui-library";

function App() {
  return (
    <Button
      label="Click Me"
      onClick={() => alert("Hello")}
    />
  );
}
```

---

## Available Components

### Form Components

- Button
- Input
- TextArea
- Select
- Checkbox
- RadioGroup
- Switch

### Feedback Components

- Badge
- Loader
- Tooltip
- Toast

### Layout Components

- Card
- Modal
- Drawer

### Data Display Components

- Table
- Pagination

---

## Example

```tsx
import {
  Button,
  Input,
  Select,
  Checkbox,
} from "@shanoorabdul/ui-library";

function App() {
  return (
    <>
      <Input
        label="Username"
        placeholder="Enter username"
      />

      <Select
        label="Country"
        options={[
          { value: "india", label: "India" },
          { value: "saudi", label: "Saudi Arabia" },
        ]}
      />

      <Checkbox
        label="Accept Terms"
      />

      <Button
        label="Submit"
      />
    </>
  );
}
```

---

## TypeScript Support

This library includes built-in TypeScript definitions.

```tsx
import type { ButtonProps } from "@shanoorabdul/ui-library";
```

---

## Development

Start Storybook:

```bash
npm install
npm run storybook
```

Build the library:

```bash
npm run build
```

---

## License

MIT

---

## Author

Shanoor Abdul

npm:
https://www.npmjs.com/package/@shanoorabdul/ui-library

GitHub:
https://github.com/Shanoor-Abdul/storybook-ui-library