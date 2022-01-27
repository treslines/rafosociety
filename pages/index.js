
import Header from '../src/components/Header'
import Timeline from '../src/components/Timeline'

const data = [
   {
      header: "🇧🇷 Moda Masculina",
      title: "O clube exclusivo da Rainforest Society NFT te concede 20% em polos, sapatênis, carteiras e sintos.",
      description: "Desconto válido/item, porém não comulativos. Envio para todo 🇧🇷 em 7-15dias",
      category: {
         tag: "-20%",
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
         tag: "-40%",
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
         tag: "-10%",
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
         tag: "-5%",
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
         tag: "-10%",
         color: "#018f69"
      },
      link: {
         url: "https://discord.gg/Tr7bHA8jQj",
         text: "Venda mais também"
      }
   },
   {
      header: "VENDA MUITO MAIS!",
      title: "Fidelize seus clientes de maneira orgânica e GRATUITA!",
      description: "Ofereça seus produtos ou serviços!",
      category: {
         tag: "🚀",
         color: "#Fff"
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
                  <h1 class="text-6xl text-green-200 md:text-8xl lg:text-9xl leading-solid ">Rainforest Society NFT<br /> <br /></h1>
                  <div class="w-full md:w-[600px] -mt-16 md:-mt-32 lg:-mt-36">
                     <img src="images/banner-rainforest-society-nft.webp" alt="NFT Com Utilidade Real" />
                  </div>
               </header>

               {/* # CONTAINER DA DESCRICÃO */}
               <div class="text-center space-y-4 md:space-y-8">
                  <div class="h-2"></div>

                  {/* # DESCRICÃO */}
                  <h2 class="text-3xl font-bold md:text-5xl leading-solid text-sea-700">O primeiro NFT que dá descontos!<br />Formando parcerias até Abril 2022.</h2>
                  <p class="tracking-wider text-green-200">Ofereça seu produto ou serviço GRATIS! Acesse o Twitter ou Discord!</p>

                  {/* # CONTAINER BOTÕES    */}
                  <div class="flex items-center justify-center text-base md:text-xl space-x-2">

                     {/* # TWITTER BUTTON */}
                     <a href="https://twitter.com/rafosociety" class="bg-white btn text-green-200">
                        <svg
                           enable-background="new 0 0 248 204" viewBox="0 0 248 204" class="h-4"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="m221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5 0-.22 0-.43 0-.64 7.02 3.91 14.88 6.08 22.92 6.32-22.19-14.83-29.03-44.35-15.63-67.43 25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
                              fill="currentColor">
                           </path>
                        </svg>
                        <span>Twitter</span>
                     </a>

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
                        <img style={{margin:"70px 0px 0px 0px"}} src="images/proposito3.webp" alt="NFT Com Utilidade Real" />
                     
                        <ol class="bullet-list">
                        <li>&nbsp;</li>
                           <li>A <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Rainforest Society NFT </a> tem como propósito oferecer aos clientes não só um NFT que concede descontos e benefícios exclusivos aos seus portadores. Acreditamos no ser social, apoiando ongs, instituições de caridade e projetos tais como:</li>
                           <li>&nbsp;</li>
                           <li>&nbsp;&nbsp;🎗️ Combate ao câncer</li>
                           <li>&nbsp;&nbsp;🍽️ Combate à fome</li>
                           <li>&nbsp;&nbsp;🐕 Ajuda aos animais de rua</li>
                           <li>&nbsp;&nbsp;🎓 Acesso a Educação &#8680; <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                        </ol>
                     </div>
                     <div class="w-full md:w-[600px] -mt-16 md:-mt-32 lg:-mt-36" >
                        <img style={{margin:"70px 0px 0px 0px"}} src="images/missao.webp" alt="NFT Com Utilidade Real" />
                        <p style={{fontWeight:"bold"}}>Qual é a missão por trás do projeto?</p>
                        <ol class="bullet-list">
                           <li>Continuar formando parcerias que agreguem ainda mais valor ao NFT, trazendo assim muito mais benefícios. Mais detalhes &#8680; <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                        </ol>
                     </div>
                     <div class="w-full md:w-[600px] -mt-16 md:-mt-32 lg:-mt-36" >
                        <img style={{margin:"70px 0px 0px 0px"}} src="images/conceito.webp" alt="NFT Com Utilidade Real" />
                        <p style={{fontWeight:"bold"}}>O que é um NFT (Token Não Fungível) na prática?</p>
                        <ol class="bullet-list" >
                           <li>&nbsp;</li>
                           <li>➡️ <b>Um NFT</b> pode-se ser entendido como uma posse digital ou física (na maioria dos casos digital) sobre artes, direitos autoráis sobre músicas, acesso restrito ou exclusivo a clubs, passe livre para enventos, descontos ou condições especiais nas compras em estabelecimentos, lojas ou serviços. Assegure o seu e entre na <b>Lista de espera</b> &#8680; <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                        </ol>
                        <p style={{fontWeight:"bold"}}>Por que investir em um NFT?</p>
                        <ol class="bullet-list" >
                           <li>&nbsp;</li>
                           <li>➡️ <b>Descontos Vitalícios:</b> Enquanto as parcerias existirem, os donos dos NFT's podem usufruir dos benefícos, descontos e vantagens. Lista completa &#8680;<a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                           <li>➡️ <b>Arte Plajenada:</b> Desenvolvido para uso em redes sociais, onde os personagens foram criados dentro de uma zona segura de exibição. Spoilers &#8680;<a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                           <li>➡️ <b>Alta Resolução:</b> Arte ilustrada por um profissional brasileiro valorizando a fauna e as regiões brasileiras em alta resolução. (2500 x 2500 x 300dpi)</li>
                           <li>&nbsp;</li>
                           <li>➡️ <b>Cultura Pop:</b> NFT criado para público da cultura pop. Vide &#8680; <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                        </ol>

                        <p style={{fontWeight:"bold"}}>Por que deveria oferecer meu produto ou serviço através do NFT?</p>
                        <ol class="bullet-list" >
                           <li>&nbsp;</li>
                           <li>➡️ <b>Receira Recorrente:</b> Como empreendedor, o que mais desejo, são clientes fieis e recorrentes. Oferecendo seu produto ou serviço através do NFT, você fideliza seu cliente sem gastar nada, gerando uma situação ganha/ganha para ambos. Clientes e Empreendedores. <b>Veja como</b> &#8680;<a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                           <li>➡️ <b>Canal Extra de Vendas:</b> Você potencializa suas vendas, fideliza seu público alvo, aumenta seu faturamento e sua base de clientes. <b>Ofereça aqui</b> &#8680;<a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                           <li>➡️ <b>Redução de Custos:</b> Qualquer empreendedor sabe que o Marketing é um dos centros de custo que mais se desperdiça dinheiro com eficácia baixa. Oferecer seu produdo/serviço através do NFT, te abre um novo canal de <b>vendas orgânicas</b>, antes inimaginável. <b>Ofereça aqui</b> &#8680;<a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                        </ol>
                     </div>
                     <div class="w-full md:w-[600px] -mt-16 md:-mt-32 lg:-mt-36" >
                        <img style={{margin:"70px 0px 0px 0px"}} src="images/roadmap.webp" alt="NFT Com Utilidade Real" />
                        <p style={{fontWeight:"bold"}}>Qual é o roadmap (planejamento) do projeto?</p>
                        <ol class="bullet-list" >
                           <li>&nbsp;</li>
                           <li>Por ser um projeto bem dinâmico, estamos planejando por etapas, já que um atraso ou adiantamento de uma etapa, alteraria todo o cronograma futuro causando retrabalho. No entanto, a versão macro do nosso Roadmap esta disponível no canal de <b>"📑planejamento"</b> &#8680; <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a>.</li>
                           <li>&nbsp;</li>
                        </ol>
                     </div>

                     
                     <div class="w-full md:w-[600px] -mt-16 md:-mt-32 lg:-mt-36" >
                        <img style={{margin:"70px 0px 0px 0px"}} src="images/engajamento.webp" alt="NFT Com Utilidade Real" />
                        <p style={{fontWeight:"bold"}}>Como você pode largar na frente na nossa comunidade?</p>
                        <ol class="bullet-list">
                           <li>&nbsp;</li>
                           <li>1️⃣ Quem trouxer <b>apenas 2</b> amigos e nos seguir no  <a href="https://twitter.com/rafosociety" class=" text-green-200"> Twitter </a><a class="" href="https://twitter.com/rafosociety"><img src="svg/twitter.svg" alt="Twitter" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a> e  <a href="https://www.instagram.com/rafosociety/" class=" text-green-200"> Instagram </a><a class="" href="https://www.instagram.com/rafosociety/"><img src="svg/instagram.svg" alt="Instagram" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a>, entra para a <b>📑 white list</b> da prê-venda exclusiva.</li>
                           <li>&nbsp;</li>
                           <li>2️⃣ Indicando empresas, estabelecimentos, lojas, prestadores de serviços e/ou incentivando os mesmos a cadastrarem seus serviços/produtos. Saiba como &#8680; <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a></li>
                           <li>&nbsp;</li>
                           <li>3️⃣ Usando o material disponível no canal de <b>"divulgue"</b> do <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a> para promover nossos NFT's em suas redes sociais.</li>
                           <li>&nbsp;</li>
                           <li>4️⃣ Convidando amigos para a comunidade do discord. <b>"Como fazer"</b> disponível no canal de <b>"📫 como convidar"</b> do <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a>.</li>
                           <li>&nbsp;</li>
                           <li>5️⃣ Divulgando links oficiais disponíveis no canal de <b>"links oficiais"</b> do <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a>.</li>
                           <li>&nbsp;</li>
                           <li>6️⃣ Os membros <b>mais ativos</b> no <a href="https://discord.gg/Tr7bHA8jQj" class=" text-green-200"> Discord </a><a class="" href="https://discord.gg/Tr7bHA8jQj"><img src="svg/discord.svg" alt="Discord" style={{height:"16px", display:"inline", width:"16px", margin:"0px 0px 3px 0px"}}/></a>, receberão convites para virar <b>moderadores</b> ou <b>integrantes oficiais</b> do time e ganharão NFT's como recompensa 🏆. </li>
                           <li>&nbsp;</li>
                        </ol>
                     </div>
                     
                  </div>


                  <h1 class="text-sea-700">Parcerias já fechadas</h1>
                  <Timeline timelineData={data} />

               </div>
            </div>
         </div>
      </div>
   )
}

export default Home