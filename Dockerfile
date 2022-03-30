FROM nginx:alpine

RUN apk add --update openssl && \
    rm -rf /var/cache/apk/*
RUN cd /etc/ssl/ &&\
    openssl req -new -newkey rsa:4096 -days 365 -nodes -x509 -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=localhost" -keyout nginx.key  -out nginx.crt

COPY nginx-config/default.conf /etc/nginx/conf.d/
COPY /dist /usr/share/nginx/html
COPY /omrs-app-shell /usr/share/nginx/html
