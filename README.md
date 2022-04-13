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
```
git clone https://github.com/bahmni/bahmni-lab-frontend.git
```

2. Install dependencies in the root directory of the repo.
```
yarn install
```

3. Add required OpenMRS apps in [spa-build-config](./config/spa-build-config.json) with the specific version. 

4. Builds the OpenMRS appshell, assembles the built OpenMRS modules and combines Bahmni Lab application and assembled OpenMRS modules   
``` 
yarn build:appshell
```

5. Assembles the OpenMRS modules and combines Bahmni Lab application and assembled OpenMRS modules
```
yarn build:assemble
```

6. Build the dist folder
```
yarn build
```

7. Copy OpenMRS modules to dist
```
yarn build:dist
```

### Setup for local development

1. Execute the below command to bring up the application in port 8200.
```sh
yarn bahmni 
```

> Note :
> - To use additional OpenMRS micro-frontends, add them in  [dev-importmap](./config/dev-importmap.json) pointing to the [CDN](https://spa-modules.nyc3.digitaloceanspaces.com/import-map.json).
> - Make sure --config-url points to the port where served files reside.
> - The --backend points to OpenMRS

2. To add custom OpenMRS apps to the application
 - Add folder containing build files of the custom OpenMRS application to **omrs-apps**. Ensure that the folder name follows the convention - openmrs-esm-*app name*-*version number*
 - Check-in the **omrs-apps** folder to repo until the PR gets merged in OpenMRS.
 - Update [dev-importmap](./config/dev-importmap.json) to point to locally served omrs-apps/openmrs-esm-*app name*-*version number*/openmrs-esm-*app name*.js
 - Update the workflow to copy **omrs-apps** to **dist** folder after `yarn build:dist` command.
 ```
 run: cp -R omrs-apps/ dist/
 ```
 - Delete the above command from workflow and checked-in **omrs-apps** folders once the PR is merged in OpenMRS.


## Docker Images
---

 * Latest image of Bahmni Lab Entry can be pulled from [here](https://hub.docker.com/r/bahmni/bahmni-lab).  
