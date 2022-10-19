import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [input, setInput] = useState({
    inputAdulto:'',
    inputCrianca:''
  });

  const [carne, setCarne] = useState(0);
  const [pao, setPao] = useState(0);
  const [cerva, setCerva] = useState(0);
  const [refri, setRefri] = useState(0);

  function handleInput(event:ChangeEvent, key: string) {
    //... values - spread, traz os valores q já existiam antes 
    setInput(values => ({...values, [key]:(event.target as HTMLInputElement).value}));
    
  }

  function funcaoCalcular() {
    const carneAdulto = parseInt(input.inputAdulto) * 0.3;
    const carneCrianca = parseInt(input.inputCrianca) * 0.1;
    const paoAdulto = parseInt(input.inputAdulto) * 4;
    const paoCrianca = parseInt(input.inputCrianca) * 1;
    const cervaAdulto = parseInt(input.inputAdulto) * 2.5;
    const refriCrianca = parseInt(input.inputCrianca) * 1;
    const refriAdulto = parseInt(input.inputAdulto) * 0.5;

    setRefri(refriCrianca + refriAdulto);
    setCerva(cervaAdulto);
    setPao(paoAdulto + paoCrianca);
    setCarne(carneAdulto + carneCrianca);
  }


  return (
    <div className="App">
      <h2 className='titulo'>Churras do Yago</h2>
    <div className='row'>
       <div className='card'>
       <img src="https://www.emporiotambo.com.br/pub/media/resized/1420x874/ves/blog/xchurrasco-para-10-pessoas.jpeg.pagespeed.ic.nIT_3JEmJE.jpg" alt="" />
      <label htmlFor="">Quantidade de Adultos:</label>
      <input type="number" name="qtdAdulto" id="" onChange={(event) => handleInput(event, 'inputAdulto')} value = {input.inputAdulto}/>
      </div>

      <div className='card'>
      <img src="https://images.freeimages.com/images/premium/previews/9907/9907607-girl-doing-the-barbecue.jpg" alt="" />
      <label htmlFor="">Quantidade de Crianças:</label>
        <input type="number" name="qtdCrianca" id="" onChange={(event) => handleInput(event, 'inputCrianca')} value = {input.inputCrianca}/>
      </div> 
      </div>
      <button onClick={()=>funcaoCalcular()}>Calcular</button>


      <hr />
      <h2>Listar de compra:</h2>
      <h3>Integrantes {input.inputAdulto} adultos e {input.inputCrianca} crianças</h3>
      <p>Carne de Boi: {carne} kg</p>
      <p>Pão de Alho: {pao} unidades</p>
      <p>Cerva: {cerva} litros - Apenas maiores de 18 anos</p>
      <p>Guaraná: {refri} litros</p>
    </div>
  );
}

export default App;
