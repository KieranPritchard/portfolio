---
title: "What I Plan to Build in 2027"
slug: "what-i-plan-to-build-in-2027"
category: "career-plans"
description: "The tools I want to build in 2027, from attack tools and the detectors that catch them to low-level C and published packages."
tags:
  - Projects
  - Cyber Security
date: "2026-10-24"
coverImage: "/blogs/what-i-plan-to-build-in-2027.jpg"
coverAlt: "What I Plan to Build in 2027 blog cover"
---

# What I Plan to Build in 2027

I want to build tools that not only perform attacks, but also find attacks and protect systems. I plan to use all of the different parts of my technology stack to do it. My T Level is coming to an end, which will leave me effectively in limbo for the remaining months of the school year. I'll have a lot of spare time outside of college when I'm not carrying out my duties as a student governor. So I plan to work through some projects to bridge the gap before I'm finally let go to find my own way in the world.

My actual plan for next year beyond this, I won't make public until a later date. But for the projects, here's what it looks like.

## Build the attack, then catch it

Firstly, I want to write a few offensive tools, lab-only and only for when I'm authorised to use them, and then build the detectors that should catch them. One I'm working on now is a banner grabbing tool written in Go called Porttrait. It aims to simplify how I use Netcat by automating parts of the workflow and making it easier to use. Another is GhostGate, which lets me stage a payload directory and set up a listener for data exfiltration. The latter I have been using in the CTF challenges I have completed recently and it works very well

Secondly, I have a few ideas for what I can do with Python in a network security capacity. The first is an ARP poisoning tool. Then I'd build an ARP spoofing detector to see if it spots my own attack. I could use that detector in the real world too, on a homelab, on a server, or at a company if a future employer wants to use it; I'm open for alot possiblities involving the things I create. In Go, I want to build a C2 beacon simulator, then a DNS exfiltration detector with a scoring model, tested against the simulated traffic.

I keep seeing the idea in my feeds that you don't really know a detector works until you've tried to beat it. That's the mentality I'll bring to my projects in the new year. Although, I am going to frame that a bit differently (mainly, because it sounds like a LinkedIn post)

## Get properly good at C

Go, Python and modern web technologies are what I'm most comfortable with and use the most. I want to get to that level in C too. I've done some C++ in the past and didn't really like it. With my limited experience of C, though, I like it a lot more.

Some of the things I have planned: a program that reads `/proc/net/tcp` to see what's listening on a machine; sending raw UDP probes and parsing the responses; and parsing PE and ELF headers by hand. I also want to finally build something I've had ideas for but haven't had the time to build: a `ptrace` syscall tracer that flags a process behaving differently from its baseline.

## Wire it all together

Detection tools are only useful if someone sees the results. So I want to build the layer on top: dashboards in PHP and in React. Some of the ideas I have had includes: a live alert feed over WebSockets, and n8n workflows that dedupe alerts, run scheduled recon, and only tell me about what's new.

## How I'll do it

I won't try to do everything. I'll start with the attack and detector pairs, because they teach me the most. I'll write up each project when it ships, wins and failures included.

If you're working on something similar, I'd like to hear from you. What would you build first?

## Sources
  - Post Thumbnail - [https://unsplash.com/photos/hand-checking-off-items-on-a-to-do-list-fXlL5I0IvK0](https://unsplash.com/photos/hand-checking-off-items-on-a-to-do-list-fXlL5I0IvK0)