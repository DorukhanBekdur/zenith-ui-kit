<div align="center">
  <h1>⚛️ Zenith UI Kit</h1>
  <p><strong>A Premium, Accessible, and Aesthetics-Driven React Component Library</strong></p>

  [![Last Commit](https://img.shields.io/github/last-commit/DorukhanBekdur/zenith-ui-kit?style=flat-square)](https://github.com/DorukhanBekdur/zenith-ui-kit/commits/main)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://github.com/DorukhanBekdur/zenith-ui-kit/blob/main/LICENSE)
  [![Tests](https://img.shields.io/badge/Tests-Passing-success?style=flat-square)](https://github.com/DorukhanBekdur/zenith-ui-kit)
  [![Storybook](https://img.shields.io/badge/Storybook-Live-FF4785?style=flat-square&logo=storybook&logoColor=white)](https://zenith-ui-ecvczxiu5-dorukhan-bekdurs-projects.vercel.app)

  <br />
  <div>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest" />
  </div>
</div>

---

## ✨ Why Zenith UI?

Zenith UI is not just another component library; it is a **premium design system** engineered to make your web applications look strictly professional. It combines robust React functionality with elegant SCSS-driven styling to offer an out-of-the-box stellar developer and user experience.

- **Premium Aesthetics**: Engineered with ultra-smooth micro-animations, tasteful drop shadows, and modern **glassmorphism** effects.
- **27+ Production-Ready Components**: From foundational building blocks like `Box` to complex `Accordion`, `Tabs`, and `Drawer`.
- **Robust Documentation**: Every single component is meticulously documented in **Storybook** with interactive controls.
- **Highly Tested**: Rigorously tested using **Vitest** and **React Testing Library** to eliminate UI regressions.
- **Theme Aware**: Integrated Light & Dark modes running purely on global SCSS variables and custom properties.
- **Accessible (a11y)**: Built with strong respect for standard HTML semantics and ARIA traits.

---

## 🚀 Getting Started

Zenith UI is designed to be easily cloneable and usable as a starting ground for your own enterprise products.

```bash
# 1. Clone the repository
git clone https://github.com/DorukhanBekdur/zenith-ui-kit.git

# 2. Navigate to project directory
cd zenith-ui-kit

# 3. Install dependencies
npm install

# 4. Start the interactive Storybook dashboard
npm run storybook
```

---

## 🧩 Component Arsenal

Zenith UI ships with a highly diverse set of interface pieces natively.

| Category | Components | Description |
| :--- | :--- | :--- |
| **Actions** | `Button`, `IconButton`, `Link` | Interactive elements to execute actions or navigation. |
| **Data Entry** | `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `Textarea` | Highly polished forms and selection controls. |
| **Feedback** | `Alert`, `Snackbar`, `Progress`, `Skeleton`, `Tooltip` | Graceful loading states and user notifications. |
| **Display & Layout**| `Box`, `Card`, `Table`, `Stack`, `Avatar`, `Typography` | Data presentation and dimensional structure utilities. |
| **Navigation** | `Tabs`, `Accordion`, `Breadcrumbs`, `Pagination`, `Drawer`, `Modal` | Intuitive way-finding and overlay solutions. |

---

## 💡 Showcase Usage

Zenith UI utilizes `prop-driven` styling, allowing you to manipulate aesthetics without writing custom CSS.

### **Glassmorphism Modal Example**
```jsx
import React, { useState } from "react";
import { Button, Modal, Typography } from "zenith-ui";

export function Settings() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>Open Settings</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="System Preferences">
        <Typography variant="body1">
          Adjust your account details inside this premium frosted-glass modal overlay.
        </Typography>
      </Modal>
    </>
  );
}
```

---

## 🧪 Testing

We value high-quality engineering. The project contains a comprehensive suite of unit and integration tests covering the core logic of UI components. Run tests anytime via:

```bash
npm run test
```

---

## 📄 License & Contact

This project is open-sourced under the **MIT License**.

- **Maintainer**: Dorukhan Bekdur
- **GitHub**: [@DorukhanBekdur](https://github.com/DorukhanBekdur)
- **Email**: dorukhanbekdur@gmail.com
