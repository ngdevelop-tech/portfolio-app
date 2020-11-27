---
title: 'Integrate Google Analytics with Angular'
description: 'Google Analytics is a popular analytical tool for web and mobile applications from Google. It helps to track real-time and historical website traffic stats.'
published: true
slug: integrate-google-analytics-with-angular-angular-seo
---

# Integrate Google Analytics with Angular

Google Analytics is a popular analytical tool for web and mobile applications from Google. It helps to track real-time and historical website traffic stats.

Key features : 

- Tracking web site traffic, page views, sessions, bounce rate.
- Tracking traffic sources, events, conversations, referrals.
- Provides information about new users and returning users details, page load time.
- Provides information about user demographics, device type, mobile device screen resolution, language, browser and OS details, network details
- User acquisition details, Search console details like search queries, landing pages.
- Campaign details, Traffic through Google Ads, social media traffic.

and many more things. It provides reports of each above feature, which helps to analyze your users and take further business decisions to increase the growth of the product, website, or app.

> Google Analytics data also helps to do SEO (Search Engine Optimization) of web and mobile apps.

## Get Google Analytics Tracking Code for Application

1. Sign in to Google Analytics 
2. Open Admin Panel and click on + Create Property.
3. A property represents your website or app, and is the collection point in Analytics for the data from your site or app. You can create multiple properties with one google analytics account.

4. Select Web or App and fill the required details – Website name, website URL, Industry Category and TimeZone
Now click on the create button to create a property.

Once your property is created it will generate global site tag(gtag.js) snippet for your application.

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TRACKING_CODE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config',[TRACKING_CODE]);
</script>
```