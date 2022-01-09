import Head from 'next/head'
import React, { Component } from 'react'

export default class Header extends Component {
   render() {
      return (
         <div>
            <Head>
            <title>{this.props.title}</title>
            <meta name="description" content="NFT Com Utilidade Real"/>
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
            <meta property="og:description" content="NFT Com Utilidade Real - Estamos Fechando Parcerias Até Abril 2022. Cadastre Seu Produdo Ou Serviço GRATIS!"/>
            <meta property="og:image" content="https://rainforestsociety.com.br/IF_open-graph.png"/>
            </Head>
         </div>
      )
   }
}





