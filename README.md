# 💪 Storybook on Steroids

[![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg)](https://github.com/emersion/stability-badges#experimental) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

A plug-and-play Storybook template for React-based styled-guide driven development.

**Overview**:

* *Helpful links*
* *Getting Started*
* *Terminology*
* *Tooling*
  
## Helpful links

* [Storybook](https://storybook.js.org/)
* [Styleguide Guide Driven Development](http://styleguidedrivendevelopment.net/) by [Bitovi](https://www.bitovi.com)
* [Atomic Design](https://shop.bradfrost.com/) by [Brad Frost](http://bradfrost.com/)
* [Creating a Monorepo with Lerna & Yarn Workspaces](https://medium.com/hy-vee-engineering/creating-a-monorepo-with-lerna-yarn-workspaces-cf163908965d) by [Lee Robinson](https://github.com/leerob) 

## Getting Started

Can be used out-of-the-box [as a monorepo set-up](https://en.wikipedia.org/wiki/Monorepo) or as an independant repository.

**Overview**:

* *Independant Repository*
* *Monorepo*

#### Independant Repository

Simply extract (copy somewhere else) the `packages/ui-patterns` folder out of the repo and replace `package.json` with `package.independant.json`. Install all dependancies with `yarn` and run `yarn start` from the root of this extracted folder.

If you want to swap out Yarn for NPM (since you no longer need workspaces you can simply delete the `yarn.lock` file and run `npm install`, followed by `npm start`).

#### Monorepo

This repository is already configured as a monorepo. This means that you simply need to run `yarn` to install dependancies, followed by `yarn start:ui-patterns` and you're ready to go!

There is a placeholder `webapp` folder that contains a boilerplate instance of [React Create App](https://facebook.github.io/create-react-app/) that will serve as the production logic for your webapp (in which the UI patterns will be imported), however you are more than welcome to completely delete this folder and rename it something else, or swap it out with an instance of [Gatsby](https://www.gatsbyjs.org/), *et al*.

## Terminology

...

**Overview**:

* *Components*
  * *Views*
  * *Structures*
  * *Elements*
  * *Tokens*
* *Data*
  * *Models*
  * *Utilities*

### Components

...

#### Views

...

#### Structures

...

#### Elements

...

#### Tokens

...

### Data
