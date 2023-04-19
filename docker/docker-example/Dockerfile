# 어떤 베이스 이미지를 쓸 건지 명시
FROM node:16-alpine

# 어떤 디렉토리에 우리의 어플리케이션을 복사할지 경로 설정
# 리눅스의 WORKDIR은 cd와 같은 명령어
WORKDIR /app

# package.json과 package-lock 파일을 현재 디렉토리인 /app에 복사
COPY package.json package-lock.json ./

# 
# npm install -> package.json에 명시된 모든 라이브러리 설치하게된다.
# npm install은 라이브러리의 최신버전이 등장하면 최신버전으로 다운로드를 한다.
# RUN npm install

# npm ci -> package-lock에 명시된 버전으로 라이브러리를 설치하게된다.
# npm install 보다 npm ci로 실행하는게 더 좋다.
RUN npm ci

# 소스 파일을 복사해온다.
COPY index.js . 

# node를 사용하여 index.js를 실행하는 명령어
ENTRYPOINT [ "node", "index.js" ]

# 도커 명령어를 작성할 때는 제일 빈번하게 변경되는 사항을 제일 마지막에 적어주는게 좋다.
# 변경 사항 이전의 파일은 그대로 두고 이후의 파일만 새로 만들기 때문에 빌드 시간을 단축할 수 있으며 효율적이다.

# 도커 파일 작성 이후 명령어

# 1. 도커 이미지 파일 생성
# docker build -f Dockerfile -t fun-docker .   
# .(현재위치) => build context 도커파일 생성에 필요한 파일의 위치를 알려준다.
# -f => 어떤 도커파일을 사용할 것인지 명시
# -t => 도커파일의 이름을 설정

# 2. 컨테이너 실행
# docker run -d -p 8080:8080 fun-docker
# -d(detached) : 백그라운드에서도 계속 동작하도록 설정
# -p : 로컬 호스트와 도커 컨테이너의 포트를 연결하기 위한 설정

# docker images => 로컬 머신에 만들어진 이미지들을 확인가능하다
# docker ps : 현재 실행중인 컨테이너 리스트 확인 가능