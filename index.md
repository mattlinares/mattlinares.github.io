---
layout: page
title: Projects and thoughts
tagline: Digital home of web producer and opinionator Matt Linares.<br /><a href="/profile">See my profile</a> and <a href='mailto:info@microsplash.org'>get in touch</a>.
---
{% include JB/setup %}

<ul class="posts">
  {% for post in site.posts %}
    <li>{% if post.thumb %}<a href="{{ BASE_PATH }}{{ post.url }}"><img src="{{ post.thumb }}" class="list-thumb"></li><a>{% endif %}<a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo;  <span>{{ post.date | date_to_string }}</span><br />
    	{{ post.excerpt }}</li>
  {% endfor %}
</ul>



