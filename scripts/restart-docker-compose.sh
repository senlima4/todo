#!/bin/bash

docker-compose down

docker volume rm todo_todo-postgres-data

docker-compose up -d
