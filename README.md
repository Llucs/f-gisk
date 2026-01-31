# F-Gisk

**F-Gisk** is a free and open-source community repository for Magisk modules, focused on standardization, automation, and long-term maintainability.

The project addresses common issues in the Magisk ecosystem, including scattered modules, broken links, outdated versions, and unreliable update mechanisms. It provides a unified platform where developers can host their modules and users can confidently download the latest versions.

---

## Features

- Automated module updates via GitHub Actions
- Standardized metadata using `module.prop`
- Mandatory remote update system using `update.json`
- Fully open-source and community-driven
- No central backend; powered by GitHub Pages
- Public API for external tools and integrations

---

## For Users

Using F-Gisk is straightforward:

1. Browse the list of available modules.
2. Select a module.
3. Download the latest version.
4. Install it via Magisk.

All modules on F-Gisk are automatically monitored and kept up to date.

---

## For Developers

Publishing modules on F-Gisk is simple.

### Requirements

To be accepted, a module must:

- Be hosted in a public GitHub repository
- Include a valid `module.prop` file
- Provide a remote update file named `update.json`

### Required Files

#### module.prop

```properties
id=example
name=Example Module
version=1.0
versionCode=1
author=Developer
description=Short description of the module
```

#### update.json

```json
{
  "repo": "https://github.com/user/example-module",
  "zip": "https://github.com/user/example-module/releases/latest/download/example.zip",
  "changelog": "Initial release"
}
```

### Submission Process

1. Use the F-Gisk module generator to create a ready-to-use folder structure.
2. Prepare your module according to the requirements.
3. Submit a Pull Request to the F-Gisk repository.
4. The automated system validates the submission.
5. If approved, the module becomes publicly available.

---

## Automation System

F-Gisk uses GitHub Actions to:

- Periodically check all registered modules
- Compare local and remote versions
- Automatically update module files when new releases are detected
- Regenerate the public API index

This ensures that every module listed on F-Gisk always points to the latest available version.

---

## Philosophy

F-Gisk is guided by three core principles:

- **Transparency**: All modules and the underlying systems are fully open-source.
- **Automation**: Updates and maintenance minimize reliance on manual intervention.
- **Standardization**: Every module adheres to the same structure and rules.

The ultimate goal is to build a reliable, sustainable ecosystem for Magisk modules.

---

## License

This project is released under the [MIT License](https://github.com/Llucs/f-gisk/blob/main/LICENSE).

Developers are free to use, modify, and distribute F-Gisk, provided proper credit is given.