import React, { Component } from 'react'
import Link from 'next/link'

export default class Ricardo extends Component {
   render() {
      const linkTo = "https://tinyurl.com/" + this.props.destination
      return (
         <div>
            <Link href={linkTo} >
               <img class="rounded-circle img-responsive" width="100" alt="100x100" src="/perfil.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/>
            </Link>
         </div>
      )
   }
}


