---
title: "Virtualised Ethical Hacking Lab"
slug: virtualised-ethical-hacking-lab
category: security
description: "Engineered a secure, isolated testing environment using VirtualBox and Kali Linux for penetration testing and vulnerability assessments."
tags:
  - Kali Linux
  - Wireshark
  - Nmap
  - VirtualBox
link: "#"
github: "#"
date: "2024-11-12"
coverImage: /projects/ethical-hacking-lab/ethical-hacking-lab-1.webp
coverAlt: "Abstract cover treatment for the ethical hacking lab project"
---

## Background

I created this setup because I wanted to build a Kali Linux lab to practice and experiment with tools on platforms like TryHackMe. At the time, I didn’t have any way to access these platforms, so I decided to assess my needs. I settled on using virtual machines, which allowed me to boot up a lab environment whenever needed without purchasing additional hardware. This approach lets me use the lab on demand without affecting other parts of my host machine.

![](/projects/ethical-hacking-lab/ethical-hacking-lab-3.webp)

## Ubuntu Set-Up

My first goal was to get everything running on my MacBook using Ubuntu. VirtualBox installed without any issues, and I set it up in Expert Mode based on what I had learned in college. I downloaded an Ubuntu Server ISO image and loaded it into VirtualBox. However, it opened into the UEFI console. I began troubleshooting—first by searching online for fixes, and then by asking ChatGPT for help. Eventually, I realized I had downloaded the wrong image for my host machine's architecture. After installing the correct version, I created a user account and installed Guest Additions to enable internet access, which I tested by watching My Chemical Romance music videos on YouTube.

![](/projects/ethical-hacking-lab/ethical-hacking-lab-2.webp)

## Setting up Kali Linux

I first downloaded a compatible Kali Linux image for my MacBook. I then loaded it into VirtualBox and allocated system resources to the virtual machine. After booting it up, I created a user account, installed Guest Additions, and made sure everything worked correctly. Finally, I installed any missing tools and customized the OS to my preferences.

![](/projects/ethical-hacking-lab/ethical-hacking-lab-1.webp)

## Outcomes

> The goal was learning velocity: fast resets, clear boundaries, and notes I can reuse on future engagements.

- Safer place to validate tooling and automation ideas  
- Better hygiene around separation of "lab" vs day-to-day browsing  
- Stronger habit of recording commands and artefacts as I go  
