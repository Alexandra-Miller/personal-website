#!/bin/bash
gcloud compute scp --recurse server/* $USER@$1:~/
gcloud compute ssh $USER@$1 -- "rm -rf ~/*"
gcloud compute ssh $USER@$1 -- "sudo ./setup.sh"
