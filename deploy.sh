#!/bin/bash

#delete old instance 
gcloud -q compute instances delete --zone us-central1-a $1

#create new instance
gcloud -q compute instances create $1 \
    --image-project debian-cloud \
    --image-family  debian-9 \
    --zone us-central1-a \
    --machine-type f1-micro \
    --address 35.202.76.6

#copy file to instance and execute setup/start script
gcloud -q compute scp --zone us-central1-a --recurse $PWD/server/* $1:~/
gcloud -q compute ssh $1 --zone us-central1-a -- "sudo ./setup.sh"

#open firewall
gcloud compute instances add-tags $1 \
    --zone us-central1-a \
    --tags http-server
