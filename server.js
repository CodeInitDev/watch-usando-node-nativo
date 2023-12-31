import express from 'express'

const app = express()

app.listen(3333, () => {
  console.log('Servidor iniciado')
  console.log('Reload automatico')
  console.log('Denovo')
})