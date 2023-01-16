window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    console.log('Conexion ok');
//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------// 
const exRegs = {
    exRegAlfa: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
    exRegEmail: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
    exRegPass:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,8}/,
    exRegMayu: /[A-Z]/,
    exRegMinu: /[a-z]/,
    exRegNum: /[0-9]/,
    exRegEsp: /[$@$!%*?&]/,
    exRegMin: /.{6,}/,
    exRegMax: /.{8}/,
  };
let elemetos = [
        {input:title,
        ok:false,
        msg:'Debe ingresar un titulo'
     },
     {input:rating,
        ok:false,
        msg:'Debe ingresar una calificaciòn'
     },
     {input:awards,
        ok:false,
        msg:'Debe ingresar la cantidad de premios'
     },
     {input:release_date,
        ok:false,
        msg:'Debe ingresar una fecha'
     },
     {input:length,
        ok:false,
        msg:'Debe ingresar una duración'
     },
     {input:genre_id,
        ok:false,
        msg:'Debe ingresar un género'
     },
    ]   
document.getElementById('title').focus()
document.getElementById('title').addEventListener("blur", function ({ target }) {
   
      if( this.value.trim() == ''){
        target.classList.add("is-invalid")
        document.getElementById('title_error').innerText="Debe ingresar un titulo"
        elemetos[0].msg="Debe ingresar un titulo"
        elemetos[0].ok=false
      }else{
        target.classList.remove("is-invalid")
        target.classList.add("is-valid")
        document.getElementById('title_error').innerText=''
        elemetos[0].msg=""
        elemetos[0].ok=true
        }
    
  });
document.getElementById('rating').addEventListener("blur", function ({ target }) {
    switch (true) {
        case !this.value.trim():
            target.classList.add("is-invalid")
            document.getElementById('rating_error').innerText="Debe ingresar una calificaciòn"
            elemetos[1].msg="Debe ingresar una calificaciòn"
            elemetos[1].ok=false
        case !(this.value.trim() >= 0 && this.value.trim() <= 10 ):
            target.classList.add("is-invalid")
            document.getElementById('rating_error').innerText="La calificaciòn debe ser un nº entre 0 y 10"
            elemetos[1].msg="La calificaciòn debe ser un nº entre 0 y 10"
            elemetos[1].ok=false
          break;
        default:
            target.classList.remove("is-invalid")
            target.classList.add("is-valid")
            document.getElementById('rating_error').innerText=''
            elemetos[1].msg=""
            elemetos[1].ok=true
          break;
      }
});
document.getElementById('awards').addEventListener("blur", function ({ target }) {
    switch (true) {
        case !this.value.trim():
            target.classList.add("is-invalid")
            document.getElementById('awars_error').innerText="Debe ingresar la cantidad de premios"
            elemetos[2].msg="Debe ingresar la cantidad de premios"
            elemetos[2].ok=false
        case !(this.value.trim() >= 0 && this.value.trim() <= 10 ):
            target.classList.add("is-invalid")
            document.getElementById('awars_error').innerText="Los premios deben ser un nº entre 0 y 10"
            elemetos[2].msg="Los premios deben ser un nº entre 0 y 10"
            elemetos[2].ok=false
          break;
        default:
            target.classList.remove("is-invalid")
            target.classList.add("is-valid")
            document.getElementById('awars_error').innerText=''
            elemetos[2].msg=""
            elemetos[2].ok=true
          break;
      }
});
document.getElementById('release_date').addEventListener("blur", function ({ target }) {
   
    switch (true) {
        case !this.value.trim():
            target.classList.add("is-invalid")
            document.getElementById('release_date_error').innerText="Debe ingresar una fecha"
            elemetos[3].msg="Debe ingresar una fecha"
            elemetos[3].ok=false
        break;
        default:
            target.classList.remove("is-invalid")
            target.classList.add("is-valid")
            document.getElementById('release_date_error').innerText=''
            elemetos[3].msg=""
            elemetos[3].ok=true
          break;
      }
});
document.getElementById('length').addEventListener("blur", function ({ target }) {
    
    switch (true) {
        case !this.value.trim():
            target.classList.add("is-invalid")
            document.getElementById('length_error').innerText="Debe ingresar una duración"
            elemetos[4].msg="Debe ingresar una duración"
            elemetos[4].ok=false
        break;
        case !(this.value.trim() >= 60 && this.value.trim() <= 360 ):
            target.classList.add("is-invalid")
            document.getElementById('length_error').innerText="Debe ingresar un nº entre 60 y 360"
            elemetos[4].msg="Debe ingresar un nº entre 60 y 360"
            elemetos[4].ok=false
        break;
        default:
            target.classList.remove("is-invalid")
            target.classList.add("is-valid")
            document.getElementById('length_error').innerText=''
            elemetos[4].msg=""
            elemetos[4].ok=true
          break;
      }
});
document.getElementById('genre_id').addEventListener("blur", function ({ target }) {
    
    switch (true) {
        case !this.value.trim():
            target.classList.add("is-invalid")
            document.getElementById('genre_id_error').innerText="Debe ingresar un género"
            elemetos[5].msg="Debe ingresar un género"
            elemetos[5].ok=false
        break;
        default:
            target.classList.remove("is-invalid")
            target.classList.add("is-valid")
            document.getElementById('genre_id_error').innerText=''
            elemetos[5].msg=""
            elemetos[5].ok=true
          break;
      }
});

document.getElementById('formulario_form').addEventListener("submit", function(e){

    e.preventDefault()
    let error = false;
    document.getElementById('ul_errores').innerHTML=''
    const elements = this.elements;
    for (let i = 0; i < elements.length - 1; i++) {
        
        if(!elements[i].value.trim() || elements[i].classList.contains('is-invalid')){
            elements[i].classList.add('is-invalid')
            document.getElementById('ul_errores').innerHTML+=`<li>${elemetos[i].msg}</li>`
            document.getElementById('ul_errores').classList.add('alert-warning')
           error = true;
        }
    }
    error && document.getElementById('ul_errores').classList.add('alert-warning')
    !error && alert('La película se guardó satisfactoriamente')
    !error && this.submit()
})
}