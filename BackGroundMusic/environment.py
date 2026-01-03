from musicpy import *

# 创建音符
note1 = chord('C') * 4

# 播放旋律
play(note1, wait=True, bpm=100, instrument=25)
