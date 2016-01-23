---
layout: post
title: "Project: Designing hackdays"
category: ""
excerpt: 20 skilled, proactive people gather in a room to create something with impact. How will we make it work?
tags: [Project, hackathons]
permalink: /hackday-design
---

This November, I'll be facilitating a *hackday* of journalists, coders and various concerned citizens to find stories about EU migration. We hope to use datasets, like the [Migrant Files](https://www.detective.io/detective/the-migrants-files/), and other [types of content](http://www.theguardian.com/world/2014/jun/25/-sp-boat-migrants-risk-everything-for-a-new-life-in-europe) as we dig for new angles on the intensifying topic of migration into and throughout the continent.

The event will be part of the Berliner Gazette's *Slow Politics* conference, alongside a number of other productive sessions. A clear exposition of the themes will be published soon.

<div class="image-right-box large"><a href="http://www.28doors.eu/english/"><img class="image-right" src='/images/28doors.jpg'></a>
	<p>An <a href="http://www.28doors.eu/english/">exhibition at Berlin's Tempelhof</a> remembers those lives lost at Europe's borders.</p>
</div>

As we prepare to take on this delicate issue, we will devise a process to make the session smooth and effective. *Hackdays*, or whatever we should call such a gathering, often hold great promise, but can suffer from uncertainty as they aspire to achieve rounded results in short time.

There is also the matter of managing data and turning it into an accurate, accessible whole.

This post is an attempt to bring together concerns, best practice, tools, examples and discussion as we design our approach. I aim to keep the attention of less technical readers too.

There are so many ways of working and a good hackday will typically remain open and adaptable to anything people bring along. However, setting out one clear process can guide expectations, align methods and ensure technical resources are at hand.

I hope the suggestions we arrive at through this discussion will help us share foundations with participants in advance of the event.

Please add your thoughts as annotations with the grey sidebar on the right or feel free [to get in touch with any suggestions](mailto:matthewlinares@gmail.com).


Objectives
----------

It's not always clear what's desirable and possible at an event like this. Our overarching objective is to produce compelling digital stories on EU migration.

I start by taking inspiration from a project already in circulation. The [Migrant Files](https://www.detective.io/detective/the-migrants-files/) is an excellent piece of open-source data collation. One way this has been put to use is with [a map illustrating the volume of immigrant casualties across the EU](https://jplusplus.cartodb.com/viz/60956ce4-9f98-11e3-b9ed-0e49973114de/public_map?title=false&description=false&search=false&shareable=true&cartodb_logo=true&layer_selector=false&legends=false&scrollwheel=false&fullscreen=false&sublayer_options=1&sql=).

<iframe width='100%' height='300' frameborder='0' src='https://jplusplus.cartodb.com/viz/60956ce4-9f98-11e3-b9ed-0e49973114de/embed_map?title=false&description=false&search=false&shareable=true&cartodb_logo=true&layer_selector=false&legends=false&scrollwheel=false&fullscreen=false&sublayer_options=1&sql=' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

Technically, this is done by importing the data, as a spreadsheet, into [CartoDB](http://cartodb.com/) which then allows for column data to be represented according to geocoding inside the spreadsheet.

>>Technical step-by-step (as drop-down or sidebox?)

It's a quick and simple way of depicting the numbers in an elegant way. It is also an easily embeddable product which allows a story to travel, as visible from [another CartoDB instance which earned Greenpeace a little bit of *visual authority* in the eco-intolerant Daily Mail](http://www.dailymail.co.uk/news/article-2708594/Three-four-Tory-target-seats-set-shale-gas-drilling-energy-minister-struggles-single-village-welcoming-fracking.html). 


Showing things differently
--------------------------

A graphic like that above would be a great outcome. Our working group has also considered other approaches to the task, from the data-driven, to [the satirical](http://deprofiler.com), to [the fantastical](http://www.transitmigration.org/migmap/home_map2.html).

One proposal is *Spot the Migrant*, an interactive quiz which presents a number of images challenging the user to spot the immigrant in each image. The site could even include on-click audio to add a voice to the face. The intention is to challenge perceptions of what type of people are actually immigrants. Stereotypes continue to cause huge damage whilst also being so confused as this would surely illustrate.

<div class="image-full"><img class="image-right" src='/images/spot-migrant.jpg'>
	<p>One artist's vision of migrant identification game <em>Spot the Migrant</em>. Image CC <a href="https://secure.flickr.com/photos/vfwnationalhome/14036713527/in/photolist-nERW8a-nonPUc-nEQRnu-nonGDU-nCPu1h-88FQCk-88FMaZ-88FLiR-88K5eo-88K1VC-88K3Ph-88FPGi-88K1KW-88FLoa-88FNXT-88K4Es-88K247-88K3s1-nonjWJ-nERYvB-nonKvn-5Pazpq-nN6JWA-aFxHsX-aFxHHT-o5A42t-nN6K1p-fyrvNC-o5tKfA-nN7wGn-o3xAwS-o5hP86-o5hMNT-nN7raR-o5tJJq-nN7vsD-o7nbcT-o5hL7X-nN6FtU-nN6BQn-nN6wPS-o5A3zX-o5tQFW-o5hMAD-nN6wGs-o5A7yi-o7ndqR-o5A4rg-nN6HNz-o7n4XP/">SONY DSC</a></p>
</div>

There are a thousand ways to tell a story and a thousand stories to tell. What we come up with partly depends on the material we have to work with (see below), but also the wealth of creativity. We'll be collecting ideas, like those above, in the coming months, including here and now.

Here's a spreadsheet for participants or anyone else reading this to contribute relevant ideas, new or already online, for our use at this event or at another time or place. I'll add a link to the thematic brief for more context as soon as it's available. [Please add your inspiration](https://docs.google.com/spreadsheets/d/1e_ODrZ6360OQOIwQ74r_mAe5gkiLNxlhCMeWKFL-uw0).

<iframe src="https://docs.google.com/spreadsheets/d/1e_ODrZ6360OQOIwQ74r_mAe5gkiLNxlhCMeWKFL-uw0/pubhtml?widget=true&amp;headers=false" width="680px" height="350px"></iframe>



Content collation
-----------------

We have so far looked at a couple of different content types as the basis for our projects. It's important that whatever material we have on the day is fertile, orderly and accessible.

It is not clear yet which will be our primary sources. One option is the Migrant Files, an example of a highly relevant, geocoded dataset documenting casualties and injuries of immigrants in transit. With more work, it might yield findings or clues not yet known. We may be able to work with that as it is. We may also attempt to build on that dataset, by seeking data using [similar open-source techniques](http://bordercriminologies.law.ox.ac.uk/tag/the-migrant-files/) as its creators, [Journalism++](http://jplusplus.org/), employed, or by making [Freedom of Information requests at the EU or regional level](http://www.freedominfo.org/resources/), or by other means.

There may be other datasets of different sorts which could lead to further important findings. It remains a live question what other data is out there, both that which is already compiled and that which might come of investigation, freedom of information, etc.


<div class="image-right-box large"><a href="http://www.transitmigration.org/migmap/"><img class="image-right" src='/images/migmap.jpg'></a>
	<p>One of MigMap's <a href="http://www.transitmigration.org/migmap/">critically charged migration configurations</a>.</p>
</div>

Alternatively, one team might choose to refine or codify data as their overall contribution. We were recently treated to a presentation by MigMap co-creator Peter Spillmann. Among <a href="http://www.transitmigration.org/migmap">MigMap's many extraordinary cartographic perambulations</a> is a neat <a href="http://www.transitmigration.org/migmap/home_map3.html">timeline of EU policy events</a> affecting migration. One project may be to take the findings made by MigMap's researchers into a dataset for others to see and use. It's not obvious that such a clear spread of the policy trails that made fortress Europe exists anywhere for people to feast on.

Another angle entirely would be to gather open-licensed qualitative, narrative, pictorial and other material together to allow for different kinds of story-telling. A strong image bank, a themed collection of Tweets, anecdotes gleaned from the streets of Berlin...

This approach has been emphasised by those who feel that the palpably human dimension of this issue is understated in some of the reporting, yet that is crucial to conveying the reality.

The question of what material to focus on will be decided as the conference themes develop and our current avenues of investigation unfold.


Participant pairing
-------------------

Skills, interests, resources they bring (hosting?)

If possible, have participants outline their skills and interests in advance and perhaps organise accordingly.


Format of the event
-------------------

Hackdays come in all shapes and sizes. It is too early to make an exact agenda for our two and a half day event. That will depend, among other things, on the sort of people and projects that arise.

Hackday format? Timetable?


Tools and tech resources
------------------------

When it comes to sharing resources, crunching data, coding a public face and hosting it all, the more options are ready to go in advance, the more likely technical production will run smoothly. Here's a list of services, with accounts all ready, fulfilling many common hackday needs.


**Data Hosting**

github, Bitbucket (free hosting of code that needs to be private), ckan, google


**Web site hosting**

heroku, strikingly


**Domains**

namecheap

Quick design



Hackdash.org





