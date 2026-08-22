# Excelsior Consultancy Services — website

Static site. No build step, no npm, no dependencies. Plain HTML, CSS and JavaScript.

```
ecs-site/
├── index.html              ← page structure and all copy
├── css/
│   └── styles.css          ← all styling (20 labelled sections)
├── js/
│   └── main.js             ← all behaviour (8 labelled sections)
├── assets/
│   └── consultation.jpg    ← photograph behind the statement band
└── README.md
```

## Open it

1. VS Code → **File → Open Folder** → select `ecs-site`
2. Install the **Live Server** extension (Extensions panel → search "Live Server")
3. Right-click `index.html` → **Open with Live Server**

Live Server reloads the page every time you save, which matters here because the
scroll animations are easier to judge in motion.

> Opening `index.html` directly with a double-click also works, but you have to
> refresh manually after each edit.

## Where things are

| I want to change… | Go to |
|---|---|
| Any text on the page | `index.html` — it reads top to bottom in page order |
| Colours, fonts, spacing | `css/styles.css` → section 1, the `:root` block |
| The photograph | replace `assets/consultation.jpg` (keep the filename) |
| Animation timing | `css/styles.css` → `--ease`, and section 19 |
| Counter numbers | `index.html` → search `data-to` |
| Nav links | `index.html` → the `<nav class="nav">` block |

Press **Ctrl+Shift+O** in any file to jump between labelled sections.

## Design tokens

All colours and type live in one place, at the top of `styles.css`:

```css
:root{
  --paper:#FCFCFB;      /* page background      */
  --chalk:#F2F1ED;      /* alternating band     */
  --chalk-2:#EBE9E3;    /* second band          */
  --graphite:#16161A;   /* text, dark band      */
  --pewter:#7C7C82;     /* muted labels         */
  --slate:#4A4A52;      /* body copy            */
  --verdigris:#2E5F55;  /* the only accent      */
  --ease:cubic-bezier(.16,1,.3,1);  /* every transition uses this */
}
```

Change `--verdigris` and the accent updates everywhere at once. Keep the palette
this tight — the restraint is what makes it read as premium.

## Still to do

- [ ] Replace placeholder contact details in `index.html` (search for `TODO`):
      office address, telephone, email
- [ ] Confirm Reethu Abraham's title (currently *Founder & Managing Director*)
- [ ] Add real team photographs, or keep the monogram panels
- [ ] Higher-resolution statement photograph — the current source is only
      735×490 and has been upscaled
- [ ] Connect the contact form (see below)
- [ ] Add a `favicon.ico`
- [ ] Add Open Graph tags for link previews

## The contact formb

`js/main.js` section 8 validates name and email and shows a confirmation, but
**does not send anything anywhere**. To make it live, the simplest route is a
form service — no backend needed:

1. Sign up at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com)
2. Add the endpoint to the form tag:
   ```html
   <form class="form" id="form" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
3. Remove the `e.preventDefault()` line in `main.js`, or POST via `fetch`

## Deploying

Drag the `ecs-site` folder onto [netlify.com/drop](https://app.netlify.com/drop)
— it goes live in seconds, free, with HTTPS. A custom domain can be pointed at it
afterwards from the Netlify dashboard.

## Browser support

Modern evergreen browsers. Uses CSS `clamp()`, `clip-path`, custom properties and
`IntersectionObserver` — all widely supported. Degrades to a readable static page
if JavaScript is disabled.

## Accessibility

Focus rings are visible and must not be removed. The menu button carries
`aria-expanded`/`aria-controls`, the form message uses `role="status"`, and every
animation is disabled under `prefers-reduced-motion`. Keep these intact when editing.
 <section class="band" id="depth">
    <div class="wrap">
      <div class="band-head rv">
        <div><p class="eyebrow">In detail</p><h2>What the engagement covers.</h2></div>
        <p class="lede">What the work involves, and the business situations that typically bring it about.</p>
      </div>
      <div class="vm rv">
        <section>
          <h3>What it involves</h3>
          <ul class="svc-list">
            <li>Credit proposal and financial information memorandum preparation</li>
            <li>Working-capital and term-loan facility structuring</li>
            <li>Lender identification and approach, matched to the requirement</li>
            <li>Coordination through appraisal, query resolution and sanction</li>
            <li>Multi-lender consortium and syndication coordination</li>
            <li>Collateral and security documentation support</li>
            <li>Refinancing and facility consolidation across lenders</li>
          </ul>
<section class = "brand" id=" deepth">
    <siv class = "wrap">
    <div class ="band-head rv">
      <div><p class ="eyebrow">in detail </p><h2>what the engagement covers.</h2></div>
       <p class ="lede">what the work involves, and the business situations that typically bring it about.</p>
        </section>
        <section>
        <h3>what it involves</h3>
        <ul class ="svc-list">
        <li>credit proposal andd financial information memorandum prepraration </li>
        <li>working captial and long term-loan facility structuring </li>
                  <h3>Business situations</h3>
          <ul class="svc-list">
            <li>A business raising working-capital or term-loan facilities for the first time</li>
            <li>A business expanding and requiring a larger or restructured facility</li>
            <li>A business approaching multiple lenders and needing a coordinated syndication process</li>
            <li>A business refinancing existing debt on better terms</li>
            <li>A promoter preparing a complete, lender-ready file before the first approach</li>
          </ul>
        </section>
      </div>
      <div class="svc-value">
        <p><strong>Value.</strong> A well-structured, complete proposal moves faster through a lender's process — our role is to prepare that file and carry it through, so the business is not managing the process alone.</p>
      </div>
    </div>
  </section>

  <!-- ============ WHO THIS IS FOR ============ -->
  <section class="band" id="who">
    <div class="wrap">
      <div class="band-head rv">
        <div><p class="eyebrow">Who this is for</p><h2>Where this fits in your journey.</h2></div>
        <p class="lede">Not sure whether this is the right starting point? Our <a href="what-we-take-on.html" style="text-decoration:underline;text-underline-offset:3px">What We Take On</a> page maps the kinds of businesses and business situations we typically support.</p>
      </div>
    </div>
  </section>

  <!-- ============ CTA ============ -->
  <section class="band band--dark on-dark" id="cta">
    <div class="wrap rv" style="text-align:center">
      <p class="eyebrow">Enquiries</p>
      <h2 style="margin:20px auto 24px;max-width:20ch">Ready to discuss this with us?</h2>
      <p class="lede" style="margin:0 auto;max-width:52ch">Tell us about your project and we will tell you what the engagement involves.</p>
      <div class="hero-links" style="margin-top:44px;justify-content:center">
        <a class="tlink" href="index.html#enquiries">Request a consultation</a>
      </div>
    </div>
  </section>

</main>


