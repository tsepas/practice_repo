#!/bin/bash
#print project title
echo -e "\n-- Countdown Timer --\n"
#for loop to countdown numbers by 1st arg
for((i=$1;i>=0;i--))
  do 
    echo $i
    sleep 1
  done 

