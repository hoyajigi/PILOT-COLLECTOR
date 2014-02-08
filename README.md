# PILOT-COLLECTOR

PILOT-COLLECTOR 는 RSS 형식의 뉴스 데이터를 크롤링하여 뉴스 기사 데이터를 수집하는 파이프라인을 제공한다.

## Prerequisites

* [node.js](http://www.nodejs.org/)

* [npm](http://www.npmjs.org/)

* [redis](http://www.redis.io/)

앞으로 필요하게 될 것

* [mongodb](http://www.nodejs.org/)

## Installation

    $ npm install

## Quick Start

    $ node cluster.js 1


## Trouble shooting


`better_request` 모듈에서 사용하는 `node-icu-charset-detector` 를 설치 때 에러가 발생할 수 있다. [이곳](https://github.com/mooz/node-icu-charset-detector#Installation)을 참조하여 해결한다.

