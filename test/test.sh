#!/bin/bash
RESULT=`node j-quote-command test/input1.txt | diff test/input1-quoted.txt -`
if [ -z "$RESULT" ] 
then
	return 0
else
	return 1
fi