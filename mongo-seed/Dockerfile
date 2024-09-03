FROM mongo

COPY init.json /init.json

# CMD mongoimport --uri mongodb://minh:1234@nodeexpress.ocw3i4g.mongodb.net/TASK_MANAGER?retryWrites=true --collection tasks --type json --file /init.json --jsonArray