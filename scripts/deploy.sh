#!/usr/bin/env bash
set -e

cd docker/production

sudo docker compose pull
sudo docker compose up -d
