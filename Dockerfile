FROM nginxinc/nginx-unprivileged:alpine

# Copy website files into Nginx web root
COPY *.html /usr/share/nginx/html/
COPY CSS/ /usr/share/nginx/html/CSS/
COPY JS/ /usr/share/nginx/html/JS/
COPY Assets/ /usr/share/nginx/html/Assets/
COPY images/ /usr/share/nginx/html/images/
COPY fonts/ /usr/share/nginx/html/fonts/

# Copy custom Nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
