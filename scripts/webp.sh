for file in static/images/*/*.png
do
cwebp -q 80 "$file" -o "${file%.png}.webp"
done