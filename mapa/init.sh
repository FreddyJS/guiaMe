#!/bin/bash
ubicacionMapa=~/GNS3/projects/
mapa=mapa_prueba/mapa_prueba.gns3
gns3 -q $ubicacionMapa$mapa &
tiempo=90
echo "Cargando mapa... "
echo -n "0%..."
for(( c=1; c<=$tiempo; c++))
do
 let aux=$c*100/$tiempo
 let aux2=aux%10
 if [ $aux2 -eq 0 ]
 then 
  echo -n $aux"%"
  if [ $c -lt $tiempo ] 
  then
    echo -n "..."
  fi
 fi
 sleep 1
done

vboxmanage guestcontrol "ubu" --username asd --password 123 run /media/sf_compartido/calc_rutas.sh
tiempo=20
echo -e "\n\nObteniendo rutas... "
echo -n "0%..."
for(( c=1; c<=$tiempo; c++))
do
 let aux=$c*100/$tiempo
 let aux2=aux%10
 if [ $aux2 -eq 0 ]
 then 
  echo -n $aux"%"
  if [ $c -lt $tiempo ] 
  then
    echo -n "..."
  fi
 fi
 sleep 1
done

echo -e '\n\nParseando rutas calculadas...\n'
python3 ~/Clase/lpro/compartido/leer_archivos.py 

echo 'Cerrando programas...'
pkill -9 dynamips
pkill -9 ubridge
(pkill -9 gns3)

vboxmanage controlvm "ubu" poweroff soft