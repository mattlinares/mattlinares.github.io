---
layout: page
title: Projects and thoughts
tagline: Digital home of web producer and opinionator Matt Linares. <a href="/profile">See my profile</a> and <a href='mailto:info@microsplash.org'>get in touch</a>.
---
{% include JB/setup %}

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
    	{{ post.excerpt }}</li>
  {% endfor %}
</ul>



