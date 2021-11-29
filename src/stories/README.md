# Storybook Component Documentation

This folder contain entire component documentation. Please visit [Storybook](https://storybook.js.org/) for more information.

You may notice there is different file extensions `(.mdx|.stories.tsx)`. We using `.mdx` extension for static component that do not have props. And for component with props we use `.stories.tsx` extension.

### Getting started

All settings has been configured when you install this project, all you have to do is write documentation.

### Write Documentation

**Static Component (.mdx)**
example:

### Base Class

📓 Author: Kukuh Baiquni | <kukuh.baiquni@gmail.com> 👈 `Write your name as author`<br>
⏰ Documented at: Saturday November 27, 2021 - 22:34 👈 `Time when writing documentation`

Sub Component of **`<LeftNavigation />`** for displaying **`BaseClass`** navigation. 👈 `Short description`

File Path: **`/components/sections/left-navigation/character/base-class.tsx`** 👈 `File path in /src`<br>
Used by: **`const routes: TYPE_ROUTES[]`** ( file path: **`/components/section/left-navigation/routes.tsx`** ) 👈 `Mention component/variable that use this component`

Notes: 👈 `Add notes (optional)`

- This component is affected by theme toggler **`<Header />`** ( file path: **`/components/sections/header`** ).
- This component contain **`<NextClass />`** ( file path: **`/components/section/left-navigation/character/next-class.tsx`** )
  You can hover over base class list at navigation below to see **`<NextClass />`** component.
- This component is wrapped manually using **[Decorators](https://storybook.js.org/docs/react/writing-stories/decorators)** in story mode.
  Because this component doesn't have natural wrapper, so we add it manually based on original component. See below.

---

(Component Story)

---

📝 **Changelog** 👈 `Add notes for every component update/edit with the following format (the top most recent)`

- Friday, November 26, 2021 - 10:46 📓 Ocit bin Laden | <ocit.asik@gmail.com>
  - Add separator for each list navigation
  - Change component visibility
- Monday, November 22, 2021 - 14:22 📓 Kukuh Baiquni | <kukuh.baiquni@gmail.com>
  - Remove `mr-0` from `<nav>` class name.

If there is no update, simply write:

- _no recent changes_

---

**Dynamic Component (Component with props) (.stories.tsx)**
You can reffer to `.stories.tsx` files, too complicated to explain.

That's it.
