if screen -list | grep -q minecraft-serv; then
  exit 1
else
  exit 0
fi
