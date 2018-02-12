[![Travis Build Status](https://img.shields.io/travis/rust-lang/rust.svg?style=flat-square)](https://travis-ci.org/fabric8-ui/fabric8-ux)
[![License](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://opensource.org/licenses/Apache-2.0)

[![Platform Designs](https://img.shields.io/website-up-down-green-red/http/shields.io.svg?label=Designs:Platform&style=flat-square)](https://fabric8-ui.github.io/fabric8-ux/designs/platform)
[![Planner Designs](https://img.shields.io/website-up-down-green-red/http/shields.io.svg?label=Designs:Planner&style=flat-square)](https://fabric8-ui.github.io/fabric8-ux/designs/planner)

# User Experience Repo

Design Stories, Documents and UX Mockups related to the [fabric8-ui](https://github.com/fabric8-ui/fabric8-ui) and [fabric8-planner](https://github.com/fabric8-ui/fabric8-planner) repositories.

All information is tracked by the User Experience Design Team.

## Important Links and References
- Design Links
    - [Platform](https://fabric8-ui.github.io/fabric8-ux/src/docs/designs/platform)
    - [Planner](https://fabric8-ui.github.io/fabric8-ux/src/docs/designs/planner)
    - [Bayesian](https://fabric8-ui.github.io/fabric8-ux/src/docs/designs/bayesian)
    - [Hypothesis Engine](https://fabric8-ui.github.io/fabric8-ux/src/docs/designs/hypothesis)
    - [fabric8 Patterns](https://fabric8-ui.github.io/fabric8-ux/src/docs/designs/patterns)
    - [Archived Designs](https://fabric8-ui.github.io/fabric8-ux/src/docs/designs/archives)
- [Information Architecture](https://github.com/fabric8-ui/fabric8-ux/blob/master/src/docs/resources/ia.md)
- [HTML/CSS Code Guidelines](https://github.com/fabric8-ui/fabric8-ux/blob/master/code-guidelines.md)

----

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


----


##### resources
* [PatternFly](https://www.patternfly.org)
* [Bootstrap](https://getbootstrap.com)
* [Travis](https://travis-ci.org/)
* [Shields.io](https://shields.io/)
