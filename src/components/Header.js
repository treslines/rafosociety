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
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            

            <link rel="icon" href="favicon/favicon.ico" />
            <link rel="preload" href="/fonts/Anton-Regular.ttf" as="font" crossOrigin="" />
            <link rel="preload" href="/fonts/LuckiestGuy-Regular.ttf" as="font" crossOrigin=""/>
            <link rel="apple-touch-icon" href="/apple-touch-icon.webp"/>
            <meta name="twitter:title" content="Rainforest Society"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@rafosociety"/>
            <meta name="twitter:creator" content="@rafosociety"/>
            <meta property="og:title" content="Rainforest Society"/>
            <meta property="og:description" content="O primeiro NFT que dá descontos! - Cadastre Seu Produdo Ou Serviço GRATIS!"/>
            <meta property="og:image" content="https://rafosociety.vercel.app/images/IF_open-graph.webp"/>

            {/* Bootstrap */}
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"/>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"/>


            </Head>
         </div>
      )
   }
}





