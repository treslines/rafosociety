import React, { Component } from 'react'

export default class GifSlider extends Component {
   render() {

      return (
        

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item">
      <img class="d-block w-100" src="images/i1.webp" alt="Third slide"/>
      {/* <div class="carousel-caption d-sm d-md-block">
        <h5 class="text-sea-700">Super Poderes</h5>
        <p>Sua oportunidade de colecionar um animal mutante. Você conseque identificar qual Super-Heroi eles representam?</p>
      </div> */}
    </div>
    <div class="carousel-item active">
      <img class="d-block w-100" src="images/i2.webp" alt="First slide"/>
      {/* <div class="carousel-caption d-sm d-md-block d-lg">
        <h5 class="text-sea-700">Raridade</h5>
        <p>Com mais de 10 bilhões de traços, nossa coleção será uma das mais diversificadas e detalhadas.</p>
      </div> */}
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/i3.webp" alt="Second slide"/>
      {/* <div class="carousel-caption d-sm d-md-block">
        <h5 class="text-sea-700">Exclusividade</h5>
        <p>Como dono de um NFT, eu ganho um cartão fidelidade exclusivo, que me concede benefícios e facilidades ao redor do mundo!</p>
      </div> */}
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/i4.webp" alt="Third slide"/>
      {/* <div class="carousel-caption d-sm d-md-block">
        <h5 class="text-sea-700">Social</h5>
        <p>Como dono de um NFT, com cada compra que faço, uma doação é feita para instituições de caridade.</p>
      </div> */}
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/i5.webp" alt="Third slide"/>
      {/* <div class="carousel-caption d-sm d-md-block">
        <h5 class="text-sea-700">Descontos Vitalícios</h5>
        <p>Como dono de um NFT, enquanto as parcerias existirem, eu posso solicitar o benefício listado.</p>
      </div> */}
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/i6.webp" alt="Third slide"/>
      {/* <div class="carousel-caption d-sm d-md-block">
        <h5 class="text-sea-700">Alta Resolução</h5>
        <p>Como dono de um NFT, prestigio uma arte criada por prosissional brasileiro que valoriza a fauna brasileira.</p>
      </div> */}
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/i7.webp" alt="Third slide"/>
      {/* <div class="carousel-caption d-sm d-md-block">
        <h5 class="text-sea-700">Redes Sociais</h5>
        <p>Como dono de um NFT, adquiro uma arte digital em alta resulução ideal para quadros, impressões em camisas ou perfis sociais.</p>
      </div> */}
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/i8.webp" alt="Third slide"/>
      {/* <div class="carousel-caption d-sm d-md-block">
        <h5 class="text-sea-700">Receita Recorrente</h5>
        <p>Como empreendedor, oferecendo meus produtos ou serviços, eu fidelizo meus clientes sem gastar nada.</p>
      </div> */}
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/i9.webp" alt="Third slide"/>
      {/* <div class="carousel-caption d-sm d-md-block">
        <h5 class="text-sea-700">Redução de Custos</h5>
        <p>Como empreendedor, aumento meu faturamento e tornando minhas ofertas mais atrativas.</p>
      </div> */}
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/i0.webp" alt="Third slide"/>
      {/* <div class="carousel-caption d-sm d-md-block">
        <h5 class="text-sea-700">Canal de Vendas</h5>
        <p>Como empreendedor, turbino meu negócio em tempos mordernos ou de acesso fácil a compras online.</p>
      </div> */}
    </div>
  
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

        // <section class="sliderbody">
        //   <div class="container">
          
        //         <div class="box">
        //           <p class="marvel">Rainforest Society NFT</p>
        //             <img src="images/team.webp" class="model"/>
        //             <div class="details"></div>
        //             <img src="images/logo.webp" class="logo" style={{width: '100px', height: 'auto'}} />
        //             <p>Detalhes sobre o NFT que esta sendo visualizado para que o publico entenda tudo sobre eles e possam se informar.</p>
        //         </div>

        //   </div> 
        // </section>
      ) 
   }
}
