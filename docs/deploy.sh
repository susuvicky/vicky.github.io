#!/usr/bin/env bash

# 自动部署脚本
set -e
# 构建项目
npm run build
# 进入到构建输出目录
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
# push到新建仓库的 gh-pages 分支
git push -f https://github.com/susuvicky/vicky.github.io.git gh-pages

cd -


