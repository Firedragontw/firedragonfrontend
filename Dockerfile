# 使用官方 Node.js 圖像作為基礎圖像
FROM node:14

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 yarn.lock
COPY package.json yarn.lock ./

# 安裝依賴
RUN yarn install

# 複製所有文件
COPY . .

# 構建應用
RUN yarn build

# 使用 nginx 作為靜態文件伺服器
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# 暴露應用埠
EXPOSE 80

# 啟動 nginx
CMD ["nginx", "-g", "daemon off;"]