# lotmind.ai is served by Cloud Run (lotmind-site in lotmind-prod), not GitHub Pages: the site's files in nginx.
# cloudbuild.yaml builds this and deploys it on every merge to main.
FROM nginx:1.27-alpine
COPY . /usr/share/nginx/html
