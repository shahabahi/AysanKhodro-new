FROM node:20-alpine AS builder

RUN npm cache clean --force

FROM nginx:stable-alpine
LABEL version="1.1"


COPY /nginx.conf  /etc/nginx/nginx.conf
COPY /nginx.conf  /usr/share/nginx/html
COPY /dist/aysan-khodro /usr/share/nginx/html

EXPOSE 9000

CMD ["nginx", "-g", "daemon off;"]
