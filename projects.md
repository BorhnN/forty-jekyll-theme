---
layout: page
title: What we Do
description: 'Have a look of our projects'
nav-menu: false
show_tile: false
---
<!-- Main -->
<div id="main" class="alt">

<!-- One -->
<section id="one">
	<div class="inner">
		<header class="major">
			<h1> Our Work Field</h1>
		</header>
  <!-- Content -->
<div class="wow animated fadeIn" data-wow-delay=".15s">
  <a href="{{ project_url }}" class="project card text-dark">
    {%- if project_img -%}
    <img id="{{ project_id }}-img" class="card-img-top" src="{{ project_img }}" alt="{{ project_name }}" />
    {%- endif -%}
    <div class="card-body">
      <h5 id="{{ project_id }}-name" class="card-title">
          {%- if project_type == "remote" -%}
          <i class="fab fa-github" data-toggle="tooltip" data-placement="bottom" data-delay="250" title="GitHub Repository"></i> |&nbsp;
          {%- endif -%}
        {{ project_name }}
      </h5>
      <p id="{{ project_id }}-desc" class="card-text">{{ project_desc }}</p>
      <p id="{{ project_id }}-tools" class="card-text">
        {%- for tool in project_tools -%}
        <span class="badge badge-pill text-primary border border-primary ml-1">{{ tool }}</span>
        {%- endfor -%}
      </p>
    </div>
  </a>
