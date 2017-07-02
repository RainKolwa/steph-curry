#!/bin/bash
yarn install && 
cp .env.example .env &&
yarn build && 
rm -r ./dist; 
cp -r ./build ./dist