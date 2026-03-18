# ---- Build stage ----
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./
RUN npm ci && npm cache clean --force

COPY . .
RUN npm run build

# ---- Run stage ----
FROM nginx:1.25-alpine

LABEL org.opencontainers.image.title="Emireq Startup Dashboard"
LABEL org.opencontainers.image.description="Startup dashboard for Google Cloud Run"

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Configure nginx to log to stdout/stderr (Cloud Run requirement)
RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

# Add custom nginx config
COPY nginx.conf /etc/nginx/conf.d/

# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html

# Set permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /var/run

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
