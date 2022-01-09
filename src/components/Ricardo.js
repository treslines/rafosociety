import React, { Component } from 'react'
import Link from 'next/link'

export default class Ricardo extends Component {
   render() {
      return (
         <div>
            <p class="my-4" ><span class="font-weight-normal" style={{backgroundColor: '#FFffff', fontFamily: 'luckiestguy', fontSize: '46px'}}>DOWNLOADS</span></p>
            <p class="my-4" ><span class="font-weight-normal" style={{backgroundColor: '#FFffff', fontFamily: 'luckiestguy'}}>RICARDO FERREIRA</span><br></br>
               <Link href="https://tinyurl.com/tprodel" >
                  <b style={{color: 'grey', cursor: 'pointer'}}>@progdeelite</b>
               </Link>
            </p>
         </div>
      )
   }
}


