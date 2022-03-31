# Bahmni Lab Entry App

Bahmni Lab Entry Micro Frontend build using OMRS 3.x
## Badges
---

[Bahmni Lab Entry GHA](https://github.com/Bahmni/bahmni-lab-frontend/actions)

[![Build and Publish](https://github.com/Bahmni/bahmni-lab-frontend/actions/workflows/build_publish.yml/badge.svg?branch=main)](https://github.com/Bahmni/bahmni-lab-frontend/actions/workflows/build_publish.yml) ![Badges](badges/badge-branches.svg) ![Badges](badges/badge-functions.svg) ![Badges](badges/badge-lines.svg)

## Overview
---

### Built With

* [React](https://reactjs.org/) ([TypeScript](https://www.typescriptlang.org)) - Front-end JS library
* [Jest](https://jestjs.io/) - JS testing framework
* [React Testing Library](https://testing-library.com/) - JS testing library for React components
* [yarn](https://yarnpkg.com/) - Yarn package manager
* [webpack](https://webpack.js.org/) - JS module bundler
* [ESLint](https://eslint.org/) - JS linter
* [Prettier](https://prettier.io/) - Code formatter
* [Babel](https://babeljs.io/) - JS compiler
* [Github Actions](https://travis-ci.org/) - CI service

## Installation
---

### Prerequisites

* [Node](https://nodejs.org/en/download/)
* [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
* [Git](https://git-scm.com/downloads)

### Setup

1. Clone the [bahmni-lab-frontend](https://github.com/bahmni/bahmni-lab-frontend) repo.

```sh
git clone https://github.com/bahmni/bahmni-lab-frontend.git
```

2. Install dependencies in the root directory of the repo.
```sh
yarn install
```
3. Build the openmrs appshell with required [configurations](./config/config.json) at [omrs-app-shell](./omrs-app-shell) directory.
```sh 
yarn omrs:appshell
```

4. Assemble the earlier built openmrs modules with the following [spa build configurations](./config/spa-build-config.json).
```sh
yarn omrs:assemble
```

5. Combine Bahmni Lab application and assembled openmrs modules.
```sh
yarn importmap
```

6. Build the dist folder
```sh
yarn build
```

## Docker Images
---

 * Latest image of Bahmni Lab Entry can be pulled from [here](https://hub.docker.com/r/bahmni/bahmni-lab).  
