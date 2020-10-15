#!/bin/bash
/usr/bin/wget -q 'https://demo.terminkalender.top/demotermine.csv' -O /home/nodejs/geocode/demotermine.csv
/usr/bin/python3 /home/nodejs/geocode/geocode.py
