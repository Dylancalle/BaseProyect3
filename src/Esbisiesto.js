function Esbisiesto(numero) {
    let resul = false
    if(numero % 400 == 0)
    {
        resul= true
    }else{
        resul= false
    }
    if(numero % 100 == 0 && numero % 400 != 0)
    {
        resul = false
    }else{
        resul = true
    }
    
    return resul
  }
  
  export default Esbisiesto;