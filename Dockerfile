FROM ubuntu:latest
RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install apache2 -y
RUN rm -rf /var/www/html/index.html
COPY  . /var/www/html/
RUN mv /var/www/html/html/* /var/www/html/
EXPOSE 80
CMD ["apache2ctl","-D","FOREGROUND"]