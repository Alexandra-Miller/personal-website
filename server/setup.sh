#!/bin/bash

# get deps if not avalible as packages
wget https://github.com/yudai/gotty/releases/download/v1.0.1/gotty_linux_386.tar.gz

# update package manager and upgrade existing packages
apt-get update
apt-get upgrade -y

# install non-package deps
tar -C /usr/bin -xzf gotty_linux_386.tar.gz 

# install docker ce
apt-get remove docker docker-engine docker.io containerd runc
curl -sSL https://get.docker.com/ | sh 
systemctl start docker
systemctl enable docker

# cleanup deps
rm gotty_linux_386.tar.gz

#edit gotty config
echo "port = \"80\"
timeout = 0
title_format = \"AS-website\"
" | cat > ~/.gotty

#build docker
docker build -t "alexandra-systems" .

#startup
nohup gotty -w docker run -it --rm alexandra-systems /bin/ash --login &
