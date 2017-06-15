[![Build Status](https://travis-ci.org/fabric8io/fabric8-ux.svg?branch=master)](https://travis-ci.org/fabric8io/fabric8-ux)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![codebeat badge](https://codebeat.co/badges/0ca8937c-4201-4d2e-a0b3-9f7d77284838)](https://codebeat.co/projects/github-com-fabric8io-fabric8-ux-master)

[![Current Sprint Stories](https://badge.waffle.io/fabric8io/fabric8-ux.svg?label=story&title=Story%20Pointed)](http://waffle.io/fabric8io/fabric8-ux)

# User Experience Repo

Design Issues, Documents and UX Mockups related to the [fabric8-ui](https://github.com/fabric8io/fabric8-ui) and [fabric8-planner](https://github.com/fabric8io/fabric8-planner) repositories.

All information is tracked by the User Experience Design Team.

## Important Links and References
- [Design Links](https://github.com/fabric8io/fabric8-ux/blob/master/invision-links.md)
- [Information Architecture](https://github.com/fabric8io/fabric8-ux/blob/master/ia.md)
- [HTML/CSS Code Guidelines](https://github.com/fabric8io/fabric8-ux/blob/master/code-guidelines.md)

## Local Development
Want to submit a PR to our site? Run the environment locally using the steps below:

### First Time Build
1. Verify that you have the following installed:
    - Node
    - Gulp
    - Gem
    - Jekyll
2. run `gem install bundler`
3. run `npm install`
4. run `gulp`
    - this will copy the files from your 
    npm_modules directory to their respective 
    locations for the jekyll build process
5. run `jekyll build`
6. run `jekyll serve`
    - for viewing locally at http://localhost:4000

### Subsequent Builds
1. Run the npm command `npm run site`

### Troubleshooting
If you are having issues with the site building, you can run two sets of clean commands:

- `gulp cleanVendors`
    - This will remove the vendor files that were copied over during the `gulp` process
- `npm run clean`
    - This will remove your node_modules directory, run `npm install`, run `gulp cleanVendors` to remove any old vendor files, and run `gulp` to copy updated vendor files.

If you have issues with your gem bundles, you can run the following command:
- `npm run bundle`
    - This will update the gem bundles. If you do not have node installed, just run `bundle update`.
