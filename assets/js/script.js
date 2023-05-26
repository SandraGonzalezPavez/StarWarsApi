const URL_BASE = 'https://swapi.dev/api/people/';


let carta, carta2, carta3, boton, boton2, boton3, datos, datos2, datos3, notGo = false, gen, gen2, gen3;

const request = async (url) => {
  const results = await fetch(url);
  const response = await results.json();
  return response;
}

function pintaTarjeta(tarjetas, personaje){
  tarjetas.innerHTML += ` 
  <div id="tarjSola" class="card mb-4 container " style="max-width: 350px; max-height: 100px" margin-top: 5%>

<div class="col-md-8">
<div class="card-body ">
  <h5 class="card-title" "style= text-align=center">  ${personaje.name}</h5>
  <p class="card-text"> ${personaje.height}cms.  - ${personaje.mass}kg.</p>
 </div>
</div>

</div>
`;
}

async function *tarjetaGenerador() {
  const carta1 = document.getElementById('carta1');
  for (let i=1; i<6; i++) {
    const personaje = await request(URL_BASE + i);
    pintaTarjeta(carta1, personaje);
      yield personaje.name;
      
       
  }
}
async function *tarjetaGenerador2() {
  const carta2 = document.getElementById('carta2');
  for (let i=6; i<11; i++) {
    const personaje = await request(URL_BASE + i);
    pintaTarjeta(carta2, personaje);
      yield personaje.name;
      
       
  }
}
async function *tarjetaGenerador3() {
  const carta3 = document.getElementById('carta3');
  for (let i=11; i<16; i++) {
    const personaje = await request(URL_BASE + i);
    pintaTarjeta(carta3, personaje);
      yield personaje.name;
      
       
  }
}

const personajePrincipal = (event) => {
    event.preventDefault();
    if (!notGo) {
  
        const { value, done } = gen.next();
        console.log('value:', value);
        console.log('done:', done);
        notGo = done;
    
    } else {
        console.log('Nada más que mostrar');
       
        
    }
  
}
const personajeSecundario = (event) => {
  event.preventDefault();
  if (!notGo) {

      const { value, done } = gen2.next();
      console.log('value:', value);
      console.log('done:', done);
      notGo = done;
  
  } else {
      console.log('Nada más que mostrar');
      
  }

}

const personajeSignificativo = (event) => {
  event.preventDefault();
  if (!notGo) {

      const { value, done } = gen3.next();
      console.log('value:', value);
      console.log('done:', done);
      notGo = done;
  
  } else {
      console.log('Nada más que mostrar');
      
  }

}

document.addEventListener('DOMContentLoaded', async () => {
  
  boton = document.getElementById('principal');
  boton2 = document.getElementById('secundario');
  boton3 = document.getElementById('significativo');
  
  gen = tarjetaGenerador();
  gen2 = tarjetaGenerador2();
  gen3 = tarjetaGenerador3();
  

  boton.addEventListener('mouseover',personajePrincipal);
  boton2.addEventListener('mouseover',personajeSecundario);
  boton3.addEventListener('mouseover',personajeSignificativo);
});





