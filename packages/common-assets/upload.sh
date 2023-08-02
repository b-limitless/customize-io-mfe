for file in assets/*; do
    cld uploader upload "$file" folder="social" 
done