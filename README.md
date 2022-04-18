# HTML and CSS practice

## Contents

**how to center cheatsheet** folder:
horizontal and vertical centering of inline/block elements;

**elements practice** folder:

- ways to implement burger menu, pop up, slider;

**layouts** folder:

- japan travel - one of the first layouts i made;
- seafood - first layout i made using my gulp config;
- watch shop - layout with best practices i know, for example:
  - bem naming;
  - rem font sizing and percentage line-height;
  - explicit width and height of images in html;
  - visually-hidden css pattern for h1;
  - no "handing" margins (element + element or :not(:last-child) usage);
  - adaptive property mixin (change property value between its layout value and minimum value it should be at 320px media breakpoint, depending on current viewport vw);
  - managing margins to prevent content "jumping", when scrollbar appears/disappers;
  - rebuilding section depending on breakpoint;
  - locking body scroll, when menu is opened, close menu if resize event invoked, smooth scroll to selected menu option, nontransparent header after scrolling more than its height;
  - and many more...
