# Project Architecture
## Overview

This project follows a modular architecture designed for scalability and maintainability. The structure is organized by
features and responsibilities, making it easier to manage and understand.

## Directory Structure

### Root Directory

- **`node_modules/`**: Contains all npm packages and dependencies.
- **`public/`**: Static files served directly by the web server.
    - **`favicon.ico`**: The favicon for the application.

### `src/` Directory

- **`assets/`**: Static assets such as images and fonts.
- **`main.scss`**: Main SCSS file for application styling.
- **`core/`**: Core functionalities and utilities of the application.
- **`components/`**: Vue components organized by feature.
    - **`Header/`**
        - **`header.html`**: HTML template for the Header component.
        - **`header.ts`**: TypeScript file for Header logic.
        - **`Header.vue`**: Vue component file for Header.
    - **`Hero/`**
        - **`hero.html`**: HTML template for the Hero component.
        - **`hero.ts`**: TypeScript file for Hero logic.
        - **`Hero.vue`**: Vue component file for Hero.
    - **`...`**: Additional component directories follow the same structure.
- **`pages/`**: Page-level components and their logic.
    - **`private/`**
        - **`Admin/`**
            - **`admin.html`**: HTML template for the Admin page.
            - **`admin.ts`**: TypeScript file for Admin page logic.
            - **`Admin.vue`**: Vue component file for Admin page.
    - **`public/`**
        - **`404/`**
            - **`notFound.html`**: HTML template for the 404 Not Found page.
            - **`notFound.ts`**: TypeScript file for 404 page logic.
            - **`NotFound.vue`**: Vue component file for Not Found page.
        - **`AboutMe/`**
            - **`aboutMe.html`**: HTML template for the About Me page.
            - **`aboutMe.ts`**: TypeScript file for About Me page logic.
            - **`AboutMe.vue`**: Vue component file for About Me page.
        - **`Blog/`**
            - **`All/`**
                - **`blogAdmin.html`**: HTML template for Blog Admin page.
                - **`blogAdmin.ts`**: TypeScript file for Blog Admin page logic.
                - **`BlogAdmin.vue`**: Vue component file for Blog Admin.
            - **`Edit/`**
                - **`blogEdit.html`**: HTML template for Blog Edit page.
                - **`blogEdit.ts`**: TypeScript file for Blog Edit page logic.
                - **`BlogEdit.vue`**: Vue component file for Blog Edit.
            - **`Blog/`**
                - **`blog.html`**: HTML template for the Blog page.
                - **`blog.ts`**: TypeScript file for Blog page logic.
                - **`Blog.vue`**: Vue component file for Blog.
            - **`BlogId/`**
                - **`blogId.html`**: HTML template for Blog ID page.
                - **`blogId.ts`**: TypeScript file for Blog ID page logic.
                - **`BlogId.vue`**: Vue component file for Blog ID.
            - **`Contact/`**
                - **`contact.html`**: HTML template for Contact page.
                - **`contact.ts`**: TypeScript file for Contact page logic.
                - **`Contact.vue`**: Vue component file for Contact page.
            - **`Home/`**
                - **`home.html`**: HTML template for Home page.
                - **`home.ts`**: TypeScript file for Home page logic.
                - **`Home.vue`**: Vue component file for Home page.
            - **`Kalika/`**
                - **`aboutKalika.html`**: HTML template for About Kalika page.
                - **`aboutKalika.ts`**: TypeScript file for About Kalika page logic.
                - **`AboutKalika.vue`**: Vue component file for About Kalika page.
            - **`Login/`**
                - **`login.html`**: HTML template for Login page.
                - **`login.ts`**: TypeScript file for Login page logic.
                - **`Login.vue`**: Vue component file for Login page.
- **`models/`**: TypeScript interfaces or classes defining data models.
    - **`blog.ts`**
    - **`contact.ts`**
    - **`login.ts`**
    - **`newsletterSubscriber.ts`**
- **`router/`**
    - **`index.ts`**: Vue Router configuration and route definitions.
- **`services/`**
    - **`api/`**: Service files for API interactions.
        - **`blog.ts`**
        - **`contact.ts`**
        - **`login.ts`**
        - **`newsletterSubscribe.ts`**
    - **`instance/`**
        - **`admin/`**
            - **`axiosAdmin.ts`**: Axios instance for admin-related API calls.
        - **`public/`**
            - **`axiosPublic.ts`**: Axios instance for public-related API calls.
- **`shared/`**: Shared utilities and constants.
    - **`components/`**: Shared components.
        - **`Hero/`**
            - **`hero.html`**: HTML template for shared Hero component.
            - **`hero.ts`**: TypeScript file for shared Hero logic.
            - **`Hero.vue`**: Vue component file for shared Hero.
    - **`global-const/`**
        - **`global.const.ts`**: Global constants used throughout the application.
- **`stores/`**: Vuex store modules for state management.
    - **`counter.ts`**: Example store module for managing a counter state.
- **`App.vue`**: Root Vue component.
- **`main.ts`**: Main entry point for the application, setting up Vue instance and mounting the app.

### Configuration Files

- **`.eslintrc.cjs`**: ESLint configuration for JavaScript/TypeScript code linting.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`.prettierrc.json`**: Prettier configuration for code formatting.
- **`env.d.ts`**: TypeScript declaration file for environment variables.
- **`index.html`**: Main HTML file for the application.
- **`package.json`**: Lists project dependencies, scripts, and metadata.
- **`package-lock.json`**: Locks the versions of npm dependencies.
- **`postcss.config.js`**: PostCSS configuration file for CSS processing.
- **`README.md`**: Project documentation and information.
- **`tailwind.config.js`**: Configuration file for Tailwind CSS.
- **`tsconfig.app.json`**: TypeScript configuration for the application code.
- **`tsconfig.json`**: General TypeScript configuration file.
- **`tsconfig.node.json`**: TypeScript configuration for Node.js code.
- **`vite.config.ts`**: Configuration file for Vite, the build tool.

## Best Practices

- **Component Organization**: Organize components and related files by feature to maintain a clear structure.
- **TypeScript**: Utilize TypeScript for type safety and better tooling. Define interfaces and types in the `models`
  directory.
- **State Management**: Use Vuex for state management, and organize store modules by feature.
- **Routing**: Centralize routing configuration in the `router` directory for easier management.
- **API Services**: Manage API interactions in the `services` directory, separating concerns for different contexts.