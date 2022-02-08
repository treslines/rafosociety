
import GifSlider from '../src/components/GifSlider'
import CardSlider from '../src/components/CardSlider'
import Header from '../src/components/Header'
import Timeline from '../src/components/Timeline'

const plan = [
   {
      header: "04/22 Comunidade",
      title: "Promover projeto em redes sociais.",
      description: "",
      category: {
         tag: "Abr",
         color: "rgb(48 59 65/var(--tw-text-opacity))"
      },
      link: {
         url: "https://www.instagram.com/rafosociety/",
         text: "Nos ajude!"
      }
   },
   {
      header: "05/22 Parcerias",
      title: "Fechar parcerias, convidar embaixadores influencers.",
      description: "",
      category: {
         tag: "Mai",
         color: "rgb(48 59 65/var(--tw-text-opacity))"
      },
      link: {
         url: "https://www.instagram.com/rafosociety/",
         text: "Nos indique pessoas"
      }
   },
   {
      header: "06/22 Raridade",
      title: "Geração dos NFT's",
      description: "Comum, Especial, Épico, Lendário, Único.",
      category: {
         tag: "Jun",
         color: "rgb(48 59 65/var(--tw-text-opacity))"
      },
      link: {
         url: "https://www.instagram.com/rafosociety/",
         text: "Nos acompanhe"
      }
   },
   {
      header: "07/22 Website",
      title: "Finalização do site",
      description: "",
      category: {
         tag: "JUL",
         color: "rgb(48 59 65/var(--tw-text-opacity))"
      },
      link: {
         url: "https://discord.gg/Tr7bHA8jQj",
         text: "Nos acompanhe no Discord"
      }
   },
   {
      header: "Pré-Sale",
      title: "Abertura da pré-vanda apenas os early birds listadas na white list",
      description: "Quer entrar para lista de espera com condições e preços especias?",
      category: {
         tag: "TBD",
         color: "rgb(48 59 65/var(--tw-text-opacity))"
      },
      link: {
         url: "https://discord.gg/Tr7bHA8jQj",
         text: "Entra no Discord"
      }
   },
   {
      header: "Pré-Sale Discord",
      title: "Abertura pré-venda apenas para membros do discord",
      description: "Sua 2° chance!",
      category: {
         tag: "TBD",
         color: "rgb(48 59 65/var(--tw-text-opacity))"
      },
      link: {
         url: "https://discord.gg/Tr7bHA8jQj",
         text: "Acessa  Discord"
      }
   },
   {
      header: "Venda Pública",
      title: "Abertura ao público e publicação na OpenSea",
      description: "Sua última chance de adequirir seu cartão fidelidade vitalício.",
      category: {
         tag: "TBD",
         color: "rgb(48 59 65/var(--tw-text-opacity))"
      },
      link: {
         url: "https://discord.gg/Tr7bHA8jQj",
         text: "Se liga no Discord"
      }
   }
]

