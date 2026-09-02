---
layout: default
title: Home
---

<section class="hero">

    <p class="eyebrow">
        AUTONOMOUS SYSTEMS · GNC · AEROSPACE · SYSTEMS ENGINEERING
    </p>

    <h1>
        Andrés Felipe<br>
        Rodríguez Acosta
    </h1>

    <p class="hero-description">
           Final year aerospace engineering student interested in autonomous systems, GNC, and intelligent decision-making under uncertainty.
    </p>

    <p class="hero-note">
    Rockets by choice. Algorithms by curiosity. Electronic music by instinct.
    </p>

    <div class="hero-links">

        <a
            href="https://www.linkedin.com/in/andr%C3%A9s-felipe-rodr%C3%ADguez-acosta-8a2b761a7/"
            class="button"
        >
            LinkedIn
        </a>

        <a
            href="https://github.com/rodandres"
            class="button"
        >
            GitHub
        </a>

        <a
            href="#projects"
            class="button secondary"
        >
            View projects
        </a>

    </div>

</section>


<section class="section about-section" id="about">

    <div class="about-text">

        <p class="section-label">
            ABOUT
        </p>

        <h2>
            Building systems that can think, adapt, and act.
        </h2>

        <p>
            I am a final year aerospace engineering student interested in autonomous systems
            that can take decisions, and operate even when things do not go as expected.
            My work brings together modeling, simulation, software,
            electronics, control, and systems engineering to turn these ideas into
            working systems.
        </p>

        <p>
            Much of this mindset has been shaped by experimental rocketry. As
            Technology Manager at Volta, I have led avionics, software, and autonomy
            efforts while working with a team to turn ambitious ideas into real
            flight systems. It has taught me that engineering is rarely about solving
            a problem alone, it is about building systems, and building the people
            who build them.
        </p>

        <p>
            Engineering is, for me, as much about the process as it is about the result. I enjoy turning ideas into things that actually work, learning from the people I meet along the way, and saying yes to projects that seem a little too difficult, too ambitious, or simply too crazy at first.
        </p>

        <blockquote class="about-quote">

        When I'm not coding, I'm designing a rocket.
        And when I'm not doing either, I'm probably eating a burger.

        </blockquote>

        <a href="{{ '/about/' | relative_url }}" class="about-link">
            THE STORY SO FAR →
        </a>

    </div>


    <div class="about-gallery">

        <img
            src="{{ '/assets/images/about/nrhos.png' | relative_url }}"
            alt="Rocket launch"
        >

        <img
            src="{{ '/assets/images/about/cubesat.jpeg' | relative_url }}"
            alt="Rocket avionics"
        >

        <div class="gallery-feature">
            <img
                src="{{ '/assets/images/about/activating_avionics.jpeg' | relative_url }}"
                alt="Rocket"
            >

            <p class="gallery-quote">
                Take lots of photos.<br>
                You'll want to remember this life.<br>
                ◢ ◤
            </p>
        </div>

    </div>

</section>


<section class="section" id="projects">

    <p class="section-label">
        SELECTED WORK
    </p>

    <h2>
        Projects
    </h2>

    <div class="projects-grid">

        {% for project in site.projects %}

        <article class="project-card">

            <p class="project-type">
                {{ project.category }}
            </p>

            <h3>
                {{ project.title }}
            </h3>

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

</section>


<section class="section" id="skills">

    <p class="section-label">
        TECHNICAL SKILLS
    </p>

    <h2>
        Tools & disciplines
    </h2>

    <div class="skills-grid">

        <div>
            <h3>
                Autonomy & GNC
            </h3>

            <p>
                State Estimation<br>
                Sensor Fusion<br>
                Attitude Determination & Control<br>
                Control Theory<br>
                Guidance<br>                
                GNC
            </p>
        </div>

        <div>
            <h3>
                Aerospace
            </h3>
            <p>                
                Keplerian & Cislunar Astrodynamics<br>
                Atmospheric Flight Dynamics<br>
                Aerodynamics<br>
                Propulsion<br>
            </p>
        </div>


        <div>
            <h3>
                Software
            </h3>

            <p>
                Python<br>
                C / C++<br>
                Git/GitHub<br>
                Linux<br>
                Numerical Simulation
            </p>
        </div>


        <div>
            <h3>
                Electronics
            </h3>

            <p>
                Embedded Systems<br>                                
                PCB Development<br>
                Live Telemetry & Communications
            </p>
        </div>


        <div>
            <h3>
                Engineering Tools
            </h3>

            <p>
                GMAT<br>
                Capella / Arcadia<br>
                MATLAB<br>
                QT<br>                
                CAD
            </p>
        </div>

    </div>

</section>


<section class="section contact" id="contact">

    <p class="section-label">
        CONTACT
    </p>

    <h2>
        Let's connect.
    </h2>

    <p>
        For research, engineering projects, collaboration or simply to share good music.
    </p>

    <div class="contact-links">

        <a href="https://github.com/rodandres">
            GitHub
        </a>

        <a href="https://www.linkedin.com/in/andr%C3%A9s-felipe-rodr%C3%ADguez-acosta-8a2b761a7/">
            LinkedIn
        </a>

        <a href="mailto:andres.rodriguez10@udea.edu.co">
            Email
        </a>

    </div>

</section>