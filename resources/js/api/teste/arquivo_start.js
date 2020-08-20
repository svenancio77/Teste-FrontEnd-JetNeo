// //Duplicar os campos de inputs
// $(document).ready(function(){
//   $('#nome').keyup(function(){
//     $('#demo').val($(this).val());
//   });
// });

// $(document).ready(function(){
//   $('#email').keyup(function(){
//     $('#demo2').val($(this).val());
//   });
// });


// $(document).ready(function(){
//   $('#telefone').keyup(function(){
//     $('#demo3').val($(this).val());
// });
// });

// $(document).ready(function(){
//   $('#assunto').keyup(function(){
//     $('#demo4').val($(this).val());
// });
// });

// $(document).ready(function(){
//   $('#mensagem').keyup(function(){
//     $('#demo5').val($(this).val());
// });
// });




// //Gravar no SessionStorage
// $(document).ready(function(){
//   $('#formID').submit(function(e){
//     e.preventDefault();
//     sessionStorage.setItem("nome", $('#formID [name="nome"]').val());
//     sessionStorage.setItem("email", $('#formID [name="email"]').val());
//     sessionStorage.setItem("telefone", $('#formID [name="telefone"]').val());
//     sessionStorage.setItem("assunto", $('#formID [name="assunto"]').val());
//     sessionStorage.setItem("mensagem", $('#formID [name="mensagem"]').val());


//     //Limpar formulario//
//     $(document).ready(function(){
//       $('#formID').trigger("reset");
//     });
    

      
//   });
// });




// //recuperar Session
// $(document).ready(function(){
//   $("#recuperar").click(function(){
    
//     var nome = prompt("Digite o nome atualizado: ");
//     var email = prompt("Digite o e-mail atualizado: ");
//     var tel = prompt("Digite o telefone atualizado: ");
//     var assunto = prompt("Digite o assunto atualizado: ");
//     var msg = prompt("Digite sua mensagem atualizada: ");

    
//     if (nome !=null){
//       $("#demo").innerHTML = " " + nome;
//     };

    
//     if (email !=null){
//       $("#demo2").innerHTML = " " + email;
//     };

//     if (tel !=null){
//       $("#demo3").innerHTML = " " + tel;
//     };

//     if (assunto !=null){
//       $("#demo4").innerHTML = " " + assunto;
//     };

//     if (msg !=null){
//       $("#demo5").innerHTML = " " + msg;
//     };

//     document.write("<pre>")
//     document.writeln("NOME: ", nome);
//     document.writeln("E-MAIL: ", email);
//     document.writeln("TELEFONE: ", tel);
//     document.writeln("ASSUNTO: ", assunto);
//     document.writeln("MENSAGEM: ", msg);
//     document.write("</pre>");

//   });
// })