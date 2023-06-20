---
title: "Two Form Of Pre-rendering"
date: "2023-03-14"
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it the HTML of the page.

- **Static Generation** Is the pre-rendering method that generates the HTML at **Build time**. The pre-rendered HTML is then _reused_ on each request.

-- **Server-Side Rendering** Is the pre-rendering method that generates the HTML at **Each Requests**

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
