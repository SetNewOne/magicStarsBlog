# 部署指南

本文档介绍如何将博客部署到 Linux 服务器。

## 本地构建

```bash
# 安装依赖
npm install

# 开发模式（本地预览）
npm run dev

# 生产构建
npm run build

# 构建输出目录
docs/.vuepress/dist/
```

## 服务器要求

- Linux 服务器（Ubuntu/CentOS/Debian）
- Nginx 已安装
- SSH 访问权限

## 部署步骤

### 方式一：使用部署脚本

1. 编辑 `deploy.sh`，配置服务器信息：
   ```bash
   SERVER_HOST="你的服务器IP"
   SERVER_USER="root"
   SERVER_PORT="22"
   ```

2. 运行部署脚本：
   ```bash
   bash deploy.sh
   ```

### 方式二：手动部署

1. **本地构建**：
   ```bash
   npm run build
   ```

2. **上传文件到服务器**：
   ```bash
   # 使用 scp
   scp -r docs/.vuepress/dist/* user@server:/var/www/blog/

   # 或使用 rsync
   rsync -avz docs/.vuepress/dist/ user@server:/var/www/blog/
   ```

3. **配置 Nginx**：
   复制 `docs/deploy/nginx.conf` 到服务器：
   ```bash
   scp docs/deploy/nginx.conf user@server:/etc/nginx/sites-available/blog
   ```

4. **启用站点配置**：
   ```bash
   # 创建链接
   ln -s /etc/nginx/sites-available/blog /etc/nginx/sites-enabled/blog
   
   # 测试配置
   nginx -t
   
   # 重启 Nginx
   systemctl reload nginx
   ```

### 方式三：使用 Git（自动化部署）

1. 在服务器上创建仓库：
   ```bash
   mkdir -p /var/repo/blog.git
   cd /var/repo/blog.git
   git init --bare
   ```

2. 创建钩子文件：
   ```bash
   cat > /var/repo/blog.git/hooks/post-receive << EOF
   #!/bin/bash
   GIT_WORK_TREE=/var/www/blog git checkout -f
   EOF
   
   chmod +x /var/repo/blog.git/hooks/post-receive
   ```

3. 本地添加远程仓库：
   ```bash
   git remote add server user@server:/var/repo/blog.git
   ```

4. 部署：
   ```bash
   # 构建后推送到服务器
   npm run build
   git add .
   git commit -m "deploy"
   git push server master
   ```

## 验证部署

- 访问服务器 IP 或域名
- 检查静态资源是否正常加载
- 刷新页面测试

## 常见问题

### 1. 页面刷新 404

确保 Nginx 配置了 `try_files $uri $uri/ /index.html;`

### 2. 静态资源加载失败

检查文件路径是否正确，确认 Nginx root 目录配置

### 3. 权限问题

```bash
chown -R www-data:www-data /var/www/blog
chmod -R 755 /var/www/blog
```

## 更新博客

```bash
# 修改内容后重新构建部署
npm run build

# 重新同步文件
rsync -avz docs/.vuepress/dist/ user@server:/var/www/blog/
```

## SSL/HTTPS 配置

可以使用 Let's Encrypt 免费证书：

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com

# 自动续期
sudo certbot renew --dry-run
```