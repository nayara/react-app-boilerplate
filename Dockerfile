FROM nginx:1.18-alpine

RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 3000

WORKDIR /rootFolder

COPY ./dist /rootFolder/calendar

CMD ["nginx", "-g", "daemon off;"]
