---
layout: default
title: Projects
permalink: /projects/
---

<div class="projects-page">

    <!-- =====================================================
         INTRO
         ===================================================== -->

    <header class="projects-hero">

        <p class="section-label">
            PROJECTS
        </p>

        <h1>
            WHAT I HAVE<br>
            DONE SO FAR
        </h1>

        <p class="projects-intro">
            A collection of projects spanning aerospace,
            GNC, autonomous systems, and embedded engineering.
        </p>

    </header>

    <div class="projects-grid">

        {% for project in site.projects %}

        <article class="project-card">

            <p class="project-type">
                {{ project.category }}
            </p>

            <h2>
                {{ project.title }}
            </h2>

            {% if project.description %}
            <p>
                {{ project.description }}
            </p>
            {% endif %}

            {% if project.status %}
            <p class="project-status">
                {{ project.status }}
            </p>
            {% endif %}

            {% if project.available %}

                <a href="{{ project.url | relative_url }}">
                    View project →
                </a>

            {% else %}

                <span class="project-soon">
                    Coming soon
                </span>

            {% endif %}

        </article>

        {% endfor %}

    </div>

