[![Build Status](https://travis-ci.org/fabric8io/fabric8-ux.svg?branch=master)](https://travis-ci.org/fabric8io/fabric8-ux) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# User Experience Repo

This repo is for user experience issues related to the planner and platform.

All information is tracked by the User Experience Design Team.

This open format enables community members and team members to easily access design documentation and assets.

## Local Development
You can run this site locally using npm, gulp and jekyll. 

1. Verify that you have the following installed:
    - Node
    - Gulp
    - Jekyll
2. run `npm install`
3. run `gulp`
    - this will copy the files from your npm_modules directory to their respective locations for the jekyll build process
4. run `jekyll build`

#### for viewing locally at http://localhost:4000

5. run `jekyll serve`

### Troubleshooting
If you are having issues with the site, you can run two sets of clean commands:

- `gulp cleanVendors`
    - This will remove the vendor files that were copied over during the `gulp` process
- `gulp cleanModules`
    - This will clean out your node_modules directory and rerun `npm install` and `gulp`