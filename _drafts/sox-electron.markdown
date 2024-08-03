---
layout: post
title: "SoX Binaries, Keydo, and Vim"
tags: [software]
excerpt: >
  Making Keydo, a computer assistant, and next steps.
---

I made an application called Keydo a few months ago took information from your screen to assist with one's daily tasks, but also had speech detection using SoX binaries. It was a very interesting project because I messed around with making my own [npm package](https://www.npmjs.com/package/electron-audio-record), built my app as an actual application (notarization and everything), and oddly enough, this project was the first *complete* Electron app I've ever made. *Note to self:* to do actual API requests on a server (instead of requiring the user to put their own API key), I should store a unique UUID for each user that thus only allows requests from verified users. This way, no abuses! I wonder if I'll find time later on to implement this.

Interestingly enough, overimplementing with binaries truly seemed to be the only solution here for the application to work across all operating systems while still "making sense." Or maybe there is a better way to make such an app (with a better dev experience), where by the nature of software development, I didn't come across (cf. "learning is always iterative").

## Keydo


