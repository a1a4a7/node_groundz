#!/bin/bash

# 创建主目录和子目录
mkdir -p services/node-api
mkdir -p services/worker
mkdir -p databases/mysql
mkdir -p databases/mongodb
mkdir -p infra/docker
mkdir -p infra/kubernetes
mkdir -p ci-cd/github-actions
mkdir -p ci-cd/jenkins

# 在每个目录中添加 .gitkeep 文件
find your-monorepo-name -type d -exec touch {}/.gitkeep \;

# 创建 README 和 .gitignore 文件
touch README.md
echo "node_modules/" > .gitignore
echo "log/" >> .gitignore
echo "*.env" >> .gitignore

# 完成提示
echo "Monorepo structure has been created successfully."
