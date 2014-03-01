# PILOT-COLLECTOR

PILOT-COLLECTOR 는 웹상에 데이터를 크롤링하여 데이터를 수집하는 파이프라인을 제공한다.  
alpha 버전은 RSS 데이터만 지원한다.

## Prerequisites

* [node.js](http://www.nodejs.org/)

* [npm](http://www.npmjs.org/)

* [redis](http://www.redis.io/)

* [mongodb](http://www.mongodb.org/)

* 사전에 위의 시스템 들이 설치 되어 있어야 하며 실행되고 있어야지 테스트가 가능하다. 

## Installation

    $ git clone https://github.com/PROJECT-BIGMAMA/PILOT-COLLECTOR.git
    $ cd PILOT-COLLECTOR
    $ npm install
    $ ./pilot-collector



## Trouble shooting


`better_request` 모듈에서 사용하는 `node-icu-charset-detector` 를 설치 때 에러가 발생할 수 있다. [이곳](https://github.com/mooz/node-icu-charset-detector#Installation)을 참조하여 해결한다.

. 윈도우 운영체제는 지원하지 않는다. 
