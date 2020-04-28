for file in */thumb.png
do
cwebp -q 80 "$file" -o "${file%.png}.webp"
done