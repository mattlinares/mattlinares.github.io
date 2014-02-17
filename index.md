---
layout: page
title: Projects and thoughts
tagline: Digital home of web producer and thinker Matt Linares. <a href='mailto:info@microsplash.org'>Get in touch about anything here or other projects</a>.
---
{% include JB/setup %}





<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>



