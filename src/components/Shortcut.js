import React, { Component } from 'react'
import styles from './Shortcut.module.scss'
export default class Shortcut extends Component {
   render() {
      const one = this.props.one
      const two = this.props.two
      const three = this.props.three
      
      if(one && two && three){
         return (
            <div className={styles.keys} style={{float:'left'}}>
               <div className={styles.key__button}>{this.props.one}</div>
               <div className={styles.key__plus}>+</div>
               <div className={styles.key__button}>{this.props.two}</div>
               <div className={styles.key__plus}>+</div>
               <div className={styles.key__button}>{this.props.three}</div>
               <div className={styles.key__plus}>=</div>
               <div className={styles.key__meaning}>{this.props.desc}</div>
            </div>
         )
      }
      if(one && two){
         return (
            <div className={styles.keys} style={{float:'left'}}>
               <div className={styles.key__button}>{this.props.one}</div>
               <div className={styles.key__plus}>+</div>
               <div className={styles.key__button}>{this.props.two}</div>
               <div className={styles.key__plus}>=</div>
               <div className={styles.key__meaning}>{this.props.desc}</div>
            </div>
         )
      }
      if(one){
         return (
            <div className={styles.keys} style={{float:'left'}}>
               <div className={styles.key__button}>{this.props.one}</div>
               <div className={styles.key__plus}>=</div>
               <div className={styles.key__meaning}>{this.props.desc}</div>
            </div>
         )
      }
   }
}