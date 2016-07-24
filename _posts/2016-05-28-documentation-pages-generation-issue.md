---
layout: post
title: (Fixed) Documentation pages generation issue
description: It has come to our attention that all our documentation pages have not been generated correctly recently.
category: announcements
image:
tags: [website]
---
{% include JB/setup %}

It has come to our attention that all our documentation pages have not been generated correctly recently. All the pages currently do not have the "doc-switcher" which supposedly allows user to switch the version of the page to the corresponding Urho3D release that you are using. The pages also have missing CSS and/or JS files for the "doc-navigation" to function properly. For the former issue, you can workaround to switch the version manually by altering the URL to the version you want to use. e.g. https://urho3d.github.io/documentation/HEAD/index.html for HEAD version or https://urho3d.github.io/documentation/1.5/index.html for 1.5 version. You only need to do this once as all the other links found in a documentation page will follow to your chosen version (they are statically generated for one specific version). Unfortunately there is no good workaround for the latter issue. You may find it difficult in navigating some of the documentation pages as the result.

The root cause of the problem has been identified. We have hit a bug in the GitHub Pages which is still not running the latest good version of the Jekyll. The issues are not reproducible locally with the latest version. Therefore, we have decided not to take any action and to wait it out for GitHub Pages to upgrade their Jekyll version. We are sorry for any inconvenience has caused.

UPDATE: It appears that part of the cause was self-inflicted. We had not adapted all our Liquid tags correctly after migrating to Jekyll 3.0. Correcting that seems to make GitHub Pages happy as well.
