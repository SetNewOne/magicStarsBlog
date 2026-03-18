#!/bin/bash

# 博客部署脚本
# 用于将构建好的静态文件部署到 Linux 服务器

# 服务器配置
SERVER_HOST="your-server-ip"
SERVER_USER="root"
SERVER_PORT="22"
SERVER_PATH="/var/www/blog"

# 本地构建目录
BUILD_DIR="docs/.vuepress/dist"

echo "========================================"
echo "    开始部署博客"
echo "========================================"

# 1. 本地构建
echo "[1/4] 构建静态文件..."
npm run build

if [ $? -ne 0 ]; then
    echo "构建失败！"
    exit 1
fi
echo "构建完成！"

# 2. 创建远程目录（如果不存在）
echo "[2/4] 创建远程目录..."
ssh -p $SERVER_PORT $SERVER_USER@$SERVER_HOST "mkdir -p $SERVER_PATH"

# 3. 同步文件
echo "[3/4] 同步文件到服务器..."
rsync -avz --delete \
    -e "ssh -p $SERVER_PORT" \
    --exclude='.git' \
    --exclude='node_modules' \
    $BUILD_DIR/ $SERVER_USER@$SERVER_HOST:$SERVER_PATH/

if [ $? -ne 0 ]; then
    echo "文件同步失败！"
    exit 1
fi
echo "文件同步完成！"

# 4. 验证部署
echo "[4/4] 验证部署..."
ssh -p $SERVER_PORT $SERVER_USER@$SERVER_HOST "ls -la $SERVER_PATH | head -10"

echo ""
echo "========================================"
echo "    部署成功！"
echo "========================================"
echo "访问地址: http://$SERVER_HOST"
echo ""

# 使用 scp 的替代方案（如果没有 rsync）
# scp -r -P $SERVER_PORT $BUILD_DIR/* $SERVER_USER@$SERVER_HOST:$SERVER_PATH/