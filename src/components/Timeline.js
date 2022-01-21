
import TimelineItem from "../components/TimelineItem";

import React, { Component } from 'react'

export default class Timeline extends Component {
   render() {
      let data  = this.props.timelineData
      return (
         <div className="timeline-container">
            {data.length > 0 && data.map(d => (
               <TimelineItem data={d}/>
            ))}
         </div>
      )
   }
}