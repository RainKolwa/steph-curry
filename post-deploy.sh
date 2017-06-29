#!/bin/bash
yarn install && 
yarn build && 
rm -r ./dist; 
cp -r ./build ./dist