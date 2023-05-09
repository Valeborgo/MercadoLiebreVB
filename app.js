const express=require('express');
const path=require('path');

const app=express();
const PORT = process.env.PORT || 3001;

const publicPath=path.resolve(__dirname,'./public');
app.use(express.static('public'));
app.listen(PORT, () =>console.log('servidor corriendo en el puerto'+ PORT));





app.get('/', (req, res) => {
    const rutaCompleta = path.join(__dirname, './views/home.html');
    res.sendFile(rutaCompleta);
});



/*app.listen(3001,()=>{
    console.log('Servidor escuchando en el puerto 3001');
})*/