---
layout: default
title: Fabric8 UXD
---
<div class="container-fluid">
  <div class="col-md-6">
    <h2>
      Local Development
    </h2>
    <p>
      You can run this site locally using npm, gulp and jekyll. 
    </p>
    <h3>
      First Time Build
    </h3>
    <ul>
      <li>
        Verify that you have the following installed:
          <ul>
            <li>
              Node
            </li>
            <li>
              Gulp
            </li>
            <li>
              Jekyll
            </li>
          </ul>
        </li>
        <li>
          run <code>npm install</code>
        </li>
        <li>
          run <code>gulp</code>
          <ul>
            <li>
              this will copy the files from your npm_modules directory to their respective locations for the jekyll build process
            </li>
          </ul>
        </li>
        <li>
          run <code>jekyll build</code>
        </li>
        <li>
          run <code>jekyll serve</code>
            <ul>
              <li>
                for viewing locally at http://localhost:4000
              </li>
            </ul>
          </li>
      </ul>
      <h3>
        Subsequent Builds
      </h3>
      <ul>
        <li>
          Run the npm command <code>npm run site</code>
        </li>
      </ul>
      <h3>
        Troubleshooting
      </h3>
      <p>
        If you are having issues with the site building, you can run two sets of clean commands:
        <ul>
          <li>
            <code>gulp cleanVendors</code>
            <ul>
              <li>
                This will remove the vendor files that were copied over during the <code>gulp</code> process.
              </li>
            </ul>
          </li>
          <li>
            <code>npm run clean</code>
            <ul>
              <li>
                This will remove your node_modules directory, run <code>npm install</code>, run <code>gulp cleanVendors</code> to remove any old vendor files, and run <code>gulp</code> to copy updated vendor files.
              </li>
            </ul>
          </li>
        </ul>
      </p>
      <p>
        If you have issues with your gem bundles, you can run the following command:
        <ul>
          <li>
            <code>npm run bundle</code>
            <ul>
              <li>
                This will update the gem bundles. If you do not have node installed, just run <code>bundle update</code>.
              </li>
            </ul>
          </li>
        </ul>
      </p>
  </div>

  <div class="col-md-6">
    <div class="container-fluid container-cards-pf">
      <div class="row row-cards-pf">
        <div class="">
          <div class="card-pf card-pf-view">
            <div class="card-pf-body">
              <div class="card-pf-top-element">
                <span class="fa fa-github card-pf-icon-circle"></span>
              </div>
              <h2 class="card-pf-title text-center">
                Fabric8-UX
              </h2>
              <p class="card-pf-info text-center">
                This repo is for user experience issues related to the planner and platform UIs.
              </p>
              <p class="card-pf-info text-center">
                All information is tracked by the User Experience Design Team.
              </p>
              <div class="card-pf-items text-center">
                <div class="card-pf-item">
                  <a class="github-button" href="https://github.com/ntkme/github-buttons/subscription" data-icon="octicon-eye" data-style="mega" aria-label="Watch ntkme/github-buttons on GitHub">Watch</a>
                </div>
                <div class="card-pf-item">
                  <a class="github-button" href="https://github.com/ntkme/github-buttons" data-icon="octicon-star" data-style="mega" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                </div>
              </div>
            </div>
            <div class="card-pf-view-checkbox">
              <input type="checkbox">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>