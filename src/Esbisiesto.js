function Esbisiesto(numero) {
    let resul = false
    if(numero % 400 == 0)
    {
        resul= true
    }else{
        resul= false
    }
    return resul
  }
  
  export default Esbisiesto;