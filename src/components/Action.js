import React, { Component } from 'react'

export default class Action extends Component {
   render() {
      return (
         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <p class="my-4" style={{}}>
                  VOCÊ É DA <span class="font-weight-normal" style={{backgroundColor: '', fontFamily: 'luckiestguy'}}>
                  ÁREA DE  TI?</span><br></br>
                  <span class="font-weight-normal" style={{backgroundColor: '#FFEE00', fontFamily: 'luckiestguy'}}>
                  VOCÊ VAI CURTIR ISSO AQUI!</span><br></br>
               </p>
               <img class="img-responsive" width="25"  alt="50x50" src="/site_arrow_down.png" data-holder-rendered="true"/>
            </div>
         </div>
      )
   }
}


