
import GifSlider from '../src/components/GifSlider'
import ImgSlider from '../src/components/ImgSlider'
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
         <div class="flex flex-col min-h-screen">

            {/* # NAVEGACAO */}
            <nav class="p-3 flex items-center flex-none">

               <div class="flex-none">
                  <a href="/"><img src="images/logo.webp" alt="Rainforest Society NFT" class="w-8 text-white md:w-12" /></a>
               </div>

               <div class="flex-auto"><p class="pl-2 text-green-700">Rainforest Society</p></div>

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
                     <div  class="w-full md:w-[100%] ">
                        <img src="images/guardians4.webp" alt="NFT Com Utilidade Real" />
                     </div>
                     <div class="px-2 mt-8 md:mt-12 lg:mt-24">
                        <h1 class="text-green-700 text-xl md:text-2xl lg:text-5xl tracking-normal leading-solid ">Conheça os Guardiões da Floresta</h1>
                     </div>
                     <h1  class="py-0.5 px-2 mb-10 text-xs md:text-xl lg:text-xl leading-solid tracking-wide text-sea-700">Um grupo especial de super-heróis mutantes que amam e protegem o meio ambiente.</h1>
               </header>

               {/* # carrossel */}
               <div class="flex flex-col items-center justify-center flex-1">
                  <div  >
                     <GifSlider />
                  </div>
               </div>

               {/* # CONTAINER DA DESCRICÃO */}
               <div class="text-center space-y-4 md:space-y-8">
                  <div class="h-2"></div>

                  {/* # DESCRICÃO */}
                  <p class="tracking-wide text-green-700">Lista <i class="fas fa-arrow-circle-down"></i> Espera!</p>

                  {/* # CONTAINER BOTÕES    */}
                  <div class="flex items-center justify-center text-base md:text-xl space-x-2">

                     {/* # DISCORD BUTTON */}
                     <a href="https://discord.gg/Tr7bHA8jQj" class="bg-white btn text-green-700">
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

                     <div class="mt-0 w-full md:w-[600px] " >
                        <h1 class="mt-14 text-green-700 text-xl md:text-xl lg:text-3xl leading-solid ">Caracteristicas do NFT</h1>
                        <h2 class="mb-1 text-sea-700 text-3xl md:text-3xl leading-solid ">Exclusividade</h2>
                        <ol class="bullet-list">
                           <li>&nbsp;</li>
                           <li><i class="fas fa-check-circle"/> Rainforest Society é uma coleção de 8.888 NFTs, representado por animais da fauna brasileira como uma peça de arte digital. Com mais de <b>10 bilhões de traços</b>, nossa coleção será uma das mais diversificadas e detalhadas.</li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-check-circle"/> Nosso objetivo é construir um <b>NFT fidelidade</b>, unindo estabelecimentos, lojas, shoppings, restaurantes, prestadores de serviços e clubs, ao consumidor final através de descontos, acessos ou benefícios exclusivos.</li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-check-circle"/> Seu NFT é o ticket que lhe dará acesso a <b>exclusividades, vantagens e descontos</b> em diversos estabelecimentos ou prestadores de serviços ao redor do <b>mundo!</b></li>
                        
                        </ol>
                     </div>

                     <p class="tracking-wide text-green-700">Quero <i class="fas fa-arrow-circle-down"></i> Um NFT</p>
                     <div class="flex items-center justify-center text-base md:text-xl space-x-2">
                        <a href="https://discord.gg/Tr7bHA8jQj" class="bg-white btn text-green-700">
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

                     <div class="mt-8 w-full md:w-[600px]" >
                        <h1 class="mt-14 text-xl text-green-700 md:text-xl lg:text-3xl leading-solid ">Qual é o aspecto social?</h1>
                        <h2 class="mb-1 text-3xl md:text-3xl leading-solid text-sea-700">Caridade</h2>
                     
                        <ol class="bullet-list">
                           <li>Acreditamos no <b>ser social</b>, apoiando ONGs e instituições de caridade. Saiba mais dobre o projeto acessando a nossa comunidade no Discord.</li>
                           <li>&nbsp;</li>
                           <li>&nbsp;&nbsp;<i class="fas fa-ribbon"></i> Combate ao câncer</li>
                           <li>&nbsp;&nbsp;<i class="fas fa-utensils"></i> Combate à fome</li>
                           <li>&nbsp;&nbsp;<i class="fas fa-paw"></i> Ajuda aos animais de rua</li>
                           <li>&nbsp;&nbsp;<i class="fas fa-user-graduate"></i> Acesso a Educação </li>
                        </ol>
                     </div>


                     {/* <div class="mt-0 w-full md:w-[600px]" >
                        <h1 class="mt-14 text-xl text-green-700 md:text-xl lg:text-3xl leading-solid ">Qual é a missão?</h1>
                        <h2 class="mb-1 text-3xl md:text-3xl leading-solid text-sea-700">Benefícios</h2>
                        <ol class="bullet-list">
                           <li>Continuar formando parcerias, aumentando assim os benefícios, exclusividades e valor do NFT no decorrer do tempo. Lista completa de benefícos você encontra <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-700"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                        </ol>
                     </div> */}

                     <div class="mt-8 w-full md:w-[600px]" >
                        <h1 class="mt-14 text-xl text-green-700 md:text-xl lg:text-3xl leading-solid ">Time Intergalático</h1>
                        <h2 class="mb-1 text-3xl md:text-3xl leading-solid text-sea-700">Membros</h2>
                        <div  class="w-full md:w-[600px] ">
                           <img class="mt-0" src="images/team3.webp" alt="NFT Com Utilidade Real" />
                        </div>
                     </div>
                     
                  </div>


                  {/* <h1 style={{marginTop:"85px"}} class=" text-sea-700">O Time</h1>
                  <CardSlider /> */}

                  <div class="px-1 flex flex-col items-center justify-center flex-1 bullet">



                     {/* <div class="pr-1 mt-0 w-full md:w-[600px]" >
                        <h1 class="mt-14 text-xl text-green-700 md:text-xl lg:text-3xl leading-solid ">O que é um NFT?</h1>
                        <h2 class="mb-1 text-3xl md:text-3xl leading-solid text-sea-700">Conceito NFT</h2>
                        <ol class="  bullet-list" >
                           <li pr-1><b>Um NFT</b> (Token Não Fungível) pode ser entendido como uma posse digital ou física (na maioria dos casos digital): Sejam elas sobre artes; direitos autorais sobre músicas; passe de entrada para acesso restrito ou exclusivo a clubs; passe livre para enventos diversos; descontos e/ou condições especiais nos estabelecimentos, lojas ou serviços que fazem parte da parceria. Assegure o seu por um preço promocional entrando na <b>lista de pré-venda</b> <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-700"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                        </ol>
                     </div> */}

                     <div class="mt-0 w-full md:w-[600px]" >
                        <h1 class="mt-14 text-xl text-green-700 md:text-xl lg:text-3xl leading-solid ">Por que paricipar?</h1>
                        <h2 class="mb-1 text-3xl md:text-3xl leading-solid text-sea-700">Empreendedor</h2>
                        <ol class="bullet-list" >
                           <li><i class="fas fa-money-bill-wave"></i> <b>Receita Recorrente:</b> Como empreendedor, o que mais desejo, são clientes fieis e recorrentes. Oferecendo seu produto ou serviço através do NFT, você <b>fideliza</b> seu cliente sem gastar nada, gerando uma situação ganha/ganha para ambos, clientes e empreendedores. </li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-funnel-dollar"></i> <b>Canal Extra de Vendas:</b> Você potencializa suas vendas, fideliza seu público e aumenta seu faturamento. Aumente sua <b>base de clientes.</b></li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-cut"></i> <b>Redução de Custos:</b> Qualquer empreendedor sabe que o Marketing é um dos centros de custo que mais se desperdiça dinheiro com eficácia baixa. Oferecer seu produdo/serviço através do NFT, te abre um novo canal de <b>vendas orgânicas</b>. </li>
                        </ol>
                     </div>

                     <p class="tracking-wide text-green-700">Promova <i class="fas fa-arrow-circle-down"></i> Sem Custo!</p>
                     <div class="flex items-center justify-center text-base md:text-xl space-x-2">
                        <a href="https://discord.gg/Tr7bHA8jQj" class="bg-white btn text-green-700">
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

                     <div class="mt-8 w-full md:w-[600px]" >
                        <h1 class="mt-14 text-xl text-green-700 md:text-xl lg:text-3xl leading-solid ">Os Guardiões</h1>
                        <h2 class="mb-1 text-3xl md:text-3xl leading-solid text-sea-700">Super-Heróis Mutantes</h2>
                        <div  class="w-full md:w-[600px] ">
                           <img class="mt-0" src="images/samples.webp" alt="NFT Com Utilidade Real" />
                        </div>
                     </div>

                     <div class="mt-8 w-full md:w-[600px]" >
                        <h1 class="mt-14 text-xl text-green-700 md:text-xl lg:text-3xl leading-solid ">Por que investir?</h1>
                        <h2 class="mb-1 text-3xl md:text-3xl leading-solid text-sea-700">Consumidor</h2>
                        <ol class="bullet-list" >
                           <li><i class="fas fa-check-circle"/> <b>Exclusividades Vitalícias:</b> Enquanto as parcerias existirem, os donos dos NFT's podem usufruir dos benefícos, descontos e vantagens. </li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-check-circle"/> <b>Alta Resolução:</b> Arte ilustrada por um profissional brasileiro, em alta resolução (2500 x 2500 x 300dpi), rica em detalhes, valorizando a fauna e as regiões brasileiras. Idealizados para serem usados em perfis sociais. <b>Você consegue identificar o super-herói mutante em cada NFT?</b></li>
                        </ol>
                     </div>

                     <p class="tracking-wide text-green-700">Quero <i class="fas fa-arrow-circle-down"></i> Participar!</p>
                     <div class="flex items-center justify-center text-base md:text-xl space-x-2">
                        <a href="https://discord.gg/Tr7bHA8jQj" class="bg-white btn text-green-700">
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

                     {/* <div class="w-full md:w-[600px]" >
                        <h1 class="mt-14 text-xl text-green-700 md:text-xl lg:text-3xl leading-solid ">Qual é o planejamento?</h1>
                        <h2 class="mb-1 text-3xl md:text-3xl leading-solid text-sea-700">Roadmap</h2>
                        <ol class="bullet-list" >
                           <li>Por ser um projeto bem dinâmico, estamos planejando por etapas, já que um atraso ou adiantamento de uma etapa, alteraria todo o cronograma futuro causando retrabalho. No entanto, a versão macro do nosso Roadmap esta disponível no canal de <b>"📑planejamento"</b> no <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-700"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a>.</li>
                        </ol>
                     </div> */}
                  </div>

                     {/* <h1 class="text-sea-700">Roadmap Idealizado</h1>
                        <Timeline timelineData={plan} /> */}

                  <div class=" flex flex-col items-center justify-center flex-1 bullet">   
                     <div class="mt-0 w-full md:w-[600px]" >
                        <h1 class="mt-14 text-xl text-green-700 md:text-xl lg:text-3xl leading-solid ">Como largar na frente?</h1>
                        <h2 class="mb-1 text-3xl md:text-3xl leading-solid text-sea-700">Early Bird</h2>
                        <ol class="bullet-list">
                           <li><i class="fas fa-check-circle"/> Entre para a lista de <b>pré-venda</b> exclusiva e ganhe desconto na pré-venda.</li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-gamepad"></i> Torne-se <b>moderador</b> oficial da nossa comunidade no Discord e ganhe 5 NFT's.</li>
                           <li>&nbsp;</li>
                           <li><i class="fas fa-gift"></i> Os membros <b>mais ativos</b> no Discord, receberão convites para virar <b>moderadores</b> ou <b>integrantes oficiais</b> do time e ganharão NFT's como recompensa. </li>
                        </ol>
                     </div>

                     <p class="tracking-wide text-green-700">Early <i class="fas fa-arrow-circle-down"></i> Bird!</p>
                     <div class="flex items-center justify-center text-base md:text-xl space-x-2">
                        <a href="https://discord.gg/Tr7bHA8jQj" class="bg-white btn text-green-700">
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
                     
                  </div>

                 
                  <div class="px-1 flex flex-col items-center justify-center flex-1 bullet">
                     
                     <div class="mt-8 w-full md:w-[600px]" >
                        <h1 class="mt-14 text-xl text-green-700 md:text-xl lg:text-3xl leading-solid ">Parcerias Fechadas</h1>
                        <h2 class="mb-1 text-3xl md:text-3xl leading-solid text-sea-700">Descontos Oferecidos</h2>
                        <div  class="w-full md:w-[600px] ">
                           <img class="mt-0" src="images/colage.webp" alt="NFT Com Utilidade Real" />
                        </div>
                     </div>

                     <p class="tracking-wide text-green-700">Fechar <i class="fas fa-arrow-circle-down"></i> Parceria!</p>
                     <div class="flex items-center justify-center text-base md:text-xl space-x-2">
                        <a href="https://discord.gg/Tr7bHA8jQj" class="bg-white btn text-green-700">
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
                     </div>

               </div>

            </div>
         </div>
         <div class="mt-16 flex flex-col items-center justify-center flex-1">
            <p class="tracking-wider text-sea-700 footer">&#169; 2021-2022 Rainforest Society NFT. All rights reserved</p>
         </div>
      </div>
   )
}

export default Home