#!/bin/bash

WD=`pwd`

for dir in * ; do
  if [[ -d "$dir" ]]
  then
    echo "$dir"
    cd "$dir" && python3 -m unittest evaluate.py
    cd $WD
  fi
done
