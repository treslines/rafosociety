import React, { Component } from 'react'

export default class CardSlider extends Component {
   render() {
      return (

         <div class="outter" style={{margin:"0px 0px 0px 0px"}}>
            <section>
               <div class="container">
                  <div class="content">
                     <div class="card">
                        <div class="card-content">
                           <div class="image">
                              <img src="images/team1.webp" alt=""/>
                           </div>
                           <div class="media-icons">
                              <a class="" href="https://www.tiktok.com/@progdeelite">
                                 <i class="fab fa-tiktok fa-xs fa-fw"></i>
                              </a>
                           </div>
                           <div class="name-profession">
                              <span class="name">Ricardo F.</span>
                              <span class="profession">Founder | Techlead</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section>
               <div class="container">
                  <div class="content">
                     <div class="card">
                        <div class="card-content">
                           <div class="image">
                              <img src="images/team.webp" alt=""/>
                           </div>
                           <div class="media-icons">
                              <a class="" href="https://www.tiktok.com/@dilian.costa">
                                 <i class="fab fa-tiktok fa-xs fa-fw"></i>
                              </a>
                        
                           </div>
                           <div class="name-profession">
                              <span class="name">Dilian F.</span>
                              <span class="profession">Marketing | Media</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section>
               <div class="container">
                  <div class="content">
                     <div class="card">
                        <div class="card-content">
                           <div class="image">
                              <img src="images/team2.webp" alt=""/>
                           </div>
                           <div class="media-icons">
                              <a class="" href="https://www.instagram.com/robb_teixeira/">
                                 <i class="fab fa-instagram fa-xs fa-fw"></i>
                              </a>
                           </div>
                           <div class="name-profession">
                              <span class="name">Robson T.</span>
                              <span class="profession">Ilustrator | Design</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>

      )
   }
}
