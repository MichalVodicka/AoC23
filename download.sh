#!/bin/sh
session_id=$(cat ./session)

curl https://adventofcode.com/2023/day/$1/input --output ./src/day$1/input.txt --cookie "session=$session_id"
