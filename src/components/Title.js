import React, { Component } from 'react'

export default class Header extends Component {
   render() {
      const size = this.props.size + 'px'
      const name = this.props.name
      return (
         <div style={{float:'left'}}>
            <p>
               <span 
                  class="font-weight-normal" 
                  style={{backgroundColor: '#FFffff', 
                  fontFamily: 'luckiestguy', 
                  fontSize: size
               }}>{name}</span>
            </p>
         </div>
      )
   }
}
