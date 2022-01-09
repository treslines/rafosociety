import React, { Component } from 'react'
import Link from 'next/link'

export default class tiktok extends Component {
   render() {
      return (
         <div class="col-md-6 mb-4">
            <Link href="https://tinyurl.com/tprodel" >
               <img class="img-responsive" width="250"  alt="100x100" src="/banner_teaser.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/>
            </Link>
            <p class="my-4" ><span class="font-weight-normal" style={{backgroundColor: '#FFffff', fontFamily: 'luckiestguy'}}>RICARDO FERREIRA</span><br></br>
               <Link href="https://tinyurl.com/tprodel" >
                  <b style={{color: 'grey', cursor: 'pointer'}}>@progdeelite</b>
               </Link>
            </p>
            <Link href="https://tinyurl.com/tprodel" >
               <img class="rounded-circle img-responsive" width="100" alt="100x100" src="/perfil.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/>
            </Link>
            <p class="my-4" style={{}}>
               VOCÊ É DA <span class="font-weight-normal" style={{backgroundColor: '', fontFamily: 'luckiestguy'}}>
               ÁREA DE  TI?</span><br></br>
               <span class="font-weight-normal" style={{backgroundColor: '#FFEE00', fontFamily: 'luckiestguy'}}>
               VOCÊ VAI CURTIR ISSO AQUI!</span><br></br>
            </p>
            <img class="img-responsive" width="25"  alt="50x50" src="/site_arrow_down.png" data-holder-rendered="true"/>
         </div>
      )
   }
}


