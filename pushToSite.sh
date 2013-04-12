#!/bin/sh

# This script pushes the contents of the arrayoftalks directory to
# the actual web server.   This only works if your CSIL username
# has access to the webserver, of course.

read -p "CSIL Username:" username

scp -r arrayoftalks/* ${username}@csil.cs.ucsb.edu:/cs/http/projects/arrayoftalks


