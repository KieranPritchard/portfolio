---
title: "Active Directory Lab"
slug: active-directory-lab
category: security
description: "A hands-on Windows Server lab covering Active Directory user management, security groups, and role-based access control across two virtual machines. Documents the setup, the challenges I hit, and what I'd do differently with current practices."
tags:
  - Windows
  - Active Directory
  - RBAC
link: "#"
github: "#"
date: "2026-11-24"
coverImage: "/projects/active-directory-lab/active-directory-lab-3.png"
coverAlt: "Active directory lab project header"
---

> **Disclaimer:** This assignment was completed using two virtual machines in VirtualBox, on older hardware and with methods that I now know are outdated.

## Overview

For my T Level Foundation coursework in 2024/25, I set up a small Windows Server environment to practise user and access management. I enabled the server features I needed, created user accounts in Active Directory, and built security groups to apply role-based access control (RBAC). I also configured the firewall so two virtual machines could communicate.

## 1. Setting up the environment

My tutor provided two preset virtual machine images, which I ran in VirtualBox. On the server, I used Server Manager to enable the features the assignment needed, then activated the Windows Server installation with the product key we were given.

Windows Defender Firewall blocks incoming ping requests by default, so I created a rule to allow the two machines to connect and ping each other.

![Windows defender firewall after appling the change to allow the two virtual machines to communicate with each as well as it being verified with a terminal](/projects/active-directory-lab/active-directory-lab-1.png "Windows defender firewall after appling the change to allow the two virtual machines to communicate with each as well as it being verified with a terminal")
*Windows defender firewall after appling the change to allow the two virtual machines to communicate with each as well as it being verified with a terminal*

![System Properties showing the custom name for the server virtual machine](/projects/active-directory-lab/active-directory-lab-2.png "System Properties showing the custom name for the server virtual machine")
*System Properties showing the custom name for the server virtual machine*

## 2. Creating user accounts

The next part of the assignment was to create local accounts, then create the same accounts on the Active Directory domain. Since learning Active Directory through Microsoft Learn, I've found this isn't how enterprise environments work. They use a single domain account per user rather than separate local and domain accounts. It was useful to see where a classroom exercise and real practice differ.

![Computer Management new user dialog to add a new user to active directory](/projects/active-directory-lab/active-directory-lab-3.png "Computer Management new user dialog to add a new user to active directory")
*Computer Management new user dialog to add a new user to active directory*

## 3. Security groups and role-based access

Once the users existed, I created security groups to show role-based access in my final write-up. With RBAC you grant access to groups rather than individuals, so when someone changes role you move them between groups instead of editing permissions one by one.

This was my favourite part of the assignment. I enjoyed the workflow of managing users and their access rights, and it showed me why administrators use PowerShell to automate password resets and other manual tasks.

![Computer Management new group dialog to add a new group to active directory](/projects/active-directory-lab/active-directory-lab-4.png "Computer Management new user dialog to add a new user to active directory")
*Computer Management new group dialog to add a new group to active directory*

![Menu to grant folder access to a group or user](/projects/active-directory-lab/active-directory-lab-5.png "Computer Management new user dialog to add a new user to active directory")
*Menu to grant folder access to a group or user*

## 4. Challenges

I hit an error that stopped me using all the custom groups I'd created for each role. The main symptom of this is the groups did not show up when I entered the names into the database. I couldn't resolve it in time, so I assigned permissions manually to make the assignment work. I made that call because of the deadline, and it meant I couldn't fully demonstrate the group-based model I had designed.

In a work setting, I wouldn't leave the workaround in place. I'd find the root cause first, starting with the group configuration and membership, since the groups were the part that failed.

## 5. What I'd do differently

- Use one domain account per user instead of duplicating local and domain accounts
- Automate user and group creation with PowerShell
- Find the root cause of the group error instead of working around it
- Use more current virtualisation, tooling, and methodology

## 6. What I learned

- How Active Directory users and security groups fit together
- Why access should be granted to groups rather than individuals
- The gap between coursework methods and enterprise practice
- Why scripting matters for routine admin tasks

## Skills demonstrated

Active Directory administration, security groups and RBAC, Windows Server configuration, Windows Defender Firewall, troubleshooting