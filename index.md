---
layout: page
title: Practicing technology
tagline: Digital home of web producer and opinionator Matt Linares.<br /><a href="/profile">See my profile</a> and <a href='mailto:info@microsplash.org'>get in touch</a>.
---
{% include JB/setup %}

<div class="visionary-web-section">
  <h3>Visionary Tech: <em>Learning new tools</em></h3>
  <p>Workshops showcasing tech projects to transform society. Sessions introduce ambitious initiatives like egalitarian crypto and DIY internet grids. Guests test the tech and join communities of practice.<br/>
  <strong><em>– Spring 2026, London</em></strong>
  <br/><a href="https://mailchi.mp/59094c77024f/from-site"><strong>Sign up for more info ↠</strong></a></p>
</div>

<ul class="posts">

{% assign detox = site.posts | where: 'tags', 'detox' %}

  <h3>Digital detox</h3>

  {% for post in detox %}
    {% if post.tags contains 'detox' %}
      <li>
      {% if post.longthumb %}
      <a href="{{ BASE_PATH }}{{ post.url }}"><img src="{{ post.longthumb }}" class="thumb long-thumb"></a><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo;  <span>{{ post.date | date_to_string }}</span><br />{{ post.excerpt }}</li>

        {% elsif post.thumb %}
        <a href="{{ BASE_PATH }}{{ post.url }}"><img src="{{ post.thumb }}" class="thumb list-thumb"></a><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo;  <span>{{ post.date | date_to_string }}</span><br />{{ post.excerpt }}</li>

        {% else %}
        <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo;  <span>{{ post.date | date_to_string }}</span><br />
        {{ post.excerpt }}</li>
      {% endif %}
    {% endif %}
  {% endfor %}

{% assign DAOs = site.posts | where: 'tags', 'DAO' %}

<h3>DAOs for future orgs</h3>

  {% for post in DAOs %}
    {% if post.tags contains 'DAO' %}
      <li>
  		{% if post.longthumb %}
  		<a href="{{ BASE_PATH }}{{ post.url }}"><img src="{{ post.longthumb }}" class="thumb long-thumb"></a><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo;  <span>{{ post.date | date_to_string }}</span><br />{{ post.excerpt }}</li>

      	{% elsif post.thumb %}
      	<a href="{{ BASE_PATH }}{{ post.url }}"><img src="{{ post.thumb }}" class="thumb list-thumb"></a><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo;  <span>{{ post.date | date_to_string }}</span><br />{{ post.excerpt }}</li>

      	{% else %}
      	<a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo;  <span>{{ post.date | date_to_string }}</span><br />
      	{{ post.excerpt }}</li>
    	{% endif %}
    {% endif %}
  {% endfor %}  


{% assign ai = site.posts | where: 'tags', 'AI' %}

  <h3>Handling AI</h3>

  {% for post in ai %}
    {% if post.tags contains 'AI' %}
      <li>
      {% if post.longthumb %}
      <a href="{{ BASE_PATH }}{{ post.url }}"><img src="{{ post.longthumb }}" class="thumb long-thumb"></a><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo;  <span>{{ post.date | date_to_string }}</span><br />{{ post.excerpt }}</li>

        {% elsif post.thumb %}
        <a href="{{ BASE_PATH }}{{ post.url }}"><img src="{{ post.thumb }}" class="thumb list-thumb"></a><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo;  <span>{{ post.date | date_to_string }}</span><br />{{ post.excerpt }}</li>

        {% else %}
        <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo;  <span>{{ post.date | date_to_string }}</span><br />
        {{ post.excerpt }}</li>
      {% endif %}
    {% endif %}
  {% endfor %}




{% assign archive = site.posts | where: 'archive', 'true' %}

  <h3>Archive</h3>
  {% for post in archive %}
      <li>
      {% if post.longthumb %}
      <a href="{{ BASE_PATH }}{{ post.url }}"><img src="{{ post.longthumb }}" class="thumb long-thumb"></a><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo;  <span>{{ post.date | date_to_string }}</span><br />{{ post.excerpt }}</li>

        {% elsif post.thumb %}
        <a href="{{ BASE_PATH }}{{ post.url }}"><img src="{{ post.thumb }}" class="thumb list-thumb"></a><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo;  <span>{{ post.date | date_to_string }}</span><br />{{ post.excerpt }}</li>

        {% else %}
        <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo;  <span>{{ post.date | date_to_string }}</span><br />
        {{ post.excerpt }}</li>
      {% endif %}
  {% endfor %}
</ul>



