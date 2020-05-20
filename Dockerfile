FROM mongo:4.0.5
ADD scripts/messaging_service.js /docker-entrypoint-initdb.d
RUN chmod a+r /docker-entrypoint-initdb.d/*