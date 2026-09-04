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
<section class = "band" id="depth">
   <div class = "wrap">
   </div>
   <div class ="vm rv">
   <section>
   <h3>what it involves </h3>
   <ul class = "svc-list">
      <li>credit proposal and financial information
      memorandum prepration
  <>
      <li>working-capital  and term-loan facility structuring <li>
      <li>lender identification and approach , matched to the  reguirement </li>
      <li> coordination through appraisal, query resolution and sanction</li>
      <li>credit proposal and financial information memorandum preparation</li>
      <li>lender identification and approach, matched to the requirement </li>
      <li>multi-lender consortium and syndication coordination</li>
      <li>collateral and security documentaion system <li>
      <li>refinancing and facility consolidation across lenders </li>
      <section class ="band" id ="depth">
      <div class = "wrap">
      </div>
      <section>
      <h3>what it involves </h3 >
      <ul class = "svc-list">
      <div class = "vm rv">
      <section>
      <h3>what it involves </h3>
      <ul class = "svc-list">
      <li>credit proposal and financial information meorandum prepration
      <>
      <li>working -capital and term-loan facility struuring </li>
      <li>lender identification and approach ,match to the reguirement</li>
      <li>coordination through apppraisal , query resolution and sanction</li>
      <li>credit proposal and  financial information memorandum preparation</li>
      <li>lender identification and approach, matched to the requirement </li>
      <li>multi-leander consortium and syndication coordination</li>
      <li>collateral and security documentaion sysstem </li>
      <selection class ="band"id ="depth">

      <div class="wrap">
      </div>
      <selction>
      <h3>what it involves </h3>
      <ul class ="svc-list">

      <li>credit proposal and financial information memorandum prepration
      <li>working-captial and term-loan facility structuring </li>
      <li>lender identifiaction and apporach , matched to the
      reguirement </li>
      <li>coordination through appraisal  , query resolution and saction</li>
      <li>credit proposal and financial infomation memorandum preparation </li>
      <li>multi-lender consortium and syndication coordination</li>
      <li>collateral and security documentation support</li>
      <li>refinancing security documenation system </li>
      <select class ="band" ="depth">
      <div class = "wrap">
      </div>
      <selection>
      <h3>what it involves </h3>
      <ul class = "svc-list">
      <li>credit proposal and financial information memorandum prepration
      <li>working-captial and term-loan facility structuring<li>
      <li>lender identification and apporach , matched to the reguirement </li>
      <li>coordination through appraisal , query resolution and saction
      <li>multi-lender consortium and syndication coordination </li>
      <li>collateral and security documentation support</li>
      <li>refinancing and facility consolidation across lender </li>
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
<section class ="band " id ="who">
   <div class="wrap">
   <div><p class ="eyebrow">who this is for</p><h2>where this fits in your journey.</h2></div>
   <p class="lede">not sure whether this is the  right starting point? our <a href = "what we take on .html " style = "text-documention:underline; text- underline-offset:3px" >what we take on </a> page  maps the  kinds of businesses and busniess  situation we typically support.</p>
   </div>
   </div>

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

<section > <p class = "eyebrow">who this is for</p><h2>where this fits in your journey.</h2></div>
<p class = "what we take on .html" style = "text-documention: underline; text - underline-offset:3px">what we take on </a> page maps  the kinds of businesses and busniess situation we typically support.</p>
</div>
</div>

<section class ="band band -- dark on dark" id="cta">
<div class = "wrap rv" style= "text-align:center">
<p class= "eyebrow">enquiries</p>
<h2 style= "margin:0 auto;" max-width:52ch>tell us about your project and we will tell you what  the engagement involves.</p>
<div class = "hero-link" style =margin-top:44px;
justify-content:center>
<a class ="tlink" href=index.html#enquiries>request a consultation</a>
</div>
<div>
</selection>


<main>

<selection><p class=>

<section class = "brand band -- dark on drak" id="cta">
<div class ="wrap rv" style="T">









