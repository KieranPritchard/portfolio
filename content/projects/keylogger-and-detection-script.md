---
title: "Keylogger & Detection Script"
slug: keylogger-and-detection-script
category: security
description: "A dual-sided ethical hacking project demonstrating both red team (offensive keylogger) and blue team (defensive detection) capabilities in Python. Includes data exfiltration via Discord webhook."
tags:
  - Python
  - Cybersecurity
  - Ethical Hacking
  - Red Team
  - Blue Team
  - Process Monitoring
github: "https://github.com/KieranPritchard/Keylogger-and-Detection-Script"
link: "#"
date: "2025-07-06"
coverImage: "/projects/keylogger-and-detection-script/keylogger-and-detection-script.jpg"
coverAlt: "Keylogger & Detection Script project header"
---

A dual-sided ethical hacking project combining offensive (keylogger) and defensive (detection) Python scripts. The objective was to demonstrate both red team and blue team capabilities in a controlled environment, while showcasing how attackers move data off a system via data exfiltration using Discord webhooks.

This is the kind of project that gets noticed in cybersecurity interviews—not because it's flashy, but because it shows you understand the full attack-defense cycle.

# How It Works

**Red Team: The Keylogger**

- Captures every keystroke and logs it locally to `key_presses.txt`
- Press `Esc` to stop logging
- On exit, sends the log file to Discord via webhook
- Demonstrates data exfiltration in practice—moving data off a system beyond simply writing to disk

**Blue Team: The Detection Script**

- Queries active processes via `psutil` to detect the running keylogger
- Checks for the presence of the log file
- Terminates the keylogger process and deletes the log if found
- Demonstrates defensive hunting and process termination

**The Attack-Defense Workflow**

Both scripts work together to show the full cycle: how an attacker moves data, and how a defender finds and stops it.

# Tech Stack

| Layer | Tech |
|---|---|
| Language | Python |
| Key Libraries | `pynput` (keystroke capture), `psutil` (process monitoring), `requests` (HTTP), `python-dotenv` (credential management) |
| Exfiltration | Discord webhook |
| Tools | Git, VS Code |

# Getting Started

**Prerequisites:** [Python](https://www.python.org/) installed.

```bash
git clone https://github.com/KieranPritchard/Keylogger-and-Detection-Script.git
cd Keylogger-and-Detection-Script
pip install pynput requests python-dotenv psutil
```

**Set up Discord webhook:**

Create a `.env` file in the project root:

# Sources 

- Photo by <a href="https://unsplash.com/@gamell?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joan Gamell</a> on <a href="https://unsplash.com/photos/black-flat-screen-computer-monitor-XU1L22IUKnc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>