const data = [
   {
      header: "🇧🇷 Moda Masculina",
      title: "O clube exclusivo da Rainforest Society NFT te concede 20% em polos, sapatênis, carteiras e sintos.",
      description: "Desconto válido/item, porém não comulativos. Envio para todo 🇧🇷 em 7-15dias",
      category: {
         tag: "20%",
         color: "#018f69"
      },
      link: {
         url: "https://discord.gg/Tr7bHA8jQj",
         text: "Esperando o que? Ofereça seu produto"
      }
   },
   {
      header: "BRASIL FLATS RECIFE 🇧🇷",
      title: "Receba os descontos publicados no Instagram oficial da Brasil Apartamentos Recife que podem chegar a até 40%.",
      description: "Desconto válido/imóvel, porém não comulativos.",
      category: {
         tag: "40%",
         color: "#018f69"
      },
      link: {
         url: "https://discord.gg/Tr7bHA8jQj",
         text: "Não fique de fora, ofereça seu serviço"
      }
   },
   {
      header: "AULAS DE PORTUGUÊS 🇧🇷 🇵🇹",
      title: "Receba 10% em cada hora/aula com a professora nativa, licenciada e Pós-Graduada online.",
      description: "Desconto aplicável hora/aula, porém não comulativos.",
      category: {
         tag: "10%",
         color: "#018f69"
      },
      link: {
         url: "https://discord.gg/Tr7bHA8jQj",
         text: "Esperando o que? Ofereça seus serviços"
      }
   },
   {
      header: "🇧🇷 CONRADO ADVOCACIA ",
      title: "A Conrado Advocadia Goiânia concede 5% desconto em consultas jurídicas.",
      description: "Descontos se aplicam para cada consulta, porém não comulativos.",
      category: {
         tag: "5%",
         color: "#018f69"
      },
      link: {
         url: "https://discord.gg/Tr7bHA8jQj",
         text: "Conceda descontos também "
      }
   },
   {
      header: "BARZINHO SHOW 🇧🇷",
      title: "A BarzinhoShow em Goiânia te oferece 10% em qualquer serviço ou pacote.",
      description: "Descontos válidos para cada serviço ou pacote, não comulativos.",
      category: {
         tag: "10%",
         color: "#018f69"
      },
      link: {
         url: "https://discord.gg/Tr7bHA8jQj",
         text: "Venda mais também"
      }
   },
   {
      header: "Jéssica Dias 🇧🇷",
      title: "Advogada Trabalhista Empresarial em Recife te oferece 10% em consultas jurídicas, 20% em parecer jurídico e 30% em consultoria mensal.",
      description: "Descontos válidos/ serviço, não comulativos.",
      category: {
         tag: "30%",
         color: "#018f69"
      },
      link: {
         url: "https://discord.gg/Tr7bHA8jQj",
         text: "Confere aqui!"
      }
   },
   {
      header: "🇧🇷 Robson Texeira",
      title: "Ilustrador profissional em Fortaleza te oferece 15% em pacotes de ilustração.",
      description: "Descontos válidos/ pacote, não comulativos.",
      category: {
         tag: "15%",
         color: "#018f69"
      },
      link: {
         url: "https://discord.gg/Tr7bHA8jQj",
         text: "Veja a arte!"
      }
   },
   {
      header: "VENDA MUITO MAIS!",
      title: "Fidelize seus clientes de maneira orgânica e GRATUITA!",
      description: "Ofereça seus produtos ou serviços!",
      category: {
         tag: "🚀",
         color: "transparent"
      },
      link: {
         url: "https://discord.gg/Tr7bHA8jQj",
         text: "OFERECER"
      }
   }
]

