---
title: My First Page
layout: default
headline: Delivering front-end code at scale
---

<div class="grid-container">
  <section class="row-0" aria-label="Page title">
    <p class="sticky-banner">AMY_LEADEM/ README.md</p>
  </section>

  <section aria-label="hero">
    <h1 class="font-size-3xl">{{page.headline}}</h1>
  </section>

  <section aria-label="personal summary">
    <p class="summary-banner">
      Senior front-end developer specializing in design systems and accessibility
    </p>
  </section>

  <section aria-label="key projects and resume">
    <h2>Experience highlights</h2>
    <article class="job-card job-card--one-item">
      <img class="job-card__image" src="./assets/img/uswds.png" alt="United States Web Design System logo">
      <div class="job-card__body">
        <p class="job-card__tag">2021-2025</p>
        <h3 class="job-card__headline">Senior developer on the U.S. Web Design System core team</h3>
        <p>USWDS is the open source design system for the federal government that makes it easier to build accessible, mobile-friendly government websites.</p>
        <p>See my merged contributions on GitHub:</p>
        <ul>
          <li>
            <a href="https://github.com/uswds/uswds/pulls?q=is%3Apr+is%3Amerged+author%3Aamyleadem">
              USWDS component library contributions
            </a>
          </li>
          <li>
            <a href="https://github.com/uswds/uswds-site/pulls?q=is%3Apr+is%3Amerged+author%3Aamyleadem">
              USWDS documentation website contributions
            </a>
          </li>
        </ul>
      </div>
    </article>
    <article class="job-card job-card--two-items">
      <div class="job-card__headline">
        <p class="job-card__tag">2019-2021</p>
        <h3>Led design and development of Fortune 50 design systems</h3>
      </div>
      <div class="job-card__body">
        <div>
          <h4 class="job-card__subheadline">Created Raytheon Technologies' intranet design system</h4>
          <p>Served as project lead and primary front-end developer for the redesign of Raytheon’s intranet system reaching 60,000 end users daily. </p>
          <p>This new design was developed to streamline hundreds of one-off designs into a single system reflecting the new company brand. </p>
        </div>
        <div>
          <h4 class="job-card__subheadline">Created a design system for Raytheon's public-facing websites</h4>
          <p>Lead front-end developer for a new design system and component library to be shared across multiple public-facing websites.</p>
          <p>Developed a front-end code base from the ground up. Replaced a layered, cluttered code base with one that was lean and future-friendly.</p>
        </div>
      </div>
    </article>
    <div class="resume-link">
      <a class="button" href="./resume">Download resume</a>
    </div>
  </section>

  <section class="practice-area" aria-label="breaking down silos">
    <div>
      <h2 class="font-size-2xl">Connecting practice areas</h2>
      <p>All web project work eventually finds its way into code. Bringing technical knowledge to conversations with content, accessibility, and UX/UI teams reduces friction as work moves through the project. </p>
    </div>
    <div>
      <ul>
        <li>
          Accessibility
          <img src="./assets/img/handshake.png" alt="handshake emoji">
        </li>
        <li>
          Content
           <img src="./assets/img/handshake.png" alt="handshake emoji">
        </li>
        <li>
          Development
          <img src="./assets/img/handshake.png" alt="handshake emoji">
        </li>
        <li>
          UX/UI
        </li>
      </ul>
    </div>
  </section>

  <footer>
    <ul>
      <li>LinkedIn</li>
      <li>Github</li>
    </ul>
  </footer>
</div>
