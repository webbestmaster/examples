#!/usr/bin/env bash

mocha ./../examples/mocha-js-node/test/test.js

exit 0

printf "Enter first operand\n"
read firstOperand

printf "Enter second operand\n"
read secondOperand

let "sum = $firstOperand + $secondOperand"

printf "sum = $sum\n"

