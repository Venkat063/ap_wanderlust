# AP Wanderlust — Andhra Pradesh Tourism Site

An interactive, single-page guide to Andhra Pradesh's 26 districts. Pure
HTML/CSS/JS at the root (no build step needed to just view it), with
optional Maven/WAR, Docker, and Kubernetes deployment paths.

## Quick start (no build tools)

Just open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy free, no server needed

- **GitHub Pages**: repo Settings → Pages → Deploy from branch → `main` / `root`.
  Goes live at `https://<username>.github.io/<repo>/`.
- **Netlify / Vercel**: connect the repo, no build command, publish directory `/`.

## Build as a WAR (Maven)

```bash
mvn clean package
```
Produces `target/apwanderlust.war`. `pom.xml` builds straight from the repo
root, so there's only one copy of the site files — no `src/main/webapp`
duplication needed.

## Run in Docker

```bash
docker build -t apwanderlust:1.0.0 .
docker run -p 8080:8080 apwanderlust:1.0.0
# visit http://localhost:8080
```

## Deploy to Kubernetes

```bash
docker build -t your-registry/apwanderlust:1.0.0 .
docker push your-registry/apwanderlust:1.0.0
# edit the `image:` line in deployment.yaml to match, then:
kubectl apply -f deployment.yaml
```

## What's inside

```
├── index.html          → all page sections
├── css/style.css        → design tokens, layout, animations, dark/light mode
├── js/data.js            → 26-district dataset
├── js/content.js         → state-level content (festivals, cuisine, people…)
├── js/main.js            → renders everything + interactions
├── WEB-INF/web.xml       → servlet descriptor (used by the WAR build)
├── pom.xml               → Maven build → WAR
├── Dockerfile             → multi-stage build → Tomcat image
├── deployment.yaml       → Kubernetes Deployment + Service
└── .gitignore
```

## Pushing this to GitHub

This zip is **plain files with no git history** — start fresh so there's
nothing to conflict with. From inside the unzipped folder:

```bash
git init
git add -A
git commit -m "Initial commit: AP Wanderlust"
git branch -M main
git remote add origin https://github.com/Venkat063/apwanderlust.git
git push -u origin main
```

**Why the earlier `src refspec main does not match any` error happened:**
that error means the local repo had **no commits yet** on that branch —
either `git commit` hadn't been run, or it ran in the wrong folder, or the
`.git` folder didn't survive a zip/unzip round trip. Running the four
commands above in order (`init` → `add` → `commit` → `push`) avoids all of
that. You can check `git log --oneline` before pushing — if it errors with
"does not have any commits yet", the commit step above is what was missing.

If GitHub already created a repo with its own initial commit (e.g. you
ticked "Add a README" when creating it), pull first to avoid a conflict:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```
