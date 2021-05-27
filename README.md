<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="RG Logo" src="./src/icons/rg-logo.png" width="60" />
  </a>
</p>
<h1 align="center">
  Reggie Galang Portfolio<br/>
  using <a href="http://gatsbyjs.org">GatsbyJS's</a> default starter
</h1>

## Troubleshooting

1.  Images not loading properly once deployed to github pages 

    - Due to Gatsby-Image plugin "bug"
    - images are not properly linked during build/deploy
    - run 'npm run clean' or 'gatsby clean' THEN deploy 


## 🚀 Quick start

1.  **npm install**

    Download package then run npm install to install dependencies.

    ```sh
    npm install
    ```

2.  **Run Gatsby Portfolio Site**

    Make sure gatsby-cli is installed

    ```sh
    npm install -g gatsby-cli
    ```

    Inside folder, load site in local default browser by typing:

    ```sh
    gatsby develop
    ```

3.  **Build Gatsby Portfolio Site**

    Inside folder, build site as public/ folder to be deployed to client site via FTP (as long public === root of domain)

    ```sh
    gatsby build
    ```

4.  **Build and Deploy to GitHub**

    `gh-pages` devDependency will be used to deploy to your GitHub repo as a gh-pages branch.

    This requires that you stop local server and run the following:

    ```sh
    npm run deploy
    ```

    Portfolio site will be built as `public/` folder then automatically pushed to your GitHub repo.

    _Note: make sure repo settings is configured properly_

    `Under Settings > GitHub Pages > Source`

    Make sure Source points to `gh-pages branch`
