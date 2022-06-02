import express from 'express'
import shell from 'shelljs'
const app = express()
const port = 4000

app.get('/api/is_server_started', (_, res) => {
  const is_connected = shell.exec('../scripts/is_server_started.sh').code
  res.status(200).send({
    is_connected: is_connected
  })
})

app.post('/api/start_server', (_, res) => {
  const is_already_started = shell.exec('../scripts/start_server.sh').code

  if (is_already_started) {
    res.status(200).send({
      already_started: true,
      success: false
    })
  } else {
    res.status(200).send({
      already_started: true,
      success: true
    })
  }
})

app.post('/api/stop_server', (_, res) => {
  const is_already_stopped = shell.exec('../scripts/stop_server.sh').code

  if (!is_already_stopped) {
    res.status(200).send({
      already_stopped: true,
      success: false
    })
  } else {
    res.status(200).send({
      already_stopped: false,
      success: true
    })
  }
})

app.listen(port, () => {
  console.log(`Successfully connected to port ${port}`)
})
