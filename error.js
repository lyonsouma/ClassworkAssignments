// "use strict"

const erroHandle = () => {
    try{
     const name = "John";
     name = "lyons";
    }catch(error){
      console.error(error)
    }
}

erroHandle();