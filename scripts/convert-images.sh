#!/bin/sh

folder=./public/

for file in $(find $folder -type f); do
  xpath=${file%/*}
  fileName=${file##*/}
  ext=${fileName##*.}

  if [[ "$ext" != "jpg" && "$ext" != "png" && "$ext" != "jpeg" ]]; then
    echo Skip $file...
    continue
  fi
  
  fileName=${fileName%.*}

  cwebp $file -q 20 -resize 1280 720 -o $xpath/$fileName.thumbnail.webp
  cwebp $file -size 26000 -q 5 -resize 1920 1080 -o $xpath/$fileName.1x.webp
  cwebp $file -size 42000 -q 20 -resize 1920 1080 -o $xpath/$fileName.2x.webp
  cwebp $file -size 55000 -q 45 -resize 1920 1080 -o $xpath/$fileName.4x.webp

  rm -rf $file
  echo $file are converter

done
