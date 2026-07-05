---
title: "Network Uptime Tracker"
slug: network-uptime-tracker
category: automation
description: "A live network monitoring dashboard that pings a list of hosts, logs uptime history to SQLite, and displays it through a self-refreshing Streamlit dashboard."
tags:
  - Python
  - Streamlit
  - Scapy
  - Networking
  - SQLite
link: "#"
github: "https://github.com/KieranPritchard/Network-Uptime-Tracker"
date: "2026-07-05"
coverImage: "/projects/network-uptime-tracker/network-uptime-tracker.png"
coverAlt: "Network Uptime Tracker project header"
---

## Overview
 
A network monitoring tool that pings a list of hosts, keeps a persistent history of every sweep, and shows it all on a live dashboard instead of a wall of terminal text. Built to actually understand what's happening on a network at a glance, not just get a pass/fail per host.
 
## How It Works
 
Targets come from a plain `hosts.txt` file, one per line. Each entry gets validated against an IPv4 regex, and anything that isn't already an IP address gets resolved as a hostname through `socket.gethostbyname()`. Anything that can't be resolved gets skipped with a warning rather than crashing the run.
 
Once resolved, Scapy builds an ICMP echo packet for each host and sends it with `sr1()`, timing the round trip to get a response time in milliseconds and marking the host online or offline based on whether a reply comes back.
 
Every sweep's results get appended to a local SQLite database through pandas, so the history builds up run over run rather than only showing the latest check. The Streamlit front end reads that history back out and displays four live metrics — total hosts, hosts online, hosts offline, and average response time — each showing the delta against the previous run, alongside a line chart of hosts online over time and a sortable table of the full history. The whole thing reruns and refreshes itself every 10 seconds.
 
## Tech Stack
 
- **Language:** Python
- **Framework/Library:** Streamlit, Pandas, Scapy, sqlite3
- **Tools:** Git, VS Code
## Challenges
 
Hostname resolution kept failing on entries that should have worked fine. It turned out `readlines()` was leaving a trailing newline on every line pulled from `hosts.txt`, which broke both the IPv4 regex match and the DNS lookup silently. Fixed it with a `.strip()` on each line before doing anything else with it.
 
The online/offline logic was also inverted at one point, alongside inconsistent key names across the results dictionaries, which meant the online/offline counts on the dashboard didn't match what was actually happening on the network. Went back through the ping sweep function and corrected both the logic and the key names so the rest of the pipeline — SQL storage, metrics, chart — could rely on them being right.
 
## What I Learned
 
Got hands-on with Scapy for building and sending raw ICMP packets, which meant understanding why raw sockets need elevated privileges in the first place. Also learned how easy it is for a bug like a stray newline character to cascade into a much bigger, harder-to-diagnose problem further down the pipeline, and how useful it is to catch that at the earliest possible point rather than patching around it later. On the Streamlit side, learned how to structure a script that reruns itself into a genuinely live dashboard rather than a static report.