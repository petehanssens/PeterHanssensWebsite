FROM ubuntu:18.04
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
RUN apt install nodejs -y
RUN apt install npm -y
RUN node -v && npm -v 
RUN npm install yarn -g
RUN yarn --version

ENV INSTALL_PATH /usr/src/app
RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

# Copy the source from your workstation to the image at the WORKDIR path.
COPY . .

RUN yarn install