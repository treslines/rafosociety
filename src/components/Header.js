import Head from 'next/head'
import React, { Component } from 'react'

export default class Header extends Component {
   render() {
      return (
         <div>
            <Head>
            <title>{this.props.title}</title>
            <meta name="description" content="O primeiro NFT que dá descontos"/>
            <meta name="viewport" content="width=device-width"/>
            <meta charset="utf-8"/>
            <link rel="icon" href="favicon/favicon.ico" />
            <link rel="preload" href="/fonts/Anton-Regular.ttf" as="font" crossOrigin="" />
            <link rel="preload" href="/fonts/LuckiestGuy-Regular.ttf" as="font" crossOrigin=""/>
            <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
            <meta name="twitter:title" content="Rainforest Society"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@rafosociety"/>
            <meta name="twitter:creator" content="@rafosociety"/>
            <meta property="og:title" content="Rainforest Society"/>
            <meta property="og:description" content="O primeiro NFT que dá descontos! - Cadastre Seu Produdo Ou Serviço GRATIS!"/>
            <meta property="og:image" content="https://rafosociety.vercel.app/images/IF_open-graph.png"/>
            </Head>
         </div>
      )
   }
}





