#!/bin/bash

echo generate secret key: $(openssl rand -base64 30 | tr '+/' '-_')
