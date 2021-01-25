import express from 'express';

const app = express();

app.get('/', (request, response) =>{
  return response.json({messsage: 'Projeto Sidor Back-end'});
});


app.listen(3333, () =>{
  console.log('Server is runing');
})
