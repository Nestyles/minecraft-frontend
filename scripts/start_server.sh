if screen -list | grep -q minecraft-serv; then
  echo "server is already started"
  exit 1
else
  screen -dmS minecraft-serv
  screen -S minecraft-serv -p 0 -X stuff "java -Xmx4096M -Xms4096M -jar server.jar nogui\r"
fi
