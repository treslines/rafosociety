import React, { Component } from 'react'

export default class Video extends Component {
   render() {
      const id = "https://www.youtube.com/embed/" + this.props.id
      return (<div class="row text-center">
         <div class="col-md-6 mb-4">
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
               <iframe allowfullscreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0', }}
                  src={id}>    
               </iframe>
            </div>
         </div>
      </div>)
   }
}