<section class ="band band -- dark on- dark " id ="cta">
<div class ="wrap rv" style = "text- aligen:center">
<p class ="eyebrow">enquiries </p>
<h2 style = "margin:20px auto 24px;max-width:20ch">ready to discuss this with us ?<h2>
<p class= "lede " style ="margin:0 auto;max-width:52">tell us about your project and we will tell you what the  engagement involes .</p>
<div class ="hero-link" style="margin-top:44px;
justify-content:ceenter">
<a class = "tlink" href="index.html#enquiries">request a consulting </a>
</div>
</div>
</section>

</main >
 <section class="band page-hero">
    <div class="wrap">
      <p class="eyebrow up">Services</p>
      <h1>Business Advisory</h1>
      <p class="lede up">Strategic counsel on performance, structure and growth — grounded in financial modelling rather than opinion.</p>
      <div class="hero-links up" style="margin-top:44px">
        <a class="tlink" href="index.html#enquiries">Request a consultation</a>
        <a class="tlink" href="index.html#services">All services</a>
      </div>
    </div>
  </section>

  <p class ="lede" style ="margin:0 auto;
  max-width:52>tell us about your project and we will tell you what the engagemeent involes </p>
  <div class = "hero-link" style =margin-top:44px;justfy-counter:center">
  <a class = "tlink" href ="index.html#enquiries">request a conssulting </a>


<section class = "band band -- dark on-dark "id ="cta">
<div class = "wrap rv" style ="text-aligen:center">
<p class ="eyesbrow">enquiries </p>
<h2 style = "margin : 20px auto 24px ;max-width:20ch">ready to discuss this with us ?<h2>
<div class = "hero-link" style ="margin-top:44px;"
justify-content : center>
<a class ="tlink" href ="index.html#enquiries">request a consulting </a>
</div>
</div>
</selection>


</main>
<section class="band page-hero">
<div class="wrap">
<p class= "eyebrow up">service</p>
<h1>business advisory</h1>
<p class = "lede up">strategic counsel on performance , structure and growth - grounded in financial modelling ratther than option.</p>
<div class = "hero-link up" margin-top:44px">
<a class  ="tlink" herf ="index.html#enquiries">request a consultation</a>
<a class = "tlink" href = "index.html#services">all services</a>
</div>
</div>
</section>


<section class = "band band -- dark on-dark "id ="cta">
<div class ='wrap rv' style ="text-aaligen:center">
<p class = "eyesbrow" enquiries</p>
<h2 style ="margin : 20px auto 24px ;max-width:20ch">ready  to discuss this with us?<h2>

<div class = "hero-link" style ="margin-top:44px;">
<justify-content : center>
<a class ="tlink" href = "index.html#enquiries">request a consulting </a>
</div>
</div>
</selection>

<p class =eyebrow up >service</p>
<h1>business advisory</h1>
<p class ="lede up">service</p>
<div class = "hero-link upmargin-top:44px"
<a class ="tlink" herf ="index.html#enquiries">request a consultation a>
<a class ="tlink"herf = "index.html#services">all services</a>
</div>
</div>
</selection>


<section class = "band band -- dark on-dark "id="cta">
<div class ='warprv' style = "text-aaligen:center">
<p class = "eyebrow"enquiries>
<h2 style ="margin :20px auto 24px ;max-width:20ch">ready to discuss this with us ?</h2>

<div class = "hero-link" style ="margin-top:44px;">
<justify-content ; center
</div>
</div>
</selection>


  <!-- ============ SCOPE ============ -->
  <section class="band band--chalk" id="scope">
    <div class="wrap">
      <div class="band-head rv">
        <div><p class="eyebrow">What this covers</p><h2>Scope of the engagement.</h2></div>
        <p class="lede">A brief outline of what an engagement of this kind typically involves.</p>
      </div>
<selection class= "band band -- dark on-dark"id ="cta">
<div class = "eyesbrow " enquiries >
<p class = "margin : 20 px auto 24px ;max-width:20ch">ready to discuss this with us ?<h2>

<div class = "hero-link style =margin-top:44 px;">
<justify-content : center>
<a class ="tlink" href ="index.html#enquiries">request a consulting </a>
</div>
</div>
</selction>

