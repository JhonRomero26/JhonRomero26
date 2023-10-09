#!/bin/sh

if [ ! -f "$1" ]; then
  echo "File not found: $1"
  exit 1
fi

if [ ! -d "$2" ]; then
  echo "Folder not found: $2"
  exit 1
fi

name=${1##*/}
name=${name%.*}

cwebp $1 -q 20 -resize 1280 720 -o $2/$name.thumbnail.webp
cwebp $1 -size 26000 -q 5 -resize 1920 1080 -o $2/$name.1x.webp
cwebp $1 -size 42000 -q 20 -resize 1920 1080 -o $2/$name.2x.webp
cwebp $1 -size 55000 -q 45 -resize 1920 1080 -o $2/$name.4x.webp
