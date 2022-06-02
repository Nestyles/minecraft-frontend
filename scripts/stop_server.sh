if ! screen -list | grep -q minecraft-serv; then
  echo "server is already stopped"
  exit 84
else
  screen -S minecraft-serv -p 0 -X stuff "/stop\r"
  while screen -list | grep -q minecraft-serv; do
    sleep 5
    screen -S minecraft-serv -p 0 -X stuff "exit\r"
  done
fi
