import React, { Component } from 'react'
import Link from 'next/link'

export default class Social extends Component {
   render() {
      return (
         <div class="row text-center">
         <div class="col-md-6 mb-4">
            <Link href="/" >
               <img class="img-responsive" width="250"  alt="100x100" src="/logo_prog.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/>
            </Link>
         </div>
      </div>
      )
   }
}


         