# MetaChess
A Play2Earn + Donate DApp. <br>
This was submitted for ETH Shangai Hackhathon. 

MetaChess is a DApp built with TypeScript, React and Solidity. <br>
It enables users to enjoy a chess game whilst promoting a positive social impact project on the blockchain.
* The MetaChess DApp spins up an instance where 2 players must pay a challenge fee (contribute to a pot) to play.
* A smart contract acts as an escrow/proctor and monitors the game.
* When the game ends, the smart contract awards the winner 90% of the total pot amount. 
* It also sends a donation fee (10% of the total pot amount) to the charity's address.

<a href="https://2xplay-01ebf0.webflow.io" target="_blank"><strong>>> LIVE INTRO WEB APP</strong></a>
<br>
<a href="https://metachess.netlify.app/#/swap?chain=polygon_mumbai" target="_blank"><strong>>> LIVE DAPP</strong></a>
<br>
<a href="https://mumbai.polygonscan.com/address/0xd7641a65ac635acc75ac9dc071b02b6f2b6f522d#code" target="_blank"><strong>>> SMART CONTRACTS - POLYGONSCAN (MUMBAI TESTNET)</strong></a>
<br>

<a href="https://vimeo.com/715516668" target="_blank"><strong>>> HOW TO USE: VIDEO-DEMO</strong></a>
<br>
[![Watch the video](https://storage.googleapis.com/bisiweb.appspot.com/videoNail.PNG)](https://vimeo.com/715516668)
<br>

<a href="https://github.com/bisi-dev/metachess" target="_blank"><strong>>> DAPP BRANCH</strong></a>

· <a href="#how-to-start-dev">How to Start DEV</a>· <a href="#contracts">Contracts</a>· <a href="#feedback">Feedback</a>· <a href="#references">References</a>

---

## How to Start DEV


Pre-Requisites: Node JS, NPM, NVM

After Forking/Cloning the chess-engine branch, you can get up and running in just a few minutes. From the project's root folder:


1. **Install all required packages.**

   ```
   npm install
   ```

2. **Start the site.**

   ```
   npm start
   ```
   
   P.S, If on Windows OS:
   
   
   ```
   npm run start-windows
   ```

3. **Voila! View app in any browser at http://localhost:3000/**

NOTE: To interact/work directly with the DApp, please switch to the main branch for more details <a href="https://github.com/bisi-dev/metachess" target="_blank"><strong>main</strong></a>

## Contracts

The smart contracts are included in this branch. To work with:


1. **Create a Polygon Mumbai Wallet Address and add some funds to your address.**

   <a href="https://faucet.matic.network/" target="_blank"><strong>>> POLYGON MUMBAI FAUCET</strong></a>
   <br>
   Select Mumbai -> Paste wallet address -> Submit

2. **Create a project/app on Infura**

   <a href="https://infura.io/" target="_blank"><strong>>> INFURA</strong></a>   

3. **Edit the .env file and set your mnemonic and Infura ID.**
   
   ```
   MNEMONIC= <12 secret words here>
   PROJECT_ID= <Infura Polygon Project ID>
   ```
   
4. **Compile Contracts**
   
   ```
   truffle compile
   ```
   
7. **Deploy Contracts**
   
   ```
   truffle migrate --network matic
   ```
   
9. **Copy your contract address and view on PolygonScan (Mumbai TestNet)**

   ```
   https://mumbai.polygonscan.com/address/ + {contract address}
   ```

---
## Feedback

I always appreciate feedback, so share your thoughts and suggestions with me: [mail@bisi.dev](mailto:yinka.olabisi@yahoo.com)

If you find any bugs or have feature suggestions, create a new issue or pull request 🙏

Thanks a lot! 💪

Ayodeji Olabisi – [bisi.dev](https://bisi.dev)

---

## References

These are my references in scaffolding this app

* Smart Contracts : Truffle-Suite
* Host : Infura
* Environment : Polygon Mumbai
* INTRO WebApp : UNISWAP Landing Page
* DApp : UNISWAP App Utilitiy
* Chess Engine : JSVeron Chess Engine


## Contributors

* Design - Miracle Otugo
<!--
<a href="#sections">Sections</a> · <a href="#features">Features</a> · <a href="#how-to-start">How to Start</a> · <a href="#edit-content">Edit Content</a> · <a href="#edit-theme">Edit Theme</a> · <a href="#edit-page-structure">Edit Page Structure</a> · <a href="#feedback">Feedback</a>
**New Features:** 🌛 Dark Mode · 🪟 Splash Screen · 🍪 Cookie Consent Bar
<img src="screenshot.png" alt="Image" width="600" />
## Sections

The starter has predefined sections as well as a template that you can use to create new, custom sections.

**The predefined sections are:**

1. About me
2. Interests/Skills
3. Projects
4. Contact me
5. Medium articles

---

## Features

#### 🍪 [NEW] Cookie Consent Bar - Be ready for GDPR-compliant tracking.

Add tracking services like Google Analytics to your site and display a GDPR-compliant cookie consent banner.

#### 🌛 [NEW] Dark Mode - Based on user's preferences.

If the user's OS is set to using dark mode, the Gatsby Starter will automatically switch to a dark theme too.

#### 🕹️ Quick and Easy Setup - Add content and deloy.

Just install the starter, add your content, and deploy it! This starter works seamlessly with hosts like Netlify.

#### 📓 Content Integration via MDX - No external CMS needed.

MDX is a Markdown format that allows you to enrich your content with React components. This makes it fully customizable without external dependencies.

#### 🧰 Extendable Layout - Add more sections as you like.

The starter includes predefined sections as well as a template for new, custom sections. Moreover, you can add new projects to the project section without additional coding.

#### 💅 Responsive Design - With freshening animations.

The starter is designed with a mobile-first approach and looks perfect on small and large breakpoints. Moreover, it has some nice and smooth animations.

#### <img src="http://logok.org/wp-content/uploads/2015/10/Medium-logo-old.png" alt="Medium Icon" width="20" /> Medium Integration - Features latest articles.

In case you are a writer on Medium, the starter has a easy to use Medium integration that allows you to feature your latest articles.

To see all features in action, have a look at the <a href="https://gatsby-starter-portfolio-minimal.netlify.app/" target="_blank"><strong>live demo</strong></a>.

## Edit Content

After you installed the starter project, you most likely want to add your own content.

### Edit configuration

First, you want to edit the config file which stores the site's configuration (e.g. title, description) and social profiles.

```
|-- config
    |-- index.js
```

Navigate to the `index.js` file in the config folder, edit the configuration, save it, that's it!

### Edit page content

Next, you can edit the content for each section you want to be displayed. By default, all sections are shown. If you want to remove certain sections from the site, check out <a href="#editing-page-structure">this part of the Readme</a>.

```
|-- content
    |-- imprint
    |-- index
       |-- about
       |-- contact
       ...
    ...
```

You find all content in the content folder (surprisingly). For content integration, the project uses MDX, a Markdown format. If you haven't worked with Markdown or MDX before, check the Markdown syntax in <a href="https://www.gatsbyjs.org/docs/mdx/markdown-syntax/" target="_blank">Gatsby's docs</a>. They also provide <a href="https://www.gatsbyjs.org/docs/mdx/writing-pages/" target="_blank">further information about MDX</a>.

To get up and running, just edit the predefined data fields in each `mdx` file.

---

## Edit Theme

You find the color and font settings in the configuration file, located at: `config/index.js`.

> Note: The usage of the splash screen can be set for each page individually in the page content directory.

---

## Edit Page Structure

To remove or reorder predefined sections, navigate to the `src/pages/index.js` file. This is the home page of your site.

Each section (besides the Articles section) exists of an imported React component and a GraphQL query that is needed for data querying.

**If you want to remove a section**, just delete the imported React component and query.

**If you want to reorder your sections**, just reorder the React components inside the `<Layout />` component.

### Add custom sections

If you want to add your own custom sections, there is a section template you can use. You can find it in the following directory: `src/components/templates`

---



Truffle is a development environment, testing framework and asset pipeline for Ethereum, aiming to make life as an Ethereum developer easier. With Truffle, you get:

* Built-in smart contract compilation, linking, deployment and binary management.
* Automated contract testing with Mocha and Chai.
* Configurable build pipeline with support for custom build processes.
* Scriptable deployment & migrations framework.
* Network management for deploying to many public & private networks.
* Interactive console for direct contract communication.
* Instant rebuilding of assets during development.
* External script runner that executes scripts within a Truffle environment.

| ℹ️ **Contributors**: Please see the [Development](#development) section of this README. |
| --- |

### Install

```
$ npm install -g truffle
```

*Note: To avoid any strange permissions errors, we recommend using [nvm](https://github.com/nvm-sh/nvm).*

### Quick Usage

For a default set of contracts and tests, run the following within an empty project directory:

```
$ truffle init
```

From there, you can run `truffle compile`, `truffle migrate` and `truffle test` to compile your contracts, deploy those contracts to the network, and run their associated unit tests.

Truffle comes bundled with a local development blockchain server that launches automatically when you invoke the commands  above. If you'd like to [configure a more advanced development environment](https://trufflesuite.com/docs/advanced/configuration) we recommend you install the blockchain server separately by running `npm install -g ganache-cli` at the command line.

+  [ganache](https://github.com/trufflesuite/ganache): a command-line version of Truffle's blockchain server.
+  [ganache-ui](https://github.com/trufflesuite/ganache-ui): A GUI for the server that displays your transaction history and chain state.


### Documentation

Please see the [Official Truffle Documentation](https://trufflesuite.com/docs/) for guides, tips, and examples.

### Development

We welcome pull requests. To get started, just fork this repo, clone it locally, and run:

```shell
# Install
npm install -g yarn
yarn bootstrap

# Test
yarn test

# Adding dependencies to a package
cd packages/<truffle-package>
yarn add <npm-package> [--dev] # Use yarn
```

If you'd like to update a dependency to the same version across all packages, you might find [this utility](https://www.npmjs.com/package/lerna-update-wizard) helpful.

*Notes on project branches:*
+    `master`: Stable, released version (v5)
+    `beta`: Released beta version
+    `develop`: Work targeting stable release (v5)
+    `next`: Not currently in use

Please make pull requests against `develop`.

There is a bit more information in the [CONTRIBUTING.md](./CONTRIBUTING.md) file.

### License

MIT
-->
