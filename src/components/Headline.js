import React, { Component } from 'react'
import Link from 'next/link'

export default class Headline extends Component {
   render() {
      return (
         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <Link href="https://tinyurl.com/tprodel" >
                  <img class="img-responsive" width="250"  alt="100x100" src="/banner_teaser.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/>
               </Link>
            </div>
         </div>
      )
   }
}