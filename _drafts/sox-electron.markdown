---
layout: post
title: "SoX Binaries, Electron, and Just Doing"
tags: [software]
excerpt: >
  Making Keydo, a computer assistant, and next steps.
---

I made this application a few months ago which was took information from your screen to assist with one's daily tasks, but also had speech detection using SoX binaries. It was also very novel to me because I messed around with making my own [npm package](https://www.npmjs.com/package/electron-audio-record), built my app as an actual application (notarization and everything), and oddly enough, was the first *complete* Electron app I've ever made.

Interestingly enough, overimplementing truly seemed to be the only solution here for the application to work across all operating systems. So, I suppose this first half of the blog is more of a meditation on software development.

After I had implemented a lot of the features, I was already using Next.js with Electron (bloated, I know, but it's not like this needs to be extremely optimized). Although none of the server-side Next.js features could ever be utilized, just working with the front end system was familiar enough. Doing anything API-based with Electron is an interesting problem I've never come across before.


## Keydo