function Home() {
   return (
      <div>
         <Header title="Rainforest Society" />
         <div class="flex flex-col min-h-screen p-5 lg:p-7">

            {/* # NAVEGACAO */}
            <nav class="flex items-center flex-none">

               <div class="flex-none">
                  <a href="/"><img src="images/logo.webp" alt="Rainforest Society NFT" class="w-8 text-white md:w-12" /></a>
               </div>

               <div class="flex-auto"></div>

               <div class="flex items-center flex-none space-x-4">
                  <a class="" href="https://twitter.com/rafosociety">
                     <img src="svg/twitter.svg" alt="Twitter" class="w-8 text-white" />
                  </a>

                  <a class="" href="https://www.instagram.com/rafosociety/">
                     <img src="svg/instagram.svg" alt="Instagram" class="w-8 text-white" />
                  </a>

                  <a class="" href="https://discord.gg/Tr7bHA8jQj">
                     <img src="svg/discord.svg" alt="Discord" class="w-8 text-white" />
                  </a>
               </div>
            </nav>

            {/* # CONTAINER DE FORA DA DESCRICÃO */}
            <div class="flex flex-col items-center justify-center flex-1">

               {/* # CABECALHO COM PNG */}
               <header class="flex flex-col items-center justify-center h-full text-center">
                  <p>&nbsp;</p>
                  <h1 class="text-6xl text-green-200 md:text-8xl lg:text-9xl leading-solid ">Rainforest Society NFT<br /> <br /></h1>
                  <div class="w-full md:w-[600px] -mt-16 md:-mt-32 lg:-mt-36">
                     <img src="images/banner-rainforest-society-nft.webp" alt="NFT Com Utilidade Real" />
                  </div>
               </header>

               {/* # CONTAINER DA DESCRICÃO */}
               <div class="text-center space-y-4 md:space-y-8">
                  <div class="h-2"></div>

                  {/* # DESCRICÃO */}
                  <h2 class="text-3xl md:text-5xl leading-solid text-sea-700">O NFT que te dá descontos!<br />Ofereça seu serviço ou produto.</h2>
                  <p class="tracking-wider text-green-200">Ofereça <i class="fas fa-arrow-circle-down"></i> sem custo!</p>

                  {/* # CONTAINER BOTÕES    */}
                  <div class="flex items-center justify-center text-base md:text-xl space-x-2">

                     {/* # TWITTER BUTTON */}
                     {/* <a href="https://twitter.com/rafosociety" class="bg-white btn text-green-200">
                        <svg
                           enable-background="new 0 0 248 204" viewBox="0 0 248 204" class="h-4"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="m221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5 0-.22 0-.43 0-.64 7.02 3.91 14.88 6.08 22.92 6.32-22.19-14.83-29.03-44.35-15.63-67.43 25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
                              fill="currentColor">
                           </path>
                        </svg>
                        <span>Twitter</span>
                     </a> */}

                     {/* # DISCORD BUTTON */}
                     <a href="https://discord.gg/Tr7bHA8jQj" class="bg-white btn text-green-200">
                        <svg viewBox="0 0 71 55" class="h-4"
                           xmlns="http://www.w3.org/2000/svg">
                           <clipPath id="a">
                              <path d="m0 0h71v55h-71z"></path>
                           </clipPath>
                           <g clip-path="url(#a)">
                              <path
                                 d="m60.1045 4.8978c-4.5253-2.0764-9.378-3.6062-14.4518-4.48238-.0924-.01691-.1847.025349-.2323.109869-.6241 1.110011-1.3154 2.558111-1.7995 3.696311-5.4572-.817-10.8864-.817-16.2317 0-.4842-1.1635-1.2006-2.5863-1.8275-3.696311-.0476-.0817-.1399-.123959-.2323-.109869-5.071.87338-9.9237 2.40318-14.4518 4.48238-.0392.0169-.0728.0451-.0951.0817-9.20455 13.7514-11.726061 27.1648-10.489092 40.4119.005597.0648.041978.1268.092353.1662 6.072899 4.4598 11.955539 7.1673 17.728939 8.9619.0924.0282.1903-.0056.2491-.0817 1.3657-1.865 2.5831-3.8315 3.6269-5.8995.0616-.1211.0028-.2648-.1231-.3127-1.931-.7325-3.7697-1.6256-5.5384-2.6398-.1399-.0817-.1511-.2818-.0224-.3776.3722-.2789.7445-.5691 1.0999-.8621.0643-.0535.1539-.0648.2295-.031 11.6196 5.3051 24.1992 5.3051 35.6817 0 .0756-.0366.1652-.0253.2323.0282.3555.293.7277.586 1.1027.8649.1287.0958.1203.2959-.0196.3776-1.7687 1.0339-3.6074 1.9073-5.5412 2.637-.1259.0479-.1819.1944-.1203.3155 1.0662 2.0651 2.2836 4.0316 3.6241 5.8967.056.0789.1567.1127.2491.0845 5.8014-1.7946 11.684-4.5021 17.7569-8.9619.0532-.0394.0868-.0986.0924-.1634 1.4804-15.3151-2.4796-28.6185-10.4975-40.4119-.0196-.0394-.0531-.0676-.0923-.0845zm-36.3786 32.4275c-3.4983 0-6.3808-3.2117-6.3808-7.156s2.8266-7.156 6.3808-7.156c3.5821 0 6.4367 3.2399 6.3807 7.156 0 3.9443-2.8266 7.156-6.3807 7.156zm23.5919 0c-3.4982 0-6.3807-3.2117-6.3807-7.156s2.8265-7.156 6.3807-7.156c3.5822 0 6.4367 3.2399 6.3808 7.156 0 3.9443-2.7986 7.156-6.3808 7.156z"
                                 fill="currentColor">
                              </path>
                           </g>
                        </svg>
                        <span>Discord</span>
                     </a>

                  </div>

                  <div class="flex flex-col items-center justify-center flex-1 bullet">

                     <div class="w-full md:w-[600px] -mt-16 md:-mt-32 lg:-mt-36" >
                        {/* <img style={{margin:"70px 0px 0px 0px"}} src="images/proposito3.webp" alt="NFT Com Utilidade Real" /> */}
                        <h1 style={{margin:"140px 0px 0px 0px"}} class="text-6xl text-green-200 md:text-8xl lg:text-9xl leading-solid ">Collection</h1>
                        <h2 style={{margin:"0px 0px 0px 0px"}} class="text-3xl md:text-5xl leading-solid text-sea-700">8888 Unique NFT's</h2>
                     
                        <GifSlider />
                        <ol class="bullet-list">
                        <li>&nbsp;</li>
                           <li><i class="fas fa-check-circle"/> Rainforest Society é uma coleção de 8.888 NFTs &#8211; número de prosperidade e abundância, representado por animais da fauna brasileira como uma peça de arte digital. Com mais de 10 bilhões de traços, nossa coleção será uma das mais diversificadas e detalhadas.</li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-check-circle"/> Nosso objetivo é construir um NFT fidelidade, unindo estabelecimentos, lojas, shoppings, restaurantes, prestadores de serviços e clubs, ao consumidor final através de descontos, acessos ou benefícios exclusivos.</li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-check-circle"/> Ao ingressar na comunidade, você pode estar fazendo um execelente investimento, nesta nova era financeira, uma chave de acesso a exclusividade!</li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-check-circle"/> Seu NFT é o ticket que lhe dará acesso a descontos em diversos estabelecimentos ou prestadores de serviços ao redor do mundo!</li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-check-circle"/> Possuir um Rainforest Society NFT significa que, mais do que apenas possuir uma obra de arte, você faz parte de um club exclusivo com acesso aos mais diversos benefícios que aumentarão com o tempo.</li>
                           <li>&nbsp;</li>
                           {/* <li>&nbsp;&nbsp;Mais detalhes no <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li> */}
                        </ol>
                     </div>

                     <div class="w-full md:w-[600px] -mt-16 md:-mt-32 lg:-mt-36" >
                        {/* <img style={{margin:"70px 0px 0px 0px"}} src="images/proposito3.webp" alt="NFT Com Utilidade Real" /> */}
                        <h1 style={{margin:"140px 0px 0px 0px"}} class="text-6xl text-green-200 md:text-8xl lg:text-9xl leading-solid ">Social</h1>
                        <h2 style={{margin:"0px 0px 20px 0px"}} class="text-3xl md:text-5xl leading-solid text-sea-700">Qual é o aspecto social do projeto?</h2>
                     
                        <ol class="bullet-list">
                           <li>Acreditamos no <b>ser social</b>, apoiando ONGs, instituições de caridade e projetos tais como:</li>
                           <li>&nbsp;</li>
                           <li>&nbsp;&nbsp;<i class="fas fa-ribbon"></i> Combate ao câncer</li>
                           <li>&nbsp;&nbsp;<i class="fas fa-utensils"></i> Combate à fome</li>
                           <li>&nbsp;&nbsp;<i class="fas fa-paw"></i> Ajuda aos animais de rua</li>
                           <li>&nbsp;&nbsp;<i class="fas fa-user-graduate"></i> Acesso a Educação </li>
                           <li>&nbsp;</li>
                           {/* <li>&nbsp;&nbsp;Mais detalhes no <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li> */}
                        </ol>
                     </div>
                     <div class="w-full md:w-[600px] -mt-16 md:-mt-32 lg:-mt-36" >
                        {/* <img style={{margin:"70px 0px 0px 0px"}} src="images/missao.webp" alt="NFT Com Utilidade Real" /> */}
                        <h1 style={{margin:"140px 0px 0px 0px"}} class="text-6xl text-green-200 md:text-8xl lg:text-9xl leading-solid ">Missão</h1>
                        <h2 style={{margin:"0px 0px 20px 0px"}} class="text-3xl md:text-5xl leading-solid text-sea-700">Qual é a missão do projeto?</h2>
                        {/* <p ><b>Qual é a missão do projeto?</b></p> */}
                        <ol class="bullet-list">
                           <li>Continuar formando parcerias, aumentando assim os benefícios, exclusividades e valor do NFT no decorrer do tempo. Lista completa de benefícos você encontra <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                        </ol>
                     </div>
                     <div class="w-full md:w-[600px] -mt-16 md:-mt-32 lg:-mt-36" >
                        {/* <img style={{margin:"70px 0px 0px 0px"}} src="images/conceito.webp" alt="NFT Com Utilidade Real" /> */}
                        <h1 style={{margin:"140px 0px 0px 0px"}} class="text-6xl text-green-200 md:text-8xl lg:text-9xl leading-solid ">Conceito NFT</h1>
                        <h2 style={{margin:"0px 0px 20px 0px"}} class="text-3xl md:text-5xl leading-solid text-sea-700">O que é um NFT (Token Não Fungível)?</h2>
                        {/* <p ><b>O que é um NFT (Token Não Fungível) na prática?</b></p> */}
                        <ol class="bullet-list" >
                           <li><b>Um NFT</b> pode ser entendido como uma posse digital ou física (na maioria dos casos digital): Sejam elas sobre artes; direitos autorais sobre músicas; passe de entrada para acesso restrito ou exclusivo a clubs; passe livre para enventos diversos; descontos e/ou condições especiais nos estabelecimentos, lojas ou serviços que fazem parte da parceria. Assegure o seu por um preço promocional entrando na <b>lista de pré-venda</b> <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                        </ol>
                        {/* <p ><b>Por que investir em um NFT? (como consumidor)</b></p> */}
                        <h2 style={{margin:"20px 0px 10px 0px"}} class="text-3xl md:text-5xl leading-solid text-sea-700">Por que investir em um NFT?<br/>(como consumidor)</h2>
                        <ol class="bullet-list" >
                           <li>&nbsp;</li>
                           <li><i class="fas fa-check-circle"/> <b>Descontos Vitalícios:</b> Enquanto as parcerias existirem, os donos dos NFT's podem usufruir dos benefícos, descontos e vantagens. Lista complet:<a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-check-circle"/> <b>Arte Plajenada:</b> Desenvolvido para uso em redes sociais, onde os personagens foram criados dentro de uma zona segura de exibição. Spoilers:<a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-check-circle"/> <b>Alta Resolução:</b> Arte ilustrada por um profissional brasileiro, em alta resolução (2500 x 2500 x 300dpi), valorizando a fauna e as regiões brasileiras.</li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-check-circle"/> <b>Cultura Pop:</b> NFT criado para público da cultura pop. Vide <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                        </ol>

                        {/* <p ><b>Por que oferecer produtos ou serviços através do NFT? (como fornecedor)</b></p> */}
                        <h2 style={{margin:"20px 0px 10px 0px"}} class="text-3xl md:text-5xl leading-solid text-sea-700">Por que oferecer produtos ou serviços?<br/>(como fornecedor)</h2>
                        <ol class="bullet-list" >
                           <li>&nbsp;</li>
                           <li><i class="fas fa-money-bill-wave"></i> <b>Receita Recorrente:</b> Como empreendedor, o que mais desejo, são clientes fieis e recorrentes. Oferecendo seu produto ou serviço através do NFT, você <b>fideliza</b> seu cliente sem gastar nada, gerando uma situação ganha/ganha para ambos, clientes e empreendedores. <b>Mais receita:</b><a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-funnel-dollar"></i> <b>Canal Extra de Vendas:</b> Você potencializa suas vendas, fideliza seu público e aumenta seu faturamento. Aumente sua <b>base de clientes:</b><a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-cut"></i> <b>Redução de Custos:</b> Qualquer empreendedor sabe que o Marketing é um dos centros de custo que mais se desperdiça dinheiro com eficácia baixa. Oferecer seu produdo/serviço através do NFT, te abre um novo canal de <b>vendas orgânicas</b>. <b>Ofereça aqui:</b><a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                        </ol>
                     </div>
                     <div class="w-full md:w-[600px] -mt-16 md:-mt-32 lg:-mt-36" >
                        {/* <img style={{margin:"70px 0px 0px 0px"}} src="images/roadmap.webp" alt="NFT Com Utilidade Real" /> */}
                        <h1 style={{margin:"140px 0px 0px 0px"}} class="text-6xl text-green-200 md:text-8xl lg:text-9xl leading-solid ">Roadmap</h1>
                        <h2 style={{margin:"0px 0px 20px 0px"}} class="text-3xl md:text-5xl leading-solid text-sea-700">Qual é o planejamento do projeto?</h2>
                        {/* <p ><b>Qual é o roadmap (planejamento) do projeto?</b></p> */}
                        <ol class="bullet-list" >
                           <li>Por ser um projeto bem dinâmico, estamos planejando por etapas, já que um atraso ou adiantamento de uma etapa, alteraria todo o cronograma futuro causando retrabalho. No entanto, a versão macro do nosso Roadmap esta disponível no canal de <b>"📑planejamento"</b> no <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a>.</li>
                           <li>&nbsp;</li>
                        </ol>
                     
                     </div>
                  </div>
                     <h1 class="text-sea-700">Roadmap Idealizado</h1>
                        <Timeline timelineData={plan} />

                  <div class="flex flex-col items-center justify-center flex-1 bullet">   
                     <div class="w-full md:w-[600px] -mt-16 md:-mt-32 lg:-mt-36" >
                        {/* <img style={{margin:"70px 0px 0px 0px"}} src="images/engajamento.webp" alt="NFT Com Utilidade Real" /> */}
                        <h1 style={{margin:"140px 0px 0px 0px"}} class="text-6xl text-green-200 md:text-8xl lg:text-9xl leading-solid ">Early Bird</h1>
                        <h2 style={{margin:"0px 0px 20px 0px"}} class="text-3xl md:text-5xl leading-solid text-sea-700">Como largar na frente?</h2>
                        {/* <p ><b>Como largar na frente na nossa comunidade?</b></p> */}
                        <ol class="bullet-list">
                           <li><i class="fas fa-share-alt"></i> Convide <b>2 amigos</b>, nos siga no  <a href="https://twitter.com/rafosociety" class=" text-green-200"> Twitter </a><a class="" href="https://twitter.com/rafosociety"><img src="svg/twitter.svg" alt="Twitter" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a> e  <a href="https://www.instagram.com/rafosociety/" class=" text-green-200"> Instagram </a><a class="" href="https://www.instagram.com/rafosociety/"><img src="svg/instagram.svg" alt="Instagram" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a>, entre para a lista de <b>📑 pré-venda</b> exclusiva.</li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-building"></i> Incentive empresas, estabelecimentos, lojas e prestadores de serviços a oferecerem seus serviços/produtos. Vide <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-thumbs-up"></i> Use o material oficial de promoção disponível no canal de <b>"divulgue"</b> no <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-gamepad"></i> Torne-se <b>moderador</b> oficial da nossa comunidade no <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a> e ganhe 5 NFT's.</li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-ad"></i> Divulgue os links oficiais disponíveis no canal de <b>"links oficiais"</b> do <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a>.</li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-gift"></i> Os membros <b>mais ativos</b> no <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a>, receberão convites para virar <b>moderadores</b> ou <b>integrantes oficiais</b> do time e ganharão NFT's como recompensa 🏆. </li>
                           <li>&nbsp;</li>
                        </ol>
                     </div>
                     
                  </div>

                  <h1 class="text-sea-700">O Time</h1>
                  <CardSlider />
                  <h1 class="text-sea-700">Parcerias já fechadas</h1>
                  <Timeline timelineData={data} />

               </div>
            </div>
         </div>
         <div class="flex flex-col items-center justify-center flex-1">
            <p class="tracking-wider text-green-200 footer">&#169; 2021-2022 Rainforest Society NFT. All rights reserved</p>
         </div>
      </div>
   )
}

export default Home