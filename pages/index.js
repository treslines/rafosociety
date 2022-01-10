
import Header from '../src/components/Header'

function Home() {
   return (
      <div>
         <Header title="Rainforest Society"/>
         <div class="flex flex-col min-h-screen p-5 lg:p-7">
            
            {/* # NAVEGACAO */}
            <nav class="flex items-center flex-none">
               
               <div class="flex-none">
                  <a href="/"><img src="images/logo.png" alt="Rainforest Society NFT" class="w-8 text-white md:w-12"/></a> 
               </div>

               <div class="flex-auto"></div>

               <div class="flex items-center flex-none space-x-4">
                  <a class="" href="https://twitter.com/rafosociety">
                     <img src="svg/twitter.svg" alt="Twitter" class="w-8 text-white"/> 
                  </a>
                  
                  <a class="" href="https://www.instagram.com/rafosociety/">
                     <img src="svg/instagram.svg" alt="Instagram" class="w-8 text-white"/> 
                  </a>
                  
                  <a class="" href="https://discord.gg/Tr7bHA8jQj">
                     <img src="svg/discord.svg" alt="Discord" class="w-8 text-white"/> 
                  </a>
               </div>
            </nav>

            {/* # CONTAINER DE FORA DA DESCRICÃO */}
            <div class="flex flex-col items-center justify-center flex-1">
               
               {/* # CABECALHO COM PNG */}
               <header class="flex flex-col items-center justify-center h-full text-center">
                  <h1 class="text-6xl text-green-200 md:text-8xl lg:text-9xl leading-solid ">Rainforest Society<br/> <br/></h1>
                  <div class="w-full md:w-[600px] -mt-16 md:-mt-32 lg:-mt-36">
                     <img src="images/banner-rainforest-society-nft.png" alt="NFT Com Utilidade Real"/>
                  </div>
               </header>

               {/* # CONTAINER DA DESCRICÃO */}
               <div class="text-center space-y-4 md:space-y-8">
                  <div class="h-2"></div>

                  {/* # DESCRICÃO */}
                  <h2 class="text-3xl font-bold md:text-5xl leading-solid text-sea-700">NFT com utilidade Real.<br/>Aceitando parcerias até Abril 2022.</h2>
                  <p class="tracking-wider text-green-200">Cadastre seu produto ou serviço GRATIS!</p>
                     
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

                  <div class="h-6"></div>

               </div>
            </div>

         </div>
      </div>
   )
}

export default Home