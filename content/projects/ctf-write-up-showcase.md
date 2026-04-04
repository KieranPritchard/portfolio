---
title: "CTF Write-Up Showcase"
slug: ctf-write-up-showcase
category: security
description: "A React-based portfolio powered by a custom Python pipeline that securely transforms private Markdown research into a public-facing cybersecurity showcase."
tags:
  - React
  - Python
  - Tailwind CSS
  - Automation
link: "https://kieranpritchard.github.io/CTF-Showcase/#/"
github: "https://github.com/KieranPritchard/CTF-Showcase"
date: "2026-01-30"
coverImage: "https://raw.githubusercontent.com/KieranPritchard/kieranpritchard.github.io/refs/heads/main/public/projects/ctf-showcase/ctf-showcase.webp"
coverAlt: "CTF Write-Up Showcase project header"
---

## The Concept: A "Security-First" Portfolio

The goal wasn't just to make a ethical hacking blog; it was to build a professional repository that showcases and documents my way of working through these challenges. In cybersecurity, documentation is everything, but it's often scattered across local folders, Obsidian vaults, or private notes. I wanted to turn that raw data into a polished, public-facing portfolio without adding a massive administrative overhead.

I envisioned a "Set it and forget it" system. I wanted to write in Markdown (my natural ethical hacking workflow), keep my sensitive research under lock and key in a private repo, and have a frontend that automatically updates its navigation and categories based on whatever I decide to publish. It’s essentially a custom-built Static Site Generator (SSG) tailored specifically for CTF write-ups.

## The Problem: The "Static Hosting" Wall

When you host a site for free on GitHub Pages, you hit a few immediate roadblocks if you want to do anything complex:

**The Backend Gap:** There is no server-side processing or database. Usually, if you want a searchable, categorized site, you’d need a database (like MongoDB or SQL) to store your posts. Without one, you’re stuck manually hard-coding every new link and category into your HTML/JS files—which is a maintenance nightmare.

**The Privacy Paradox:** I wanted to show off my finished work, but I didn't want my entire research process to be public. If I put my Markdown files directly into the public repository, anyone could see my unfinished drafts, "to-do" lists, or sensitive exploit scripts that aren't ready for exposure.

**Manual Mapping:** Every time a new write-up is added, you usually have to update a sidebar, a "latest posts" list, and a category page. I wanted to avoid this manual "double-entry" work.

## My Solution: The Python "Bridge"

I solved these issues by engineering a bridge between my private research portfolio and my public showcase using a custom Python pipeline.

**Private Storage:** All my write-ups live in a private GitHub repository. This acts as my secure "CMS" where I can draft, edit, and store raw notes without public scrutiny.

**The Python Script**: I wrote a script that acts as the brains of the operation. It uses the GitHub API to pull files from the private repo, parses the Markdown headers for metadata (like difficulty, tags, or date), and compiles everything into a single, structured data.json file.

**The "Pseudo-Backend":** By pushing this JSON file to my public repo, I’ve essentially created a "static database." When the React app loads, it fetches this one file and knows exactly how to build the sidebar, where to put the cards, and how to filter the content.

**Semi-Automation:** While I still trigger the script manually, it handles 100% of the data transformation. It turns a folder full of text files into a format, that is searchable by a web application in seconds.

## Tech Stack

**React:** For a smooth, single-page application experience with fast, client-side routing.

**Tailwind CSS:** For the UI. I used a utility-first approach to build a dark, high-contrast theme that stays readable and responsive on any device.

**Python:** The engine behind the data pipeline, handling the file system logic and JSON serialization.

**Markdown:** The source of truth for all content, allowing for easy code snippets and technical formatting.

## Key Takeaways

**Security:** I have a clear "Air Gap" between my private research and my public portfolio.

**Scalability:** Adding 10 or 100 new write-ups takes the same amount of effort—just run the script.

**Architecture:** This proves I can design custom infrastructure to solve the limitations of static hosting, moving beyond just "building a site" to "building a system."
