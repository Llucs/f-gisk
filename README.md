# F-Gisk

**F-Gisk** is a free and open-source community repository for Magisk modules, focused on standardization, automation, and long-term maintainability.

The project aims to solve common problems in the Magisk ecosystem, such as scattered modules, broken links, outdated versions, and lack of reliable update systems.

F-Gisk provides a unified platform where developers can host their modules and users can always download the latest version with confidence.

---

## Features

- Automated module updates via GitHub Actions  
- Standardized metadata using `module.prop`  
- Mandatory remote update system using `update.json`  
- Fully open-source and community-driven  
- No central backend, powered by GitHub Pages  
- Public API for external tools and integrations  

---

## For Users

Using F-Gisk is simple:

1. Browse the list of available modules.
2. Select a module.
3. Download the latest version.
4. Install it using Magisk.

All modules available on F-Gisk are automatically monitored and kept up to date.

---

## For Developers

Developers can easily publish their modules on F-Gisk.

### Requirements

To be accepted, a module must:

- Be hosted in a public GitHub repository.
- Contain a valid `module.prop` file.
- Provide a remote update file `update.json`.

### Required Files

#### module.prop
```ini
id=example
name=Example Module
version=1.0
versionCode=1
author=Developer
description=Short description of the module```

#### update.json
```ini

{
  "repo": "https://github.com/user/example-module",
  "zip": "https://github.com/user/example-module/releases/latest/download/example.zip",
  "changelog": "Initial release"
}```

Submission Process

1. Use the F-Gisk module generator.


2. A ready-to-use folder structure will be created.


3. Submit a Pull Request to the F-Gisk repository.


4. The automated system validates the module.


5. If approved, the module becomes publicly available.




---

Automation System

F-Gisk uses GitHub Actions to:

Periodically check all registered modules.

Compare local and remote versions.

Automatically update module files when new releases are detected.

Regenerate the public API index.


This ensures that all modules listed on F-Gisk always reflect their latest available versions.


---

Philosophy

F-Gisk is built around three core principles:

Transparency: all modules and systems are open-source.

Automation: updates and maintenance should not depend on manual work.

Standardization: every module follows the same structure and rules.


The goal is to create a reliable and sustainable ecosystem for Magisk modules.


---

License

This project is released under the MIT License.

Developers are free to use, modify, and distribute F-Gisk, as long as proper credit is given.