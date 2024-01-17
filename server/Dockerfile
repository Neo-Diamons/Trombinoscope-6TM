# Use an official PHP runtime as a parent image
FROM php:latest

WORKDIR /server

# Install Symfony CLI
RUN curl -sS https://get.symfony.com/cli/installer | bash

COPY . /server

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# install PHP extensions
RUN apt-get update && apt-get install -y \
    git \
    libpq-dev \
    libpng-dev \
    libjpeg-dev \
    libwebp-dev

ENV DATABASE_URL "postgresql://postgres:postgres@db:5432/trombiDb?serverVersion=15&charset=utf8"

RUN docker-php-ext-configure gd --with-jpeg --with-webp
RUN docker-php-ext-install pdo pdo_pgsql gd

# Install dependencies
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN composer install

# Expose the port that the Symfony app will run on (typically 8000)
EXPOSE 8080

# Start the Symfony app
CMD /root/.symfony5/bin/symfony server:start --no-tls --allow-http --port=8080 --dir=/server