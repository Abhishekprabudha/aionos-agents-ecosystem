# AIonOS App Factory Demo

A premium HTML/CSS/JS concept demo that visually narrates how **UniWeave**, **UniScale**, **UniStack**, and **UniProtect** come together to create enterprise AI applications on demand.

## What this demo is designed to prove

This is not framed as "four products around one box."

It is framed as a **live application factory**:

1. Business intent is captured in natural language
2. Platform layers activate in sequence
3. Reusable building blocks converge into an AI app
4. Governance is applied before release
5. Multiple output apps go live for the client

## Included demo scenarios

- Energy — Refinery operations copilot
- Logistics — Control tower + warehouse copilot
- Travel — Service recovery assistant

You can add more scenarios by editing `scenarios.js`.

## Repo structure

```text
aionos_app_factory_demo/
├── index.html      # Main single-page experience
├── styles.css      # Visual styling, layout, and motion styling
├── app.js          # Composition logic, autoplay, presenter controls, narration
├── scenarios.js    # Scenario definitions, narration text, output cards, metrics
└── README.md       # Setup and adaptation notes
```

## How to run

This is a static frontend repo.

### Option 1
Open `index.html` directly in your browser.

### Option 2
Host it on GitHub Pages:
- create a new repo
- upload these files to the repo root
- enable GitHub Pages
- serve from the main branch root

## Presenter flow

### Autoplay mode
Use **Autoplay demo** to run the whole story without clicks.

### Presenter mode
Use:
- **Compose app** for step-by-step progression
- **Jump to step** buttons for meeting control
- **Scenario dropdown** to switch industries live
- **Narration toggle** to mute browser speech if needed

## How to customize for your client

### Edit business intent
In `scenarios.js`, change:
- `intent`
- `appTitle`
- `appSubtitle`

### Change platform contribution chips
Edit the `platforms` object for:
- `uniweave`
- `uniscale`
- `unistack`
- `uniprotect`

### Change output apps
Edit the `outputs` array.

### Change business outcomes
Edit the `metrics` array.

### Change narrator script
Edit the `narration` array.

## Recommended next improvements

- Add richer SVG motion paths and particle streams
- Add industry-specific background illustration overlays
- Add client branding and logo lockups
- Add a final "same platform, different intent" morph animation
- Add JSON-driven presenter notes panel
- Add a mini mock application screen that opens after composition

## Suggested talk track

> The enterprise defines intent once.  
> UniWeave structures the experience layer.  
> UniScale composes workflows, documents, and business logic.  
> UniStack provisions the operational backbone across agents, data, and cloud.  
> UniProtect enforces security, access, and auditability.  
> In minutes, these reusable building blocks become a live enterprise AI application.

## Notes

- Narration uses the browser's built-in Web Speech API when available.
- No external libraries are required.
- This is ideal for GitHub Pages because it is fully static.