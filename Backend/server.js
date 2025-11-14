import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`Server Runnning On Port ${process.env.PORT}`);
    
});