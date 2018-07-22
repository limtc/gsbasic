// Lores colors - by Lim Thye Chean

gr
inverse
print " Lores Colors "
normal
print "0: Black  1: Red  2: Dark Blue  3: Purple"
print "4: Dark Green  5: Gray  6: Blue  7: Light Blue"
print "8: Brown  9: Orange  10: Dark Gray  11: Pink"
print "12: Green  13: Yellow  14: Aqua  15: White"

for i = 0 to 15 {
    color = i
    vlin 0, 39 at i * 2 + 4
    vlin 0, 39 at i * 2 + 5
}
