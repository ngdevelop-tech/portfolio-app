---
title: 'Getting Started with Scully'
description: 'In this blog we will see how to use scully with angular application'
published: true
---

# Getting Started with Scully

## What is Scully?

Scully is a static site generator for angular which helps to develop JAMStack based applications. Scully prerenders all the routes at build time and generates the static HTML and assets. 

In this blog, We will see : 
- Scully Features
- How it works?
- Prerender Static Routes
- Prerender Parameterized Routes
- Serve static pages

Before we start exploring this, let's try to understand why we required Scully ? 
 
Normal angular application rendered on the client-side. there are some drawbacks of client-side rendered application. 
High FCP(First Contentful paint) time. (FCP is one of the metrics of web vitals).
- that means the user will see the blank screen or loader until JS rendered on client-side.
It is not SEO-friendly as not all web crawlers can process the JS files. 
Performance issue in mobile and low-powered devices 
The application will not work if JavaScript is disabled.
This all drawbacks can be resolved with JAMStack based application. Which can be developed by using Scully with Angular.
 
## Scully Features
Provides all JAMStack Goals
No efforts to integrate (It is just a layer over the angular apps)
Caching
Supports Markdown (eg. Creating Blogging Site) 
Provides Plugin System
Provides APIs to create a custom plugins.

## Install Scully

```javascript
import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portfolio",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};
```