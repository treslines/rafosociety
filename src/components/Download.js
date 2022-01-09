import React, { Component } from 'react'
import Link from 'next/link'

export default class Downloads extends Component {
   render() {
      return (
         <div class="container" style={{marginTop: '50px'}}>
            <div class="row">
               <div class="col-12 col-md-6 center">
                  <h6 class="text-muted text-center">GRATIS DOWNLOADS</h6> 
                  <ul class="list-group">
                     <li class="list-group-item">
                        <Link href="/docs/CV_modelo_para_enviar_para_empresas_en.docx" >
                           CV Modelo Europa - Para enviar direto para empresas!
                        </Link>
                     </li>
                     <li class="list-group-item">
                        <Link href="/docs/CV_modelo_para_iniciantes_em_ingles.docx" >
                           CV Modelo Iniciante - Para enviar direto para empresas!
                        </Link>
                     </li>
                     <li class="list-group-item">CV Modelo Headhunter - Coming soon! Stay tuned! ;)</li>
                  </ul>
               </div>
            </div>
         </div>
      )
   }
}


