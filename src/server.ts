import express from 'express';

const app = express();

app.get('/', (request, response) =>{
  return response.json({messsage: 'Projeto Sidor Back-end'});
});


app.listen(3334, () =>{
  console.log('Server is runing');
})
