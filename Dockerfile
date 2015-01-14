FROM teodorescuserban/hdx-base:latest

MAINTAINER Serban Teodorescu, teodorescu.serban@gmail.com

RUN apt-get -qq -y update

RUN apt-get install -qq -y \
    nginx

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN mkdir -p /etc/service/nginx
ADD run /etc/service/nginx/
RUN chmod u+x /etc/service/nginx/run

RUN cp /etc/nginx/nginx.conf /etc/nginx/nginx.orig
RUN echo "daemon off;" >> /etc/nginx/nginx.conf


RUN mv /etc/nginx/sites-available/default /etc/nginx/default.orig
ADD default /etc/nginx/sites-available/

#RUN echo ""                           >> /etc/nginx/sites-available/default
#RUN echo "upstream fpm {"             >> /etc/nginx/sites-available/default
#RUN echo "    server fpm:fpmport;"    >> /etc/nginx/sites-available/default
#RUN echo "}"                          >> /etc/nginx/sites-available/default
#RUN echo ""                           >> /etc/nginx/sites-available/default

EXPOSE 80
EXPOSE 443

RUN /etc/my_init.d/00_regen_ssh_host_keys.sh
CMD ["/sbin/my_init"]

