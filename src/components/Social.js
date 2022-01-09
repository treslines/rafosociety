import React, { Component } from 'react'
import Link from 'next/link'

export default class Social extends Component {
   render() {
      return (
         <div class="row text-center">
            <div class="col-md-6 mb-4">
               <Link href="https://tinyurl.com/tprodel" ><img class="img-responsive" width="46" alt="46x46" src="/site_tiktok.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               {/* 
               <Link href="https://tinyurl.com/iprodel" ><img class="img-responsive" width="46" alt="46x46" src="/site_insta.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://tinyurl.com/rprodel" ><img class="img-responsive" width="46" alt="46x46" src="/site_twitter.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://tinyurl.com/fprodel" ><img class="img-responsive" width="46" alt="46x46" src="/site_facebook.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               */}
               <Link href="https://tinyurl.com/yprodel" ><img class="img-responsive" width="46" alt="46x46" src="/site_youtube.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
               <Link href="https://www.redbubble.com/shop/ap/70541577" ><img class="img-responsive" width="46" alt="46x46" src="/site_redbubble.png" data-holder-rendered="true" style={{cursor: 'pointer'}}/></Link>
            </div>
         </div>
      )
   }
}