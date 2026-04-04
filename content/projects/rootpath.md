---
title: "RootPath"
slug: rootpath
category: web
description: "A professional, desktop-optimized web application evolved from a standard link-in-bio clone, featuring responsive grid engineering and modular React architecture."
tags:
  - React.js
  - Tailwind CSS
  - UI/UX Design
  - GitHub Pages
link: "https://kieranpritchard.github.io/RootPath/"
github: "https://github.com/KieranPritchard/RootPath"
date: "2026-02-06"
coverImage: "projects/rootpath/rootpath.webp"
coverAlt: "RootPath project header"
---

## The Blueprint & Vision

I originally built this web-app under a different name, Linknest. I this was originally just another link-in-bio clone for my links. However, after a couple months I decided to completely strip it back to build a high-performance web app. To make the new version I established three pillars for the project: responsive grid engineering, a custom branding engine, and modular component architecture.

## Bridging the Responsive Gap

Before touching the code, I moved into a design-first phase. I mapped out a "desktop-first" optimization that utilized a horizontal grid rather than a single vertical column. This ensured the app would feel like a professional landing page on a 27-inch monitor while remaining a utility-first tool on mobile.

## The Structural Refactor

I entered the codebase by decluttering App.jsx and implementing an atomic folder structure. By organizing components into categories like /Backgrounds, /Bio, and /Buttons, I created a scalable environment. I also implemented the theme-color meta tag fix to sync the mobile browser UI with the app’s dark mode.

## Logic Consolidation (DRY)

With the foundation set, I focused on the "Don't Repeat Yourself" (DRY) principle. I reformatted the Biography section and merged redundant elements that were performing similar tasks. This reduced the overall file size and made the layout much easier to maintain for future feature updates.

## The Design Pivot

While coding, I realized my original Figma draft didn't feel "right" in the browser. I pivoted to a centered layout for better visual balance and refactored the "Download CV" button into a universal file-download component. I also introduced "Progressive Disclosure" by moving the QR code into a clean dropdown menu.

## Launch & Identity

In the final phase, I rebranded the project as Rootpath. The name reflects the hacker-inspired aesthetic of giving users "root access" to my professional presence. I finalized the responsive transitions and deployed the build to GitHub Pages for live testing and community feedback.

## Tech Stack

* React.js.
* Tailwind CSS. 
* GitHub Pages.