<>
      <div class="pillars rv">
        <article class="pillar"><span class="r">I</span><h3>Performance review</h3>
          <p>Review of business performance, structure and underlying drivers.</p></article>
        <article class="pillar"><span class="r">II</span><h3>Financial modelling</h3>
          <p>Modelling built to support the decisions under consideration.</p></article>
        <article class="pillar"><span class="r">III</span><h3>Practical recommendations</h3>
          <p>Recommendations grounded in the numbers rather than general opinion.</p></article>
        <article class="pillar"><span class="r">IV</span><h3>Implementation support</h3>
          <p>Support carried through into implementation, not left at the report.</p></article>
      </div>
    </div>
  </section>


<div class="pillar rv">
<artical class="pillar"><span class ="r"></span><h3>performance review<h3>
<p>review of business performance, structure and underlying driver.</p></article>
<artical class= "piller"><span class="r">IT</span><h3>financial modelling</h3>
<p>modelling build to support the decisions under consideration .</p></articale>
<articale class="pillar"><span class="r">IT</span><h3>financial modelling </h3>
<p>modelling build to support the decisions under consideration.</p></articale>
<artical class ="pillar"><span class="r">IT</span><h3>practical recommendation</h3>
<p>recommendations grounded in the numbers rather then general opinion.</p><article>
</div>
</selection>

  <!-- ============ DEPTH ============ -->
  <section class="band" id="depth">
    <div class="wrap">
      <div class="band-head rv">
        <div><p class="eyebrow">In detail</p><h2>What the engagement covers.</h2></div>
        <p class="lede">What the work involves, and the business situations that typically bring it about.</p>
      </div>
      </div class ="pillars rv">
      <articale class="pillar"><snap class='r'>IT</span><h3>financial modelling</h3>
      <p>modelling built to  support the dilicious under considerration.</p><articale>
      <article class ="pillar"><span class ="r">III</span><h3>practical
      recommendation</h3>
      <p>recommendation grounded in the number rather than general opinion.<p></article>
      <articale class="pillar"><span class ="r">IV </span><h3>implemantation support </h3>
      <p>support carried through into  inplementation, not left at the report `5
      <div class="vm rv">
        <section>
          <h3>What it involves</h3>
          <ul class="svc-list">
            <li>Financial decision-making support</li>
            <li>Cost management and margin review</li>
            <li>Business planning and expansion-decision analysis</li>
            <li>Performance analysis against internal or industry benchmarks</li>
            <li>Process improvement recommendations</li>
            <li>Make-versus-buy and outsourcing evaluation</li>
            <li>Independent advisory grounded in financial modelling, not opinion</li>
          </ul>
        </section>
        <section>
          <h3>Business situations</h3>
          <ul class="svc-list">
            <li>A significant business decision under consideration</li>
            <li>A business seeking an independent view before committing</li>
            <li>A promoter weighing options without an in-house finance function</li>
            <li>A business reviewing performance against its own expectations</li>
            <li>A business evaluating a new revenue stream, product line or market</li>
<h3> what it involves</h3>
<ul class="svc-list">
<li>financial decision-making supporting</li>
<li>cost management and margin review</li>
<li>business planning and expansion-decision analysis</li>
<li>performance analysis against internal or insustry benchmarks</li>

<li>process inprovement recommendations</li>
<li>make-versus-buy and outsoucing evaluation</li>
<li>independent advisory grounded in financial modelling , not  opinion</li>
</ul>
</selection>
<selection>

<h3>busniness situations</h3>
<ul class="svc-list">
<li>ssignificant business decision  under consideration</li>
<li>a business seeking an indipendent view befor committing </li>
<li>A PROMOTER weighing option without an inn-house finance function </li>
<li>a business reviewing performance against its own expectations</li>
<li>a business evaluating a new revinue stream , product lineor market</li>
<h3>what it involves </h3>
<ul class="svc-list">
<li>financial desicion-making supporting</li>
<li>cost management and margin review</li>
<li>business planning and expansion-decision analysis</li>
<li>performance analysis agaainst internal or industry benchmarks</li>

<li>process inprovement recommendation</li>
<li>make-verus -buy aand outsoucing  evaluation</li>
<li>independent advisory grounded in financial
modelling , not opinion </li>
</ul>
</selection>
<selection>
  <section class ="band" id="depth">
  <div class = "wrap">
  <div class ="band-head rv">
  <div><p class ="eyebrow">in detail </p><h2>what the engagement cover .<h2></div>
  <p class ="lede">what the work involes , and the business situation that typically bring it about.</p>
  </div>
  </div class = "vm rv">
  <section>
  <h3>what it involves </h3>
  <ul class="svc-list">
  <li>sinancial decision- making support </li>
  <li>cost management and margin review </li>
  <li>busniness planning and expansion-decision analysis</li>
  <li>process improvement recommendations </li>
  <li>make-versus-buy and outstanding evaluation</li>
  <li>independent advisory grounded in financial modelling, not  opinion</li>
  </ul>
  </selection>
  <selection>
  <h3>business situation </h3>
  <ul class  ="svc-list">
  <li>A significant business decision under consideration</li>
  <li>A busniness seeking an independent view before committing </li>
  <li>A promoter weightinng option without an in-house finance function </li>
  <li>A business reviewing performance  against its own expectations</li>
  <li>A business evaluating a new revenue stream , product line or market</li>
  <selection class ="band" id="depth">
  <div class ="wrap">
  <div class = "band-head rv">
  <selection>
  <h3>what it involves </h3>
          </ul>
        </section>
      </div>
      <div class="svc-value">
        <p><strong>Value.</strong> Advisory grounded in the actual numbers gives management a clearer basis for a decision — the analysis, not a recommendation dressed up as certainty.</p>
      </div>
    </div>
  </section>
  <h3>busniess situation </h3>
  <ul class = "svc-list">
  <li>asignificant busniess desision under consideration </li>
  <li> a business seeking an independent view before committing </li>
  <li> A promoter weeighting option without an in-house finance function</li>
  <li> A business reviewing performance against its own expectation</li>
  <li>A business evaluating a new revenue stream ,production line or market </li>
  <selection class = "band" id="depth">
  <div class = "band - head rv">
  <selection>


  <section class="band" id="who">
    <div class="wrap">
      <div class="band-head rv">
        <div><p class="eyebrow">Who this is for</p><h2>Where this fits in your journey.</h2></div>
        <p class="lede">Not sure whether this is the right starting point? Our <a href="what-we-take-on.html" style="text-decoration:underline;text-underline-offset:3px">What We Take On</a> page maps the kinds of businesses and business situations we typically support.</p>
      </div>
    </div>
  </section>


<section class ="band" id="who">
<div class ="wrap">
<selection class>
<div class ="band-head rv">
<div><p class ="eyebrow">who this is for</<p><h2>where this fits in yoyr journey.<h2>,</div>
<p class="lead">not sure whether this is the right starting point ?our <a
href ="WHAT-WE-TAKE-ON.html"
style ="text-decoration:ubnderline"
style ="text-decoration:underline;
text-underline-offset :3px">what we take on</a>
page  maps the  kinds os busninesses and busniness situations we typlically support.<p>
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

<div class = "wrap">
<div class ="band-head rv">
<div><p class ="eyebrow">who this is for</p><h2>where this fits in your journey.<h2>,</div>
<p class= "lead">not sure whether this is the right starting point ?our <a
href = "what-we-take-on.html"
style = "text-decorationline"
style = "text-decorstion:underline;
text-underline-offset :3px">what we take on</a>
page maps the kinds os businesses and business situations we typically support .<p>
<section class ="band band -- dark on dark" id="cta">
<div class="wrap rv" style="text-aligen:center">
<p class ="eyebrow">enquries</p>
<h2 style ="margin:20px auto 24px"
max-width:20ch>ready to discuss this with us?</h2>
<p class ="lede" style= "margin:0 auto;" max-width:52ch>tell us about your project and we will tell you what the engagement involves.</p>
<div class ="hero-link" style="margin-top:44px;
justify-content:center">
<a class ="tlink" href="index.html #enquiries">request a consultation</a>
</div>
</div>
</section>

</main>

<footer class="foot">
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-mark">
        <b>EXCELSIOR</b>
        <p>Corporate advisory headquartered in Chennai. Chartered Accountants, seasoned bankers and engineers, delivering tailor-made


