# ⚛️ Zenith UI: A Modern Component Library

[![Last Commit](https://img.shields.io/github/last-commit/DorukhanBekdur/zenith-ui-kit)](https://github.com/DorukhanBekdur/zenith-ui-kit/commits/main)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/DorukhanBekdur/zenith-ui-kit/blob/main/LICENSE)

<p align="center">
  <img src="https://img.shields.io/badge/-REACT-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/-JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/-SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
  <img src="https://img.shields.io/badge/-VITE-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/-STORYBOOK-FF4785?style=for-the-badge&logo=storybook&logoColor=white" />
</p>
<p align="center">
  <img src="https://img.shields.io/badge/DESIGN%20SYSTEM-000000?style=for-the-badge&labelColor=333333&color=A020F0" />
  <img src="https://img.shields.io/badge/ACCESSIBILITY-000000?style=for-the-badge&labelColor=333333&color=008080" />
</p>

---

## 🔥 Project Overview

This is a comprehensive and modern User Interface (UI) component library, Zenith UI, designed to accelerate the development of high-quality, **accessible**, and responsive web applications.

The library focuses on delivering a complete **Design System**, emphasizing clean architecture, detailed documentation, and robust type safety to ensure a seamless developer experience.

## 🔗 Core Engineering Focus

Zenith UI is engineered based on modern frontend best practices, demonstrated by the following key principles:

- **Atomic Component Design:** All components are built following the principles of Atomic Design, ensuring maximum reusability and maintainability across the entire system.
- **React JavaScript-First Development:** The entire codebase is written in JavaScript, providing strong typing, enhanced IntelliSense, and significantly reducing runtime errors.
- **Prop-Driven Styling:** Visual presentation is highly decoupled from component logic. Styling variations (size, variant, color) are dynamically managed based purely on component props.
- **Professional Documentation (Storybook):** Storybook is used to create a living, interactive style guide where every component variant, state, and prop is meticulously documented for visual regression testing and easy developer onboarding.
- **Accessibility (A11y) Commitment:** Components are built with WAI-ARIA standards in mind, ensuring a positive experience for users relying on assistive technologies.

## 🚀 Getting Started

Install Zenith UI using npm or yarn:

    ```bash
    npm install
    # or yarn

    ```

## 🧩 Component Showcase

Zenith UI provides a robust set of ready-to-use components, categorized for easy navigation.

| Category       | Components                                  | Description                            |
| :------------- | :------------------------------------------ | :------------------------------------- |
| **Actions**    | `Button`, `IconButton`, `Link`              | Interactive elements for user actions. |
| **Data Entry** | `Input`, `Select`, `Checkbox`, `RadioGroup` | Forms and data collection components.  |
| **Feedback**   | `Alert`, `Snackbar`, `Progress`, `Spinner`  | Notifying users about system status.   |
| **Layout**     | `Grid`, `Stack`, `Card`, `Container`        | Tools for structuring the interface.   |
| **Navigation** | `Tabs`, `Sidebar`, `Breadcrumbs`            | Guiding users through the application. |

_(For a full list of components and their documentation, visit our [Storybook Documentation Link])_

## 🎨 Customization & Theming

Zenith UI is highly customizable and designed to integrate seamlessly with your brand identity. We offer multiple layers of customization:

- **Global Theme Overrides:** Easily override the default design tokens (colors, typography, spacing, breakpoints) by passing a custom theme object to the `ThemeProvider` component. This affects all instances of every component globally.
- **SCSS Variables (Advanced):** If you are consuming the raw SCSS files, you can modify global SCSS variables before importing the library's main styles to change the fundamental look and feel across the entire system at the CSS level.
- **Component Overrides (`sx` Prop):** For local, one-off style adjustments that do not require global changes, every component supports a special style prop (e.g., `sx` or `css` depending on the styling solution) allowing you to inject custom styles directly.

### Usage Example 💡

You can import and use any component directly in your React application:

**1. Basic User Form Example (Input & Button):**

```jsx
import React from "react";
import { Button, Card, Input } from "zenith-ui";

function UserProfile() {
  return (
    <Card title="User Settings" shadow="lg">
      <Input label="Email" placeholder="user@example.com" />
      <Button variant="primary" size="lg" style={{ marginTop: "15px" }}>
        Save Changes
      </Button>
    </Card>
  );
}
```

**2. Alert and Link Example (Feedback & Action)::**

```jsx
import React from "react";
import { Alert, Link } from "zenith-ui";

function DashboardNotification() {
  return (
    <Alert variant="warning" title="License Expiring">
      Your subscription will expire in 3 days.
      <Link href="/billing" underline>
        Update your billing details.
      </Link>
    </Alert>
  );
}
```

**3. Data Entry with Select (Forms)::**

```jsx
import React, { useState } from "react";
import { Select } from "zenith-ui";

function LanguageSelector() {
  const [lang, setLang] = useState("en");

  const options = [
    { value: "tr", label: "Turkish" },
    { value: "en", label: "English" },
  ];

  return (
    <Select
      label="Select Language"
      options={options}
      value={lang}
      onChange={(e) => setLang(e.target.value)}
    />
  );
}
```

## 🛠️ Development & Contribution

We enthusiastically welcome contributions from the community!

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/DorukhanBekdur/zenith-ui-kit.git](https://github.com/DorukhanBekdur/zenith-ui-kit.git)
    cd zenith-ui-kit
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn
    ```
3.  **Run Storybook (Development Server):**
    ```bash
    npm run storybook
    # This will open the documentation playground at http://localhost:6006
    ```

## 📄 License & Contact

This project is licensed under the **MIT License**.

For major issues or business inquiries, please contact the lead maintainer:

- **Maintainer:** DorukhanBekdur
- **Email:** dorukhanbekdur@gmail.com

---
