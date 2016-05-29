---
layout: post
title: Unique documentation page title
description: In order to get a more favourable SEO factor on our documentation pages, we have changed our documentation page generation logic slightly to generate a unique title per page.
category: announcements
image:
tags: [website]
---
{% include JB/setup %}

In order to get a more favourable SEO factor on our documentation pages, we have changed our documentation page generation logic slightly to generate a unique title per page. Instead of using a single title "Documentation" for all the pages like in the past, we now use the value of the Doxygen's page tile in the HTML title tag. We have also take this opportunity to enable the jekyll-seo-tag gem for our website. So now all our pages, including documentation pages, have auto-generated SEO tags. Hope we have done everything correctly.


