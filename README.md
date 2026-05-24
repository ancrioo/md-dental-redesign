# MD Dental Premium Redesign

Production-ready static redesign for MD Dental, built with pure HTML5, CSS3 and vanilla JavaScript.

## Preview

Run a local static server from this folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Structure

- `index.html` contains the complete semantic page for reliable static deployment.
- `assets/css/` contains modular CSS files for each major section.
- `assets/js/` contains small vanilla JavaScript modules for navbar, reveal animations, testimonials, FAQ and appointment form flow.
- `assets/images/` contains real MD Dental images downloaded from the existing website for the redesign demo.
- `assets/icons/` is reserved for future custom icon assets.

## Deployment

Upload the `project/` folder to Netlify, Vercel, GitHub Pages or any static hosting provider. No build step is required.

## Demo Notes

The appointment form validates name and phone, then opens WhatsApp with a pre-filled appointment request for `9082965269`. Contact links, phone, email and map are ready for client demo use.
