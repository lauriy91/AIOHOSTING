//JSON con información de las reservas
var contrasenia = [{
    id: 1, username: "Aiohosting", password: "xxxxxx", emailUser: "user@gmail.com"
 }
 ]
 
 class ServerControllerUser {
     constructor() {
 }
     //Método para crear la contraseña
     crearContrasenia(req, res) {
         //Enviamos los datos al cuerpo
         contrasenia.push(req.body);
         //Retornamos mensaje de creacion con exito
         res.status(201).json({ message: "Contraseña creada con exito" });
     }
     
     //Método para Cambiar contraseña
     cambiarContrasenia(req, res){
         let {id, username, password, emailUser} = req.body;
         contrasenia.forEach(element=>{
             if (id == element.id){
                 element.username = username;
                 element.password = password;
                 element.emailUser = emailUser; 
             }
         });
         res.status(200).json({message: "Mensaje enviado con éxito"});
     } 
 }
 
 //Exportamos como default para que se pueda utilizar desde cualquier modulo del proyecto
 exports.default = ServerControllerUser;