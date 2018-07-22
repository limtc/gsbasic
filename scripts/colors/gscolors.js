// Apple IIGS Colors - by Lim Thye Chean

hgr

for i = 0 to 15 {
    hcolor = i
    rect i * 40, 0, 40, 370
    hcolor = 15
    hprint i at i * 40 + 15, 380
}

inverse
print " Super Hires Colors "
normal
print "0: Black  1: Dark Gray  2: Brown  3: Purple"
print "4: Blue  5: Dark Green  6: Orange  7: Red"
print "8: Flesh  9: Yellow  10: Green  11: Light Blue"
print "12: Lilac  13: Peri Blue  14: Light Gray  15: White"
