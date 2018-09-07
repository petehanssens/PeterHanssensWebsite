FROM python:3.6
MAINTAINER Peter Hanssens <phanssens1@gmail.com>


RUN apt-get update

RUN apt-get install -y python-pip netcat
RUN apt-get install -y python-dev python3-dev

RUN pip install pip --upgrade
RUN pip install virtualenv
RUN pip install virtualenvwrapper
RUN pip install tox
RUN pip install awscli==1.15.70
RUN apt-get install apt-transport-https
# RUN apt-get install curl python-software-properties -y
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install nodejs -y
RUN node -v && npm -v 
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN  apt-get update && apt-get install yarn
RUN yarn --version

WORKDIR /usr/src/app

RUN yarn install