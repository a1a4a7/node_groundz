#!/bin/bash

mkdir -p src/api/controllers
mkdir -p src/api/routes
mkdir -p src/api/middlewares
mkdir -p src/config
mkdir -p src/services
mkdir -p src/models
mkdir -p src/utilities
mkdir -p src/lib
mkdir -p public
mkdir -p views

touch src/api/controllers/.gitkeep
touch src/api/routes/.gitkeep
touch src/api/middlewares/.gitkeep
touch src/config/.gitkeep
touch src/services/.gitkeep
touch src/models/.gitkeep
touch src/utilities/.gitkeep
touch src/lib/.gitkeep
touch public/.gitkeep
touch views/.gitkeep
touch app.js
touch package.json
touch README.md

echo "Node project structure created."
