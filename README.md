# Labake Blooms

Static birthday site. HTML, CSS and vanilla JS. No backend, nothing stored.

## Files
- `index.html`, `styles.css`, `script.js`
- `assets/` holds her two photos and the two video clips (swap files, keep the names)

## Edit
- Price, quick picks, WhatsApp number and account number: `CONFIG` line at the top of `script.js` (`C={price,opts,wa,acct,max}`).
- Account name and bank: in `index.html`, inside the `#pay` section.
- Wording: plain text in `index.html`.

## Run / deploy
Open `index.html`, or run `python3 -m http.server 8000`.
Deploy by dragging the folder into Vercel, Netlify or Cloudflare Pages (no build step).
