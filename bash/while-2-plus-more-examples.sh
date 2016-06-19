#!/usr/bin/env bash

printf "just count from 0 to 5\n"

let "i = 0";

str1=some_string_1
str2="somestring 2"

while [ $i != 5 ]
do
    let "i += 1"
    printf "$i\n"
done

printf "i is $i\n"

if [ $i == 5 ]; then
    printf "i == 5!!\n"
else
    printf "i != 5!!\n"
fi


printf "$str1\n"
printf "$str2\n"
printf $str1
printf $str2
printf "\n"



if [ $str1 == $str2 ]; then
    printf "$str1 == $str2\n"
else
    printf "$str1 != $str2\n"
fi


for f in $( ls /var/ ); do
	echo $f
done

myArray=("$@")

for arg in "${myArray[@]}"; do
   echo "$arg"
done

printf "$10\n"