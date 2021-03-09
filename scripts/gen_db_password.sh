#!/bin/bash

openssl rand -base64 30 | tr '+/' '-_'