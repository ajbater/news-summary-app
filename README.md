# News Summary App

Create an app that summarises the news.

## Project Overview

The app will grab all the headline from the Guardian newspaper API and display them on a page. Clicking on a headline will show a summary of the article.

### Technologies

This is a single page web app created using JavaScript and HTML with no JQuery or frameworks.

### Serving the app

I have used a static web server to serve my HTML and JavaScript files. When completed, this app will send requests to the API to get data from the Guardian and to summarise text.

## User Stories

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can read a summary of a news article
So I can get a few more details about an important story
```

```
As a busy politician
I can read a full news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```

```
As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks
```

```
As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```

## How far I got and what I'd like to do next

This was originally supposed to be a 2 day group project, but instead we were given this task as a weekend project. With this in mind I decided to treat the last three User Stories as bonus features and instead focus on the first three.

I used pure JavaScript to create a one page app that showed a list of headlines, which you could then click on to see the headline along with the full text from that article.

I created a API model that could generate a URL to request data from the Guardian API. I decided to add a date property to this, so that it would find all headlines for the day that the request was created.

What I would like to do next is work out how to extract the information I need from the response and use this as parameters when creating article models.
