---
layout: default
title: HTML/CSS Code Guidelines
---

# OpenShift.io HTML/CSS Code Guidelines

## __This is a draft and is still in progress__

Please enforce these guidelines at all times. Small or large, call out what is incorrect.

> Every line of code should appear to be written by a single person, no matter the number of contributors.

This set of rules generate some constraints and conventions. If you run into instances where a convention is not obvious or a solution could be handled in a few different ways, contact the OpenShift.io community and have a conversation about how to handle it and update these guidelines when needed.


## Table of content (WIP)

- HTML
  - [Syntax](#syntax)
  - [Attribute order](#attribute-order)
  - [Reducing markup](#reducing-markup)

- CSS
  - [Syntax](#syntax-1)
  - [Declaration order](#declaration-order)
  - [Prefixed properties](#prefixed-properties)
  - [Single declarations](#single-declarations)
  - [Shorthand notation](#shorthand-notation)
  - [Comment and Organization](#comment-and-organization)
  - [Naming Selectors](#naming-selectors)
  - [Specificity](#specificity)
  - [Spacing](#spacing)
  - [Shadows](#shadows)
  - [Gradients](#gradients)
  - [Less](#less)
  - [Credits and references](#credits-and-references)

<!-- ============================================================ -->

# HTML

**Practicality over purity**. Strive to maintain HTML standards and semantics, but not at the expense of practicality. Use the least amount of markup with the fewest intricacies whenever possible.

<!-- ============================================================ -->

## Syntax

- Use soft tabs with two spaces.
- Nested elements should be indented once (two spaces).
- Always use double quotes, never single quotes, on attributes.
- Don’t include a trailing slash in self-closing elements.
- Don’t omit optional closing tags (e.g. </li> or </body>).
- Don't add a value to a boolean attribute e.g., `<input type="text" disabled>`.
- Lowercase tag name.
- Lowercase attribute name.
- Use HTML5 elements where appropriate, e.g., `article`, `aside`, `figure`, `figcaption`, `header`, `footer`, `main`, `nav`, `section`.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <img src="images/company-logo.png" alt="Company">
    <h1 class="hello-world">Hello, world!</h1>
    <input type="text" disabled>
  </body>
</html>
```

<!-- ============================================================ -->

## Attribute order

HTML attributes should come in this particular order for easier reading of code.

- `class`
- `id`, `name`
- `data-*`
- `src`, `for`, `type`, `href`, `value`
- `title`, `alt`
- `role`, `aria-*`


```html
<a class="..." id="..." data-toggle="modal" href="#">
  Example link
</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

<!-- ============================================================ -->

## Reducing markup

Whenever possible, avoid superfluous parent elements when writing HTML. Take the following example:

```html
<!-- Not so good -->
<span class="avatar">
  <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
```

<!-- ============================================================ -->

# CSS

Before we discuss how we write out our rulesets, let’s first familiarize ourselves with relevant terminology:

```
[selector] {
  [property]: [value];
  [<--declaration--->]
}
[<------rule-------->]
```

For example:

```less
.foo {
  display: block;
}
```

<!-- ============================================================ -->

## Syntax

- Use soft tabs with two spaces.
- When grouping selectors, keep individual selectors to a single line.
- Include one space before the opening brace of declaration blocks for legibility.
- Include a blank line between rules.
- Place closing braces of declaration blocks on a new line.
- Include one space after `:` for each declaration.
- Each declaration should appear on its own line for more accurate error reporting.
- End all declarations with a semi-colon, even the last one.
- Comma-separated property values should include a space after each comma (e.g., `box-shadow`).
- Don't include spaces after commas within `rgb()`, `rgba()`, `hsl()`, `hsla()`, or `rect()` values. This helps differentiate multiple color values (comma, no space) from multiple property values (comma with space).
- Lowercase all hex values, e.g., `#fff`. Lowercase letters are much easier to discern when scanning a document as they tend to have more unique shapes.
- Use shorthand hex values where available, e.g., `#fff` instead of `#ffffff`.
- Quote attribute values in selectors, e.g., `input[type="text"]`.  They’re only optional in some cases, and it’s a good practice for consistency.
- Don't prefix property values or color parameters with a leading zero (e.g., `.5` instead of `0.5` and `-.5em` instead of `-0.5em`).
- Avoid specifying units for zero values, e.g., `margin: 0;` instead of `margin: 0px;`.


```less
// Bad
.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}

// Good
.selector,
.selector__element,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
```

<!-- ============================================================ -->

## Declaration order

Related property declarations should be grouped together following a logical order:

1. Positioning
1. Box model
1. Typographic
1. Visual

Positioning comes first because it can remove an element from the normal flow of the document and override box model related styles. The box model comes next as it dictates a component's dimensions and placement.

Everything else takes place inside the component or without impacting the previous two sections, and thus they come last.

For a complete list of properties and their order, please see [Field CSS Manuals]( http://manuals.gravitydept.com/code/css/properties).

```less
.declaration-order {
  // Positioning
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  // Box-model
  display: block;
  float: right;
  width: 100px;
  height: 100px;

  // Typography
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  // Visual
  background-color: #f5f5f5;
  border: 1px solid;
  border-color: #e5e5e5;
  border-radius: 3px;

  // Misc
  opacity: 1;
}
```

<!-- ============================================================ -->

## Prefixed properties

OpenShift.io uses [Autoprefixer](https://github.com/postcss/autoprefixer) to deal with CSS vendor prefixes.

**Do not add vendor prefixes**

```less
// Bad
.selector {
  -webkit-box-shadow: 0 1px 2px @color;
          box-shadow: 0 1px 2px @color;
}

// Good
.selector {
  box-shadow: 0 1px 2px @color;
}
```

<!-- ============================================================ -->

## Single declarations

To improve error detection in instances where a rule set includes only one declaration, remove line breaks for readability and faster editing. Any rule set with multiple declarations should be split to separate lines.

```less
// Single declarations on one line
.span1 { width: 60px; }
.span2 { width: 140px; }
.span3 { width: 220px; }

// Multiple declarations, one per line
.sprite {
  display: inline-block;
  width: 16px;
  height: 15px;
  background-image: url(../img/sprite.png);
}

.icon            { background-position: 0 0; }
.icon--home      { background-position: 0 -20px; }
.icon--account   { background-position: 0 -40px; }
```

<!-- ============================================================ -->

## Shorthand notation

Strive to limit use of shorthand declarations to instances where you must explicitly set all the available values. Common overused shorthand properties include:

- `padding`
- `margin`
- `font`
- `background`
- `border`
- `border-radius`

```less
// Bad
.element {
  margin: 0 0 10px;
  background: red;
  background: url("image.jpg");
  border-radius: 3px 3px 0 0;
}

// Good
.element {
  margin-bottom: 10px;
  background-color: red;
  background-image: url("image.jpg");
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
```

The Mozilla Developer Network has a great article on [shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) for those unfamiliar with notation and behavior.

<!-- ============================================================ -->

## Comment and Organization

Code is written and maintained by people. Ensure your code is descriptive, well commented, and approachable by others. Great code comments convey context or purpose. Do not simply reiterate a component or class name.

Be sure to write in complete sentences for larger comments and succinct phrases for general notes.

Follow this comment structure:

1. License header
1. DocBlock
1. Sections
1. Line

```less
/**
* Copyright 2016 Red Hat, Inc
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

//
// Component heading
// --------------------------------------------------
//  Sometimes you need to include optional context for the entire component. Do that up here if it's important enough.

// Section level Comment
.selector {
  line-height: 1.5; // Line level Comment
  color: #333;
}
```

### 1. License header

<!-- PatternFly is license under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0). -->

Always add the <!-- Apache v2.0--> license header at the top of each less files.
- Leave three blank lines bellow.

### 2. DocBlock

Includes the name of the component and an optional comment.
- Leave three blank lines bellow.

### 3. Section

The Section comment is a section divider or describes a block of code.

- Leave one blank lines above.

### 4. Line

Describes a specific line of code.

<!-- ============================================================ -->

## Naming Selectors

Create names with useful or specific meaning via a mechanism that will not inhibit your and your team’s ability to recycle and reuse CSS.

- Keep classes lowercase.
- Use dashes to separate words (not underscores or camelCase).
- Avoid excessive and arbitrary shorthand notation, e.g., `.btn` is useful for button, but `.s` doesn't mean anything.
- Keep classes as short and succinct as possible.
- Use meaningful names, use structural or purposeful names over presentational.
- Use `.js-*` classes to denote behavior (as opposed to style), but keep these classes out of your CSS.
- Apply these same rules when creating Sass variable names.

```less
// Bad
.t { ... }
.red { ... }
.header { ... }

// Good
.tweet { ... }
.card { ... }
.twee__header { ... }
```

### Namespace

To avoid conflicts, OpenShift.io prefixes all classes with io-”. This also helps differentiate OpenShift.io from PatternFly and Bootstrap class names.

```less
// Bad
.selector {
  ...
}

// Good
.pf-selector {
  ...
}
```

### IDs and classes

Always use classes - avoid using an ID. Use classes over generic element tag for optimum rendering performance.

```less
// Bad
.io-card {
  color: #000;

  h2{
    font-size: 2em;
  }
}

// Good
.io-card { color: #000; }

.io-card--title{ font-size: 2em; }

```

<!-- ### BEM

PatternFly follows the [BEM methodology](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). It's a way to decouple CSS from HTML, and modularize class names so they can be extended.

Class name structure follows the `{{pf-block}}__{{element}}--{{modifier}}` structure:

```less
.pf-block__element--modifier {}
```

Example:

```html
<div class="pf-panel pf-panel--collapsible">
  <div class="pf-panel__title">
    <h1>Heading</h1>
  </div>

  <div class="pf-panel__content">
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</div>
```

```less
.pf-panel {}                      // Block
.pf-panel--collapsible {}         // Modifier of block

.pf-panel__title {}               // Element

.pf-panel__content {}             // Element
.pf-panel__content--unpadded {}   // Modifier of element
```

**Why it’s better**

- All the selectors have same specificity.
- Every element is defined via a block.
- Every modifier is defined via a block or element.
- Each class name imparts structural info without binding to exact HTML. -->

<!-- ============================================================ -->

## Specificity

Always keep selectors as shallow as possible.

```less
// Bad
.header .search-box input[type=search] + .button {}

.io-search-box {
  .btn {}
}

// Good
.io-search__button {}
```

### Nesting

Avoid Less nesting, but if you must do it follow the [inception rule](http://thesassway.com/beginner/the-inception-rule) and never go more than three layers deep.

Limit nesting to the following use cases:

1. Media queries
1. Parent selectors
1. States, pseudo-classes and pseudo-elements
1. Overwrite Bootstrap

For longer style blocks don't nest the modifier code as it reduced the legibility of the code.

#### 2. Media queries

Component-specific media queries should be nested inside the component block. Use [Bootstrap responsive breakpoints mixins](http://getbootstrap.com/css/#grid-media-queries) and remember that OpenShift.io is design to work on all devices.

**Do progressive enhancement, not gracefully degrade.**

```less
.io-nav {
  ...

  // Styles for small view ports and up
  @include: media-breakpoint-up(sm) { ... }
}
```

#### 3. Parent selectors

Make use of the [precompiler's parent selector](https://css-tricks.com/the-sass-ampersand/ mechanism. This allows all rules for a given component to be maintained in one location.

```less
.io-primary-nav {
  ...

  // Nav appearing in header: Right-align navigation when it appears in the header
  .io-header & {
    margin-left: auto;
  }
}
```

All styles for `.io-primary-nav` should be found in one place, rather than scattered throughout multiple partial files.

#### 4. States, pseudo-classes and pseudo-elements

States of a component should be included as a nested element. This includes hover, focus, and active states:

```less
.btn {
    background: blue;

    &:hover, &:focus {
        background: red;
    }
}
```

#### 5. Overwrite Bootstrap and PatternFly

Keep OpenShift.io code DRY. Reuse as much as you can from Bootstrap and PatternFly.

**To overwrite Bootstrap:**

- Create a new `io-` block element to live beside the Bootstrap or PatternFly block instead of a modifier.
- Be precise and accurate, introduce as little modifications as possible to achieve the design.
- Base your styles on the original bootstrap less file.
- Bootstrap uses a modified version of BEM: `{{block}}-{{element}}-{{modifier}}`.

```less
// OpenShift.io card block
.io-card {
  border: none;

  // Overwrite Bootstrap card header element
  .card-header{
    background: @card-pf-cap-bg;
    border-bottom-color: @card-pf-border-color;
  }

  // Overwrite Bootstrap card footer element
  .card-footer{
    background: @card-pf-footer-bg;
    border-top-color: @card-pf-border-color
  }
}

// OpenShift.io card modifier
.io-card--accented {
  border-top: 2px solid;
  border-color: @color-pf-blue-300;
}    
```

### !important

Never use `!important` to raise the specificity of a rule. In well architected CSS, this should never be required. If you think it is, rewrite the rules being inherited with high specificity that are causing problems.

```less
// Bad
.some-form {
  color: #000 !important;
}
```

<!-- ============================================================ -->

## Less

OpenShift.io uses [Less](http://) to preprocess CSS.

We limit our use of Less to:

- variables
- mixins
- color functions
- math functions
- nesting

Please don't use loops or conditional statements unless absolutely necessary.

### Operators in Less

For improved readability, wrap all math operations in parentheses with a single space between values, variables, and operators.

```less
// Bad
.element {
  margin: 10px 0 @variable*2 10px;
}

// Good
.element {
  margin: 10px 0 (@variable * 2) 10px;
}
```

### Variables

A new variable should be created only when all of the following criteria are met:

- the value is repeated at least twice
- the value is likely to be updated at least once
- all occurrences of the value are tied to the variable (i.e. not by coincidence).
- variable format should follow the `@component-modifier-state-property` order.

There is no point declaring a variable that will never be updated or that is only being used at a single place.

**Don't reinvent the wheel:** Always use variables for spaces, colors, shadows and typography treatment.

### Mixins

The rule of thumb is that if you happen to spot a group of CSS properties that always appear together for a reason (i.e. not a coincidence), you can put them in a mixin instead.

Another valid example would be a mixin to size an element, defining both width and height at the same time. Not only would it make the code lighter to type, but also easier to read.

The keyword for using mixins is **simplicity**:

- Don't over-engineer
- Don’t over think your code
- above all keep it simple.

If a mixin ends up being longer than 20 lines or so, then it should be either split into smaller chunks or completely revised.

```less
// Helper to size an element
// @param {Length} @width
// @param {Length} @height

.size(@width, @height: @width) {
  width: @width;
  height: @height;
}
```

### @extend:{}

Treat @extend:{} with resect. Use @extend:{} only for maintaining relationships within selectors. If two selectors are characteristically similar, that is the perfect use-case for @extend:{}. If they are unrelated but share some rules, a @mixin might suit you better.

- Stick to extending placeholders, not existing CSS selectors. Use extend on %placeholders primarily, not on actual selectors.
- Extend a placeholder as few times as possible in order to avoid side effects.
- When extending classes, only extend a class with another class, never a complex selector.
- Directly extend a %placeholder as few times as possible.
- Avoid extending general ancestor selectors (e.g. .foo .bar) or general sibling selectors (e.g. .foo ~ .bar). This is what causes selector explosion.

```less
.button {
  display: inline-block;
  // … button styles

  // Relationship: a %button that is a child of a %modal
  .modal > & {
    display: block;
  }
}

.button {
  @extend:{.button};
}

// Good
.modal {
  @extend:{.modal};
}

// Bad
.modal {
  @extend:{.modal};

  > .button {
    @extend:{.button};
  }
}
```

# Credits and references

This guide is inspired by people we follow and respect:

- **[PatternFly](https://patternfly.org):** [PatternFly 5 Code Guidelines](https://github.com/patternfly/patternfly-css/blob/master/CODE-GUIDELINES.md)
- **[Mark Otto](http://markdotto.com/):** [Code Guidelines](http://codeguide.co/)
