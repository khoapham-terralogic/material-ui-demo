#BUILD OUR APPLICATION
npm run build

#move to build folder
cd build

#copy index.html to 200.html
cp index.html 200.html

surge . khoapham.terralogic.surge.sh

