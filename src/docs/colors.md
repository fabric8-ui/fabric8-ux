---
layout: default
title: Color Palette
navbar_active: colors
relative_path: ../../
---

# Color Palette - Based Off Of PatternFly
----
<style>
  .palette-table {
      border-spacing: 0px;
      padding: 0px;
      height: 100%;
      width: 100%;
  }

  .palette-table td {
      padding:0px;
  }

  .primary-box {
      height:21em;
  }
  .primary-palette-item {
      text-align: center;
      vertical-align: bottom;
      padding: 0px;
      line-height: 3em;
      font-weight: normal;
  }
  .primary-palette-item-nine {
      text-align: center;
      vertical-align: bottom;
      padding: 0px;
      line-height: 2.325em;
  }
  .accent-box {
      height:14em;
      margin-bottom: 30px;
  }
  .accent-palette-item {
      text-align: center;
      vertical-align: bottom;
      padding: 0px;
      min-width: 75px;
      line-height: 2em;
      font-weight: normal;
  }
  .accent-palette-item-five {
      text-align: center;
      padding: 0px;
      line-height: 3em;
  }
  .palette-box {
      margin-left: 30px;
      margin-right: 30px;
  }

  .alerts-box {
      height:3em;
      margin-bottom: 30px;
  }

  .design-element-item {
      text-align: center;
      padding: 0px;
      height: 3em;
      line-height: 3em;
  }

  <!-- New Styles -->

  .primary-color-swatches {
      margin: 0px;
      overflow: hidden;
  }

  .primary-color-swatch {
    height: 30px;
    margin: 0;
  }

  .important-color-swatches {
      margin: 0px;
      overflow: hidden;
  }

  .important-color-swatch {
      float: left;
      width: 14px;
      height: 14px;
      margin-right: 1px;
      margin-top: 1px;
  }

  .color-pf-black-100 {
  background-color: #fafafa;
  }
  .color-pf-black-150 {
  background-color: #f5f5f5;
  }
  .color-pf-black-200 {
  background-color: #ededed;
  }
  .color-pf-black-300 {
  background-color: #d1d1d1;
  }
  .color-pf-black-400 {
  background-color: #bbbbbb;
  }
  .color-pf-black-500 {
  background-color: #8b8d8f;
  }
  .color-pf-black-600 {
  background-color: #72767b;
  }
  .color-pf-black-700 {
  background-color: #4d5258;
  }
  .color-pf-black-800 {
  background-color: #393f44;
  }
  .color-pf-black-900 {
  background-color: #292e34;
  }
  .color-pf-black {
  background-color: #030303;
  }
  .color-pf-blue-50 {
  background-color: #def3ff;
  }
  .color-pf-blue-100 {
  background-color: #bee1f4;
  }
  .color-pf-blue-200 {
  background-color: #7dc3e8;
  }
  .color-pf-blue-300 {
  background-color: #39a5dc;
  }
  .color-pf-blue-400 {
  background-color: #0088ce;
  }
  .color-pf-blue-500 {
  background-color: #00659c;
  }
  .color-pf-blue-600 {
  background-color: #004368;
  }
  .color-pf-blue-700 {
  background-color: #002235;
  }
  .color-pf-cyan-100 {
  background-color: #bedee1;
  }
  .color-pf-cyan-200 {
  background-color: #7dbdc3;
  }
  .color-pf-cyan-300 {
  background-color: #3a9ca6;
  }
  .color-pf-cyan-400 {
  background-color: #007a87;
  }
  .color-pf-cyan-500 {
  background-color: #005c66;
  }
  .color-pf-cyan-600 {
  background-color: #003d44;
  }
  .color-pf-cyan-700 {
  background-color: #001f22;
  }
  .color-pf-gold-100 {
  background-color: #fbeabc;
  }
  .color-pf-gold-200 {
  background-color: #f9d67a;
  }
  .color-pf-gold-300 {
  background-color: #f5c12e;
  }
  .color-pf-gold-400 {
  background-color: #f0ab00;
  }
  .color-pf-gold-500 {
  background-color: #b58100;
  }
  .color-pf-gold-600 {
  background-color: #795600;
  }
  .color-pf-gold-700 {
  background-color: #3d2c00;
  }
  .color-pf-green-100 {
  background-color: #cfe7cd;
  }
  .color-pf-green-200 {
  background-color: #9ecf99;
  }
  .color-pf-green-300 {
  background-color: #6ec664;
  }
  .color-pf-green-400 {
  background-color: #3f9c35;
  }
  .color-pf-green-500 {
  background-color: #2d7623;
  }
  .color-pf-green-600 {
  background-color: #1e4f18;
  }
  .color-pf-green-700 {
  background-color: #0f280d;
  }
  .color-pf-light-blue-100 {
  background-color: #beedf9;
  }
  .color-pf-light-blue-200 {
  background-color: #7cdbf3;
  }
  .color-pf-light-blue-300 {
  background-color: #35caed;
  }
  .color-pf-light-blue-400 {
  background-color: #00b9e4;
  }
  .color-pf-light-blue-500 {
  background-color: #008bad;
  }
  .color-pf-light-blue-600 {
  background-color: #005c73;
  }
  .color-pf-light-blue-700 {
  background-color: #002d39;
  }
  .color-pf-light-green-100 {
  background-color: #e4f5bc;
  }
  .color-pf-light-green-200 {
  background-color: #c8eb79;
  }
  .color-pf-light-green-300 {
  background-color: #ace12e;
  }
  .color-pf-light-green-400 {
  background-color: #92d400;
  }
  .color-pf-light-green-500 {
  background-color: #6ca100;
  }
  .color-pf-light-green-600 {
  background-color: #486b00;
  }
  .color-pf-light-green-700 {
  background-color: #253600;
  }
  .color-pf-orange-100 {
  background-color: #fbdebf;
  }
  .color-pf-orange-200 {
  background-color: #f7bd7f;
  }
  .color-pf-orange-300 {
  background-color: #f39d3c;
  }
  .color-pf-orange-400 {
  background-color: #ec7a08;
  }
  .color-pf-orange-500 {
  background-color: #b35c00;
  }
  .color-pf-orange-600 {
  background-color: #773d00;
  }
  .color-pf-orange-700 {
  background-color: #3b1f00;
  }
  .color-pf-purple-100 {
  background-color: #c7bfff;
  }
  .color-pf-purple-200 {
  background-color: #a18fff;
  }
  .color-pf-purple-300 {
  background-color: #8461f7;
  }
  .color-pf-purple-400 {
  background-color: #703fec;
  }
  .color-pf-purple-500 {
  background-color: #582fc0;
  }
  .color-pf-purple-600 {
  background-color: #40199a;
  }
  .color-pf-purple-700 {
  background-color: #1f0066;
  }
  .color-pf-red-100 {
  background-color: #cc0000;
  }
  .color-pf-red-200 {
  background-color: #a30000;
  }
  .color-pf-red-300 {
  background-color: #8b0000;
  }
  .color-pf-red-400 {
  background-color: #470000;
  }
  .color-pf-red-500 {
  background-color: #2c0000;
  }

  .important-box-accordion {
      padding-bottom: 20px;
      margin-bottom: 0;
  }

  .important-box {
    background-color: #f7f7f7;
    margin-top: 20px;
    margin-bottom: 50px;
    padding-top: 5px;
  }

  .important-center-container {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .important-hr {
    background-color: #D5D5D5;
    height: 1px;
    margin-top: 15px;
    margin-bottom: 20px;
  }

  .download-button {
    padding-bottom: 15px;
  }

  .palette-circle-black {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: #030303;
    margin-bottom: 20px;
  }

  .palette-circle-blue {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: #0088ce;
    margin-bottom: 20px;
  }

  .palette-circle-black p {
    text-align: center;
    font-weight: 700;
    color: #ffffff;
    position: relative;
    top: 100px;
    font-size: 13px;
  }

  .palette-circle-blue p {
    text-align: center;
    font-weight: 700;
    color: #ffffff;
    position: relative;
    top: 100px;
    font-size: 13px;
  }

  .primary-text {
    margin-bottom: 25px;
  }

  .primary-color-swatch p {
    position: relative;
    top: 5px;
    font-size: 12px;
    padding-left: 15px;
  }

  .white-text {
    color: #ffffff;
  }   

  .row-gray {
    background: #f8f8f8;
  }

  .white-row {
    background: #ffffff;
    padding-bottom: 40px;
  }

  .secondary-top-block {
    height: 60px;
    margin-top: 30px;
  }

  .secondary-top-block p {
    position: relative;
    top: 10px;
  }

  .red-palette {
    height: 42px;
  }

  .red-palette p {
    position: relative;
    top: 10px;
  }

  .primary-color-swatch-left-spacing-12 {
    margin-left: 12px;
  }

  .primary-color-swatch-left-spacing-18 {
    margin-left: 18px;
  }

  .col-md-offset-12-top-spacer {
    height: 20px;
  }

  .col-md-offset-12-bottom-spacer {
    height: 60px;
  }

  .important-box-row {
    margin-left: 0px;
    margin-right: 0px;
  }

  .primary-container {
    margin-left: 0px;
    margin-right: 0px;
  }

  .primary-color-swatches-margin {
    height: 20px;
  }

  .palette-donut {
    height: 230px;
    width: 230px;
    margin-top: 20px;
  }
</style>
<div class="row">
  <div class="col-md-12 primary-text">
    <h2>Primary Colors</h2>
    <p>The primary colors consist of the following colors and their corresponding shades and tints. When designing and developing, use only the following primary colors for a majority of the product's interface.</p>
  </div>
</div>
<div class="row primary-container">
  <div class="col-lg-3">
    <div class="palette-circle-black">
      <p>pf-black&nbsp;&nbsp;#030303</p>
    </div>
      <p>The majority of a UI will use the grayscale palette for best contrast and visibility
Use for general UI and backgrounds.</p>
      <p><strong>Use for</strong><br />general UI and backgrounds</p>
  </div>
  <div class="col-lg-3">
    <div class="primary-color-swatches">
      <div class="primary-color-swatch color-pf-black-100">
      <p>pf-black-100 <span class="primary-color-swatch-left-spacing-12">#fafafa</span></p></div>
      <div class="primary-color-swatch color-pf-black-150">
      <p>pf-black-150 <span class="primary-color-swatch-left-spacing-12">#f5f5f5</span></p></div>
      <div class="primary-color-swatch color-pf-black-200">
      <p>pf-black-200 <span class="primary-color-swatch-left-spacing-12">#ededed</span></p></div>
      <div class="primary-color-swatch color-pf-black-300">
      <p>pf-black-300 <span class="primary-color-swatch-left-spacing-12">#d1d1d1</span></p></div>
      <div class="primary-color-swatch color-pf-black-400">
      <p>pf-black-400 <span class="primary-color-swatch-left-spacing-12">#bbbbbb</span></p></div>
      <div class="primary-color-swatch color-pf-black-500 white-text">
      <p>pf-black-500 <span class="primary-color-swatch-left-spacing-12">#8b8d8f</span></p></div>
      <div class="primary-color-swatch color-pf-black-600 white-text">
      <p>pf-black-600 <span class="primary-color-swatch-left-spacing-12">#72767b</span></p></div>
      <div class="primary-color-swatch color-pf-black-700 white-text">
      <p>pf-black-700 <span class="primary-color-swatch-left-spacing-12">#4d5258</span></p></div>
      <div class="primary-color-swatch color-pf-black-800 white-text">
      <p>pf-black-800 <span class="primary-color-swatch-left-spacing-12">#393f44</span></p></div>
      <div class="primary-color-swatch color-pf-black-900 white-text">
      <p>pf-black-900 <span class="primary-color-swatch-left-spacing-12">#292e34</span></p></div>
      <div class="primary-color-swatch color-pf-black white-text">
      <p>pf-black <span class="primary-color-swatch-left-spacing-18">#030303</span></p></div>
    </div>
    <div class="primary-color-swatches-margin">
    </div>
  </div>
  <div class="col-lg-3">
    <div class="palette-circle-blue">
      <p>pf-blue&nbsp;&nbsp;#0088ce</p>
    </div>
      <p>Tints and shades of this specific blue are used to guide users to interactive elements and states.</p>
      <p><strong>Use for</strong><br />actions and highlights</p>
  </div>
  <div class="col-lg-3">
    <div class="primary-color-swatches">
      <div class="primary-color-swatch color-pf-blue-50">
      <p>pf-blue-50 <span class="primary-color-swatch-left-spacing-18">#def3ff</span></p></div>
      <div class="primary-color-swatch color-pf-blue-100">
      <p>pf-blue-100 <span class="primary-color-swatch-left-spacing-12">#bee1f4</span></p></div>
      <div class="primary-color-swatch color-pf-blue-200">
      <p>pf-blue-200 <span class="primary-color-swatch-left-spacing-12">#7dc3e8</span></p></div>
      <div class="primary-color-swatch color-pf-blue-300">
      <p>pf-blue-300 <span class="primary-color-swatch-left-spacing-12">#39a5dc</span></p></div>
      <div class="primary-color-swatch color-pf-blue-400 white-text">
      <p>pf-blue-400 <span class="primary-color-swatch-left-spacing-12">#0088ce</span></p></div>
      <div class="primary-color-swatch color-pf-blue-500 white-text">
      <p>pf-blue-500 <span class="primary-color-swatch-left-spacing-12">#00659c</span></p></div>
      <div class="primary-color-swatch color-pf-blue-600 white-text">
      <p>pf-blue-600 <span class="primary-color-swatch-left-spacing-12">#004368</span></p></div>
      <div class="primary-color-swatch color-pf-blue-700 white-text">
      <p>pf-blue-700 <span class="primary-color-swatch-left-spacing-12">#002235</span></p></div>
    </div>
    <div class="primary-color-swatches-margin">
    </div>
  </div>
</div>
</div>
<div class="row row-gray">
  <div class="col-md-12 col-md-offset-12-top-spacer"></div>
</div>
<div class="row row-gray">
<div class="col-md-12">
<h2>Secondary Colors</h2>
  <p>Secondary colors are used as accents, to show emphasis, and to visualize notifications/alerts. Use these sparingly to not distract from the main function of the product.</p>
</div>
</div>
<div class="row row-gray">
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-red-200 white-text">
    <p>pf-red</p></div>
    <div class="primary-color-swatch color-pf-red-100 red-palette white-text">
    <p>pf-red-100 <span class="primary-color-swatch-left-spacing-12">#cc0000</span></p></div>
    <div class="primary-color-swatch color-pf-red-200 red-palette white-text">
    <p>pf-red-200 <span class="primary-color-swatch-left-spacing-12">#a30000</span></p></div>
    <div class="primary-color-swatch color-pf-red-300 red-palette white-text">
    <p>pf-red-300 <span class="primary-color-swatch-left-spacing-12">#8b0000</span></p></div>
    <div class="primary-color-swatch color-pf-red-400 red-palette white-text">
    <p>pf-red-400 <span class="primary-color-swatch-left-spacing-12">#470000</span></p></div>
    <div class="primary-color-swatch color-pf-red-500 red-palette white-text">
    <p>pf-red-500 <span class="primary-color-swatch-left-spacing-12">#2c0000</span></p></div>
  </div>
</div>
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-orange-400 white-text">
    <p>pf-orange</p></div>
    <div class="primary-color-swatch color-pf-orange-100">
    <p>pf-orange-100 <span class="primary-color-swatch-left-spacing-12">#fbdebf</span></p></div>
    <div class="primary-color-swatch color-pf-orange-200">
    <p>pf-orange-200 <span class="primary-color-swatch-left-spacing-12">#f7bd7f</span></p></div>
    <div class="primary-color-swatch color-pf-orange-300">
    <p>pf-orange-300 <span class="primary-color-swatch-left-spacing-12">#f39d3c</span></p></div>
    <div class="primary-color-swatch color-pf-orange-400 white-text">
    <p>pf-orange-400 <span class="primary-color-swatch-left-spacing-12">#ec7a08</span></p></div>
    <div class="primary-color-swatch color-pf-orange-500 white-text">
    <p>pf-orange-500 <span class="primary-color-swatch-left-spacing-12">#b35c00</span></p></div>
    <div class="primary-color-swatch color-pf-orange-600 white-text">
    <p>pf-orange-600 <span class="primary-color-swatch-left-spacing-12">#773d00</span></p></div>
    <div class="primary-color-swatch color-pf-orange-700 white-text">
    <p>pf-orange-700 <span class="primary-color-swatch-left-spacing-12">#3b1f00</span></p></div>
  </div>
</div>
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-gold-400">
    <p>pf-gold</p></div>
    <div class="primary-color-swatch color-pf-gold-100">
    <p>pf-gold-100 <span class="primary-color-swatch-left-spacing-12">#fbeabc</span></p></div>
    <div class="primary-color-swatch color-pf-gold-200">
    <p>pf-gold-200 <span class="primary-color-swatch-left-spacing-12">#f9d67a</span></p></div>
    <div class="primary-color-swatch color-pf-gold-300">
    <p>pf-gold-300 <span class="primary-color-swatch-left-spacing-12">#f5c12e</span></p></div>
    <div class="primary-color-swatch color-pf-gold-400">
    <p>pf-gold-400 <span class="primary-color-swatch-left-spacing-12">#f0ab00</span></p></div>
    <div class="primary-color-swatch color-pf-gold-500 white-text">
    <p>pf-gold-500 <span class="primary-color-swatch-left-spacing-12">#b58100</span></p></div>
    <div class="primary-color-swatch color-pf-gold-600 white-text">
    <p>pf-gold-600 <span class="primary-color-swatch-left-spacing-12">#795600</span></p></div>
    <div class="primary-color-swatch color-pf-gold-700 white-text">
    <p>pf-gold-700 <span class="primary-color-swatch-left-spacing-12">#3d2c00</span></p></div>
  </div>
</div>
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-light-green-400">
    <p>pf-light-green</p></div>
    <div class="primary-color-swatch color-pf-light-green-100">
    <p>pf-light-green-100 <span class="primary-color-swatch-left-spacing-12">#e4f5bc</span></p></div>
    <div class="primary-color-swatch color-pf-light-green-200">
    <p>pf-light-green-200 <span class="primary-color-swatch-left-spacing-12">#c8eb79</span></p></div>
    <div class="primary-color-swatch color-pf-light-green-300">
    <p>pf-light-green-300 <span class="primary-color-swatch-left-spacing-12">#ace12e</span></p></div>
    <div class="primary-color-swatch color-pf-light-green-400">
    <p>pf-light-green-400 <span class="primary-color-swatch-left-spacing-12">#92d400</span></p></div>
    <div class="primary-color-swatch color-pf-light-green-500 white-text">
    <p>pf-light-green-500 <span class="primary-color-swatch-left-spacing-12">#6ca100</span></p></div>
    <div class="primary-color-swatch color-pf-light-green-600 white-text">
    <p>pf-light-green-600 <span class="primary-color-swatch-left-spacing-12">#486b00</span></p></div>
    <div class="primary-color-swatch color-pf-light-green-700 white-text">
    <p>pf-light-green-700 <span class="primary-color-swatch-left-spacing-12">#253600</span></p></div>
  </div>
</div>
</div>
<!--SPLIT -->
<div class="row row-gray">
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-green-400 white-text">
    <p>pf-green</p></div>
    <div class="primary-color-swatch color-pf-green-100">
    <p>pf-green-100 <span class="primary-color-swatch-left-spacing-12">#cfe7cd</span></p></div>
    <div class="primary-color-swatch color-pf-green-200">
    <p>pf-green-200 <span class="primary-color-swatch-left-spacing-12">#9ecf99</span></p></div>
    <div class="primary-color-swatch color-pf-green-300">
    <p>pf-green-300 <span class="primary-color-swatch-left-spacing-12">#6ec664</span></p></div>
    <div class="primary-color-swatch color-pf-green-400 white-text">
    <p>pf-green-400 <span class="primary-color-swatch-left-spacing-12">#3f9c35</span></p></div>
    <div class="primary-color-swatch color-pf-green-500 white-text">
    <p>pf-green-500 <span class="primary-color-swatch-left-spacing-12">#2d7623</span></p></div>
    <div class="primary-color-swatch color-pf-green-600 white-text">
    <p>pf-green-600 <span class="primary-color-swatch-left-spacing-12">#1e4f18</span></p></div>
    <div class="primary-color-swatch color-pf-green-700 white-text">
    <p>pf-green-700 <span class="primary-color-swatch-left-spacing-12">#0f280d</span></p></div>
  </div>
</div>
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-cyan-400 white-text">
    <p>pf-cyan</p></div>
    <div class="primary-color-swatch color-pf-cyan-100">
    <p>pf-cyan-100 <span class="primary-color-swatch-left-spacing-12">#bedee1</span></p></div>
    <div class="primary-color-swatch color-pf-cyan-200">
    <p>pf-cyan-200 <span class="primary-color-swatch-left-spacing-12">#7dbdc3</span></p></div>
    <div class="primary-color-swatch color-pf-cyan-300">
    <p>pf-cyan-300 <span class="primary-color-swatch-left-spacing-12">#3a9ca6</span></p></div>
    <div class="primary-color-swatch color-pf-cyan-400 white-text">
    <p>pf-cyan-400 <span class="primary-color-swatch-left-spacing-12">#007a87</span></p></div>
    <div class="primary-color-swatch color-pf-cyan-500 white-text">
    <p>pf-cyan-500 <span class="primary-color-swatch-left-spacing-12">#005c66</span></p></div>
    <div class="primary-color-swatch color-pf-cyan-600 white-text">
    <p>pf-cyan-600 <span class="primary-color-swatch-left-spacing-12">#003d44</span></p></div>
    <div class="primary-color-swatch color-pf-cyan-700 white-text">
    <p>pf-cyan-700 <span class="primary-color-swatch-left-spacing-12">#001f22</span></p></div>
  </div>
</div>
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-light-blue-400 white-text">
    <p>pf-light-blue</p></div>
    <div class="primary-color-swatch color-pf-light-blue-100">
    <p>pf-light-blue-100 <span class="primary-color-swatch-left-spacing-12">#beedf9</span></p></div>
    <div class="primary-color-swatch color-pf-light-blue-200">
    <p>pf-light-blue-200 <span class="primary-color-swatch-left-spacing-12">#7cdbf3</span></p></div>
    <div class="primary-color-swatch color-pf-light-blue-300">
    <p>pf-light-blue-300 <span class="primary-color-swatch-left-spacing-12">#35caed</span></p></div>
    <div class="primary-color-swatch color-pf-light-blue-400 white-text">
    <p>pf-light-blue-400 <span class="primary-color-swatch-left-spacing-12">#00b9e4</span></p></div>
    <div class="primary-color-swatch color-pf-light-blue-500 white-text">
    <p>pf-light-blue-500 <span class="primary-color-swatch-left-spacing-12">#008bad</span></p></div>
    <div class="primary-color-swatch color-pf-light-blue-600 white-text">
    <p>pf-light-blue-600 <span class="primary-color-swatch-left-spacing-12">#005c73</span></p></div>
    <div class="primary-color-swatch color-pf-light-blue-700 white-text">
    <p>pf-light-blue-700 <span class="primary-color-swatch-left-spacing-12">#002d39</span></p></div>
  </div>
</div>
<div class="col-lg-3">
  <div class="primary-color-swatches">
    <div class="primary-color-swatch secondary-top-block color-pf-purple-400 white-text">
    <p>pf-purple</p></div>
    <div class="primary-color-swatch color-pf-purple-100">
    <p>pf-purple-100 <span class="primary-color-swatch-left-spacing-12">#c7bfff</span></p></div>
    <div class="primary-color-swatch color-pf-purple-200">
    <p>pf-purple-200 <span class="primary-color-swatch-left-spacing-12">#a18fff</span></p></div>
    <div class="primary-color-swatch color-pf-purple-300 white-text">
    <p>pf-purple-300 <span class="primary-color-swatch-left-spacing-12">#8461f7</span></p></div>
    <div class="primary-color-swatch color-pf-purple-400 white-text">
    <p>pf-purple-400 <span class="primary-color-swatch-left-spacing-12">#703fec</span></p></div>
    <div class="primary-color-swatch color-pf-purple-500 white-text">
    <p>pf-purple-500 <span class="primary-color-swatch-left-spacing-12">#582fc0</span></p></div>
    <div class="primary-color-swatch color-pf-purple-600 white-text">
    <p>pf-purple-600 <span class="primary-color-swatch-left-spacing-12">#40199a</span></p></div>
    <div class="primary-color-swatch color-pf-purple-700 white-text">
    <p>pf-purple-700 <span class="primary-color-swatch-left-spacing-12">#1f0066</span></p></div>
  </div>
</div>
</div>
<div class="row row-gray">
  <div class="col-md-12 col-md-offset-12-bottom-spacer"></div>
</div>
