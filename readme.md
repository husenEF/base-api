
# Lumen PHP Framework

[![Build Status](https://travis-ci.org/laravel/lumen-framework.svg)](https://travis-ci.org/laravel/lumen-framework)
[![Total Downloads](https://poser.pugx.org/laravel/lumen-framework/d/total.svg)](https://packagist.org/packages/laravel/lumen-framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/lumen-framework/v/stable.svg)](https://packagist.org/packages/laravel/lumen-framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/lumen-framework/v/unstable.svg)](https://packagist.org/packages/laravel/lumen-framework)
[![License](https://poser.pugx.org/laravel/lumen-framework/license.svg)](https://packagist.org/packages/laravel/lumen-framework)

Laravel Lumen is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Lumen attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as routing, database abstraction, queueing, and caching.

## Official Documentation

Documentation for the framework can be found on the [Lumen website](https://lumen.laravel.com/docs).

## INFO
This framework Backend and Frontend , connect with REST API

## PREPARE INSTALL
* `cp .env.example .env` and setup the Database
* run `composer install && yarn install`
* run `php artisan migrate` && `php artisan db:seed`
* `sudo chmod 777 -R storage/app storage/framework storage/logs`
* `php artisan jwt:secret` to generate token 
  
## Tes User
* setup your project with local domain, user virtual host
* `yarn dev` and reload domain
* got to `your-domain.local` it will be redirect to login page
* check Your Database, get some user emal and default password `123456`, *or*
* open postmane App and try post to url `/api/v1/auth/login` with header 
```Content-Type:application/json```
and body 
```
{
    "email": "kleannon@gmail.com",
    "password": "123456"
}
```


## Security Vulnerabilities

If you discover a security vulnerability within Lumen, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

## License

The Lumen framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
