import React, { Component } from 'react'

export default class ImgSlider extends Component {
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
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item">
      <img class="d-block w-100" src="images/parc_jessica.webp" alt="Slide Parceira Jessica"/>
      {/* <div class="carousel-caption d-sm d-md-block">
        <h5 class="text-sea-700">Super Poderes</h5>
        <p>Sua oportunidade de colecionar um animal mutante. Você conseque identificar qual Super-Heroi eles representam?</p>
      </div> */}
    </div>
    <div class="carousel-item active">
      <img class="d-block w-100" src="images/parc_bangon.webp" alt="Slide Parceira Bangon"/>
      {/* <div class="carousel-caption d-sm d-md-block d-lg">
        <h5 class="text-sea-700">Raridade</h5>
        <p>Com mais de 10 bilhões de traços, nossa coleção será uma das mais diversificadas e detalhadas.</p>
      </div> */}
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/parc_conrado.webp" alt="Slide Parceiro Conrado"/>
      {/* <div class="carousel-caption d-sm d-md-block">
        <h5 class="text-sea-700">Exclusividade</h5>
        <p>Como dono de um NFT, eu ganho um cartão fidelidade exclusivo, que me concede benefícios e facilidades ao redor do mundo!</p>
      </div> */}
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/parc_robson.webp" alt="Slide Parceiro Robson"/>
      {/* <div class="carousel-caption d-sm d-md-block">
        <h5 class="text-sea-700">Social</h5>
        <p>Como dono de um NFT, com cada compra que faço, uma doação é feita para instituições de caridade.</p>
      </div> */}
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/parc_barzinhoshow.webp" alt="Slide Parceiro Barzinhoshow"/>
      {/* <div class="carousel-caption d-sm d-md-block">
        <h5 class="text-sea-700">Descontos Vitalícios</h5>
        <p>Como dono de um NFT, enquanto as parcerias existirem, eu posso solicitar o benefício listado.</p>
      </div> */}
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/parc_apartbrasilrecife.webp" alt="Slide Parceiro Apartamento Brasil Recife"/>
      {/* <div class="carousel-caption d-sm d-md-block">
        <h5 class="text-sea-700">Alta Resolução</h5>
        <p>Como dono de um NFT, prestigio uma arte criada por prosissional brasileiro que valoriza a fauna brasileira.</p>
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
      ) 
   }
}
