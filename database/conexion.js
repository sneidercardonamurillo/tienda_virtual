   const mongoose = require("mongoose");

   const conexion = async()=>{
      
      try{

         await mongoose.connect("mongodb://127.0.0.1:27017/blog");

         console.log("conexions exictosa a mi database");

      } catch (error){
         console.log(error)
         throw("no se a podido conectar ala database");
      }
   }

   module.exports = {
      conexion
   }