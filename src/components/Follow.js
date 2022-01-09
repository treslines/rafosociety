import React, { Component } from 'react'
import Link from 'next/link'

export default class Social extends Component {
   render() {
      return (
         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <p class="my-4" >VOU TE AJUDAR A<br></br> CONSEGUIR UM <span style={{backgroundColor: '#FFEE00', fontFamily: 'luckiestguy'}}>TOP JOB</span>!<br></br><br></br><span style={{fontFamily: 'luckiestguy'}}>ME SEGUE PARA:</span><br></br>OPORTUNIDADES DE EMPREGO,<br></br>
               TECNOLOGIA, MACETES & TRUQUES!</p>
               <Link href="/profile" >
                  <img class="rounded-circle img-responsive" width="100" alt="100x100" src="/perfil.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/>
               </Link>
            </div>
         </div>
      )
   }
}


