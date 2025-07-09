# python get_postnames.py > path.txt

import os

for f in os.listdir():
    if os.path.isdir(f):
        print("'/post/",f,"',",sep="")