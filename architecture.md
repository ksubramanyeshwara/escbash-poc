
# DevSecOps Static Website Architecture

## Application
Plain HTML, CSS and JavaScript.

## Web Server
Nginx running inside Docker.

## Containerization
Docker packages the static website and
Nginx configuration into an image.

## Source Control
Git and GitHub.

## Security
Gitleaks, Semgrep and Trivy.

## CI/CD
GitHub Actions.

## Cloud Infrastructure
Amazon ECR and Amazon EC2.

## Deployment Flow
GitHub -> GitHub Actions -> Security Scanning
-> Docker Build -> Amazon ECR -> Amazon EC2
