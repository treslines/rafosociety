import React, { Component } from 'react'

export default class TimelineItem extends Component {
   render() {
      let d = this.props.data
      return (
            
            <div className="timeline-item">
               <div className="timeline-item-content">
                  <span className="tag" style={{ background: d.category.color}}>
                     {d.category.tag}
                  </span>
                  <h1>{d.header}</h1>
                  <p>{d.title}</p>
                  <p>{d.description}</p>
                  {d.link && (
                     <a href={d.link.url} target="_blank" rel="noopener noreferrer">{d.link.text}</a>
                  )}
                  <span className="circle"></span>
               </div>
            </div> 
         
      )
   }
}