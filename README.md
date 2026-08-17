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

## The contact form

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
