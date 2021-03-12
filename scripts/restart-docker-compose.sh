#!/bin/bash

docker-compose down

docker volume rm todo_todo-postgres-data

docker-compose rm

docker image rm todo_todo_server

docker-compose up -d
