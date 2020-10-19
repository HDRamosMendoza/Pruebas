define([
	'esri/dijit/PopupTemplate',
    'esri/InfoTemplate',
	], function(
		PopupTemplate,
		InfoTemplate
	) {
	  	const popupPrivate = {
	  		/* 0 : Centros Poblados */
	  		PopupTemplate_CentrosPoblados: new PopupTemplate({
	          title: "<center>CCPP</center>",
	          description: [ "",
	              "<table>\
	                <thead>\
	                  <tr>\
	                    <th class=\"bg-light-header\">Campo</th>\
	                    <th class=\"bg-light-header\">Descripción</th>\
	                  </tr>\
	                </thead>\
	                <tfoot>\
	                  	<tr>\
	                    	<th class=\"bg-light-header\">Campo</th>\
	                    	<th class=\"bg-light-header\">Descripción</th>\
	                  	</tr>\
	                </tfoot>\
	                <tbody>\
	                	<tr>\
	                    	<td class=\"bg-light\">IP CCPP</td>\
	                    	<td>{id_ccpp}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">Nombre CCPP</td>\
	                    	<td>{nom_ccpp}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">Código CCPP</td>\
	                    	<td>{cod_ccpp}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">Ubigeo Distrito</td>\
	                    	<td>{id_dist}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">Nombre Distrito</td>\
	                    	<td>{nom_dist}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">Nombre Provincia</td>\
	                    	<td>{nom_prov}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">Nombre Departamento</td>\
	                    	<td>{nom_dep}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">Capital CCPP</td>\
	                    	<td>{cap_ccpp}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">Población 2007</td>\
	                    	<td>{pob_2007}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">Vivienda 2007</td>\
	                    	<td>{viv_2007}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">Priorización</td>\
	                    	<td>{priorizacion}</td>\
	                  	</tr>\
	                </tbody>\
	              </table>"
	            ].join(""),
	            fieldInfos: [
	              	{ fieldName: "id_ccpp", 	 visible: true },
	              	{ fieldName: "nom_ccpp", 	 visible: true },
	              	{ fieldName: "cod_ccpp", 	 visible: true },
	              	{ fieldName: "id_dist", 	 visible: true },
	              	{ fieldName: "nom_dist", 	 visible: true },
	              	{ fieldName: "nom_prov", 	 visible: true },
	              	{ fieldName: "nom_dep", 	 visible: true },
	              	{ fieldName: "cap_ccpp", 	 visible: true },
	              	{ fieldName: "pob_2007", 	 visible: true },
	              	{ fieldName: "viv_2007", 	 visible: true },
	              	{ fieldName: "priorizacion", visible: true }
	            ]
	        }),
	        /* /0 : Centros Poblados */

	        /* 2 : Vias Vecinales */
	        PopupTemplate_ViasVecinales: new PopupTemplate({
	          title: "<center>Vías Vecinales</center>",
	          description: [ "",
	              "<table>\
	                <thead>\
	                  	<tr>\
	                    	<th class=\"bg-light-header\">Campo</th>\
	                    	<th class=\"bg-light-header\">Descripción</th>\
	                  	</tr>\
	                </thead>\
	                <tfoot>\
	                  	<tr>\
	                    	<th class=\"bg-light-header\">Campo</th>\
	                    	<th class=\"bg-light-header\">Descripción</th>\
	                  	</tr>\
	                </tfoot>\
	                <tbody>\
	                  	<tr>\
	                    	<td class=\"bg-light\">acc</td>\
	                    	<td>{acc}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">acc_lbl</td>\
	                    	<td>{acc_lbl}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">hct</td>\
	                    	<td>{hct}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">hct_lbl</td>\
	                    	<td>{hct_lbl}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">nam</td>\
	                    	<td>{nam}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">rst</td>\
	                    	<td>{rst}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">rst_lbl</td>\
	                    	<td>{rst_lbl}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">tuc</td>\
	                    	<td>{tuc}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">tuc_lbl</td>\
	                    	<td>{tuc_lbl}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">zpp</td>\
	                    	<td>{zpp}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">zpp_lbl</td>\
	                    	<td>{zpp_lbl}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">na3</td>\
	                    	<td>{na3}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">zki</td>\
	                    	<td>{zki}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">zkf</td>\
	                    	<td>{zkf}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">zer</td>\
	                    	<td>{zer}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">zer_lbl</td>\
	                    	<td>{zer_lbl}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">wid</td>\
	                    	<td>{wid}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">Ubigeo de Departamento</td>\
	                    	<td>{id_dep}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">Nombre de Departamento</td>\
	                    	<td>{nom_dep}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">Ubigeo de Provincia</td>\
	                    	<td>{id_prov}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">Nombre de Provincia</td>\
	                    	<td>{nom_prov}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">Tipo</td>\
	                    	<td>{tipo}</td>\
	                  	</tr>\
	                  	<tr>\
	                    	<td class=\"bg-light\">tipo_lbl</td>\
	                    	<td>{tipo_lbl}</td>\
	                  	</tr>\
	                </tbody>\
	              </table>"
	            ].join(""),
	            fieldInfos: [
	              	{ fieldName: "acc", 	  	visible: true },
	              	{ fieldName: "acc_lbl", 	visible: true },
	              	{ fieldName: "hct", 		visible: true },
	              	{ fieldName: "hct_lbl", 	visible: true },
	              	{ fieldName: "nam", 		visible: true },
	              	{ fieldName: "rst", 		visible: true },
	              	{ fieldName: "rst_lbl", 	visible: true },
	              	{ fieldName: "tuc", 		visible: true },
	              	{ fieldName: "tuc_lbl", 	visible: true },
	              	{ fieldName: "zpp", 		visible: true },
	              	{ fieldName: "zpp_lbl", 	visible: true },
	              	{ fieldName: "na3", 		visible: true },
	              	{ fieldName: "zki", 		visible: true },
	              	{ fieldName: "zkf", 		visible: true },
	              	{ fieldName: "zer", 		visible: true },
	              	{ fieldName: "zer_lbl", 	visible: true },
	              	{ fieldName: "wid", 		visible: true },
	              	{ fieldName: "id_dep", 		visible: true },
	              	{ fieldName: "nom_dep", 	visible: true },
	              	{ fieldName: "id_prov", 	visible: true },
	              	{ fieldName: "nom_prov", 	visible: true },
	              	{ fieldName: "tipo", 		visible: true },
	              	{ fieldName: "tipo_lbl", 	visible: true }
	            ]
	        }),
			/* /2 : Vias Vecinales */

			/* 3 : Vias Departamentales */
	        PopupTemplate_ViasDepartamentales: new PopupTemplate({
	          title: "<center>Vías Departamentales</center>",
	          description: [ "",
	              	"<table>\
		                <thead>\
		                  	<tr>\
		                    	<th class=\"bg-light-header\">Campo</th>\
		                    	<th class=\"bg-light-header\">Descripción</th>\
		                  	</tr>\
		                </thead>\
		                <tfoot>\
		                  	<tr>\
		                    	<th class=\"bg-light-header\">Campo</th>\
		                    	<th class=\"bg-light-header\">Descripción</th>\
		                  	</tr>\
		                </tfoot>\
		                <tbody>\
		                  	<tr>\
		                    	<td class=\"bg-light\">acc</td>\
		                    	<td>{acc}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">acc_lbl</td>\
		                    	<td>{acc_lbl}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">hct</td>\
		                    	<td>{hct}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">hct_lbl</td>\
		                    	<td>{hct_lbl}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">nam</td>\
		                    	<td>{nam}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">rst</td>\
		                    	<td>{rst}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">rst_lbl</td>\
		                    	<td>{rst_lbl}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">tuc</td>\
		                    	<td>{tuc}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">tuc_lbl</td>\
		                    	<td>{tuc_lbl}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">zpp</td>\
		                    	<td>{zpp}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">zpp_lbl</td>\
		                    	<td>{zpp_lbl}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">na3</td>\
		                    	<td>{na3}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">zki</td>\
		                    	<td>{zki}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">zkf</td>\
		                    	<td>{zkf}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Ubigeo de Departamento</td>\
		                    	<td>{id_dep}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Nombre de Departamento</td>\
		                    	<td>{nom_dep}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Ubigeo de Provincia</td>\
		                    	<td>{id_prov}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Nombre de Provincia</td>\
		                    	<td>{nom_prov}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Tipo</td>\
		                    	<td>{tipo}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">tipo_lbl</td>\
		                    	<td>{tipo_lbl}</td>\
		                  	</tr>\
		                </tbody>\
	              	</table>"
	            ].join(""),
	            fieldInfos: [
	              	{ fieldName: "acc", 	  	visible: true },
	              	{ fieldName: "acc_lbl", 	visible: true },
	              	{ fieldName: "hct", 		visible: true },
	              	{ fieldName: "hct_lbl", 	visible: true },
	              	{ fieldName: "nam", 		visible: true },
	              	{ fieldName: "rst", 		visible: true },
	              	{ fieldName: "rst_lbl", 	visible: true },
	              	{ fieldName: "tuc", 		visible: true },
	              	{ fieldName: "tuc_lbl", 	visible: true },
	              	{ fieldName: "zpp", 		visible: true },
	              	{ fieldName: "zpp_lbl", 	visible: true },
	              	{ fieldName: "na3", 		visible: true },
	              	{ fieldName: "zki", 		visible: true },
	              	{ fieldName: "zkf", 		visible: true },
	              	{ fieldName: "id_dep", 		visible: true },
	              	{ fieldName: "nom_dep", 	visible: true },
	              	{ fieldName: "id_prov", 	visible: true },
	              	{ fieldName: "nom_prov", 	visible: true },
	              	{ fieldName: "tipo", 		visible: true },
	              	{ fieldName: "tipo_lbl", 	visible: true }
	            ]
	        }),
	        /* /3 : Vias Departamentales */

	        /* 4 : Vias Nacionales */
	        PopupTemplate_ViasNacionales: new PopupTemplate({
	          title: "<center>Vías Nacionales</center>",
	          description: [ "",
	              	"<table>\
		                <thead>\
		                  	<tr>\
		                    	<th class=\"bg-light-header\">Campo</th>\
		                    	<th class=\"bg-light-header\">Descripción</th>\
		                  	</tr>\
		                </thead>\
		                <tfoot>\
		                  	<tr>\
		                    	<th class=\"bg-light-header\">Campo</th>\
		                    	<th class=\"bg-light-header\">Descripción</th>\
		                  	</tr>\
		                </tfoot>\
		                <tbody>\
		                  	<tr>\
		                    	<td class=\"bg-light\">acc</td>\
		                    	<td>{acc}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">acc_lbl</td>\
		                    	<td>{acc_lbl}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">nam</td>\
		                    	<td>{na3}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">nam</td>\
		                    	<td>{nam}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">zcl</td>\
		                    	<td>{zcl}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">zcl_lbl</td>\
		                    	<td>{zcl_lbl}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">hct</td>\
		                    	<td>{hct}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">hct_lbl</td>\
		                    	<td>{hct_lbl}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">rst</td>\
		                    	<td>{rst}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">rst_lbl</td>\
		                    	<td>{rst_lbl}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">zec</td>\
		                    	<td>{zec}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">zec_lbl</td>\
		                    	<td>{zec_lbl}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">tuc</td>\
		                    	<td>{tuc}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">tuc_lbl</td>\
		                    	<td>{tuc_lbl}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">wtc</td>\
		                    	<td>{wtc}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">wtc_lbl</td>\
		                    	<td>{wtc_lbl}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">zpp</td>\
		                    	<td>{zpp}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">zpp_lbl</td>\
		                    	<td>{zpp_lbl}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">na3</td>\
		                    	<td>{na3}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">zki</td>\
		                    	<td>{zki}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">zkf</td>\
		                    	<td>{zkf}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Ubigeo de Departamento</td>\
		                    	<td>{id_dep}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Nombre de Departamento</td>\
		                    	<td>{nom_dep}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Tipo</td>\
		                    	<td>{tipo}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">tipo_lbl</td>\
		                    	<td>{tipo_lbl}</td>\
		                  	</tr>\
		                </tbody>\
	              	</table>"
	            ].join(""),
	            fieldInfos: [
	              	{ fieldName: "acc", 	visible: true },
	              	{ fieldName: "acc_lbl", visible: true },
	              	{ fieldName: "na3", 	visible: true },
	              	{ fieldName: "nam", 	visible: true },
					{ fieldName: "zcl", 	visible: true },
	              	{ fieldName: "zcl_lbl", visible: true },
	              	{ fieldName: "hct", 	visible: true },
	              	{ fieldName: "hct_lbl", visible: true },
	              	{ fieldName: "rst", 	visible: true },
	              	{ fieldName: "rst_lbl", visible: true },
	              	{ fieldName: "zec", 	visible: true },
	              	{ fieldName: "zec_lbl", visible: true },
	              	{ fieldName: "tuc", 	visible: true },
	              	{ fieldName: "tuc_lbl", visible: true },
	              	{ fieldName: "wtc", 	visible: true },
	              	{ fieldName: "wtc_lbl", visible: true },
	              	{ fieldName: "zpp", 	visible: true },
	              	{ fieldName: "zpp_lbl", visible: true },	              	
	              	{ fieldName: "na3", 	visible: true },
	              	{ fieldName: "zki", 	visible: true },
	              	{ fieldName: "zkf", 	visible: true },
	              	{ fieldName: "id_dep", 	visible: true },
	              	{ fieldName: "nom_dep", visible: true },
	              	{ fieldName: "tipo", 	visible: true },
	              	{ fieldName: "tipo_lbl",visible: true }
	            ]
	        }),
	        /* /4 : Vias Nacionales */

	        /* 5 : Via Ferrea */
	        PopupTemplate_ViaFerrea: new PopupTemplate({
	          title: "<center>Vía Ferrea</center>",
	          description: [ "",
	              	"<table>\
		                <thead>\
		                  	<tr>\
		                    	<th class=\"bg-light-header\">Campo</th>\
		                    	<th class=\"bg-light-header\">Descripción</th>\
		                  	</tr>\
		                </thead>\
		                <tfoot>\
		                  	<tr>\
		                    	<th class=\"bg-light-header\">Campo</th>\
		                    	<th class=\"bg-light-header\">Descripción</th>\
		                  	</tr>\
		                </tfoot>\
		                <tbody>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Nombre de la Vía</td>\
		                    	<td>{nom_viaferrea}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Kilómetro</td>\
		                    	<td>{km}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Tramo</td>\
		                    	<td>{tramo}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Estado</td>\
		                    	<td>{estado}</td>\
		                  	</tr>\
		                </tbody>\
	              	</table>"
	            ].join(""),
	            fieldInfos: [
	              	{ fieldName: "nom_viaferrea", visible: true },
	              	{ fieldName: "km", 			  visible: true },
	              	{ fieldName: "tramo", 		  visible: true },
	              	{ fieldName: "estado", 		  visible: true },
	            ]
	        }),
	        /* /5 : Via Ferrea */

	        /* 6 : Departamento */
	  		PopupTemplate_Departamento: new PopupTemplate({
	          title: "<center>Departamento</center>",
			  description: ["",
			  		`<div class="acd">
					  	<div class="acd__item">
						  	<input type="checkbox" name="acordeon" id="item1" checked>
						  	<label for="item1" class="acd_title">Datos de Monitoreo</label>
						  	<span class="acd_code"></span>
						  	<div class="acd_content">
								<table>
									<tbody>
										<tr>
											<td class="label">Usuario: </td>
											<td>3214582</td>
										</tr>
										<tr>
											<td class="label">Tipo de Inversión: </td>
											<td>PMAHP</td>
										</tr>
										<tr>
											<td class="label">Número: </td>
											<td>2</td>
										</tr>
										<tr>
											<td class="label">Año: </td>
											<td>2020</td>
										</tr>
										<tr>
											<td class="label">N° de Convenio: </td>
											<td>PUN/VMVU/PNVR</td>
										</tr>
										<tr>
											<td class="label">Fecha: </td>
											<td>9/10/2019 10:11 p.m.</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="acd__item">
							<input type="checkbox" name="acordeon" id="item2">
							<label for="item2" class="acd_title">Beneficiario</label>
							<span class="acd_code"></span>
							<div class="acd_content">
								<table>
									<tbody>
										<tr>
											<td class="label">DNI: </td>
											<td>016889074</td>
										</tr>
										<tr>
											<td class="label">Nombres: </td>
											<td>MARGARITA ANTONIA</td>
										</tr>
										<tr>
											<td class="label">Apellido Paterno: </td>
											<td>CHURA</td>
										</tr>
										<tr>
											<td class="label">Apellido Materno: </td>
											<td>LLUICHO</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="acd__item">
							<input type="checkbox" name="acordeon" id="item3">
							<label for="item3" class="acd_title">Ubicación</label>
							<span class="acd_code"></span>
							<div class="acd_content">
								<table>
									<tbody>
										<tr>
											<td class="label">Departamento: </td>
											<td>PUNO</td>
										</tr>
										<tr>
											<td class="label">Provincia: </td>
											<td>CARABAYA</td>
										</tr>
										<tr>
											<td class="label">Distrito: </td>
											<td>COASA</td>
										</tr>
										<tr>
											<td class="label">Centro Poblado: </td>
											<td>ESPERANZA DE TAQUIPALCA</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
				  	</div>`
	            ].join(""),
	            fieldInfos: [
	              	{ fieldName: "id_dpto", visible: true },
	              	{ fieldName: "nom_dep", visible: true }
	            ]
	        }).setTitle("HOLA MUNDO"),
	        /* /6 : Departamento */

	        /* 7 : Provincia */
	        PopupTemplate_Provincia: new PopupTemplate({
	          	title: "<center>Provincia</center>",
	          	description: [ "",
		            "<table>\
		                <thead>\
		                  <tr>\
		                    <th class=\"bg-light-header\">Campo</th>\
		                    <th class=\"bg-light-header\">Descripción</th>\
		                  </tr>\
		                </thead>\
		                <tfoot>\
		                  	<tr>\
		                    	<th class=\"bg-light-header\">Campo</th>\
		                    	<th class=\"bg-light-header\">Descripción</th>\
		                  	</tr>\
		                </tfoot>\
		                <tbody>\
		                 	<tr>\
		                    	<td class=\"bg-light\">Ubigeo Departamento</td>\
		                    	<td>{id_dpto}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Nombre Departamento</td>\
			                	<td>{nom_dep}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light bg-light-label\">Ubigeo Provincia</td>\
		                    	<td class=\"bg-light-label\">{id_prov}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light bg-light-label\">Nombre Provincia</td>\
		                    	<td class=\"bg-light-label\">{nom_prov}</td>\
		                  	</tr>\
		                </tbody>\
		            </table>"
	            ].join(""),
	            fieldInfos: [
	              	{ fieldName: "id_dpto",  visible: true },
	              	{ fieldName: "nom_dep",  visible: true },
	              	{ fieldName: "id_prov",  visible: true },
	              	{ fieldName: "nom_prov", visible: true }
	            ]
	        }),
	        /* /7 : Provincia */

	        /* 8 : Distrito */
	        PopupTemplate_Distrito: new PopupTemplate({
	          title: "<center>Distrito</center>",
	          description: [ "",
	              	"<table>\
		                <thead>\
		                  	<tr>\
		                    	<th class=\"bg-light-header\">Campo</th>\
		                    	<th class=\"bg-light-header\">Descripción</th>\
		                  	</tr>\
		                </thead>\
		                <tfoot>\
		                  	<tr>\
		                    	<th class=\"bg-light-header\">Campo</th>\
		                    	<th class=\"bg-light-header\">Descripción</th>\
		                  	</tr>\
		                </tfoot>\
		                <tbody>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Ubigeo Departamento</td>\
		                    	<td>{id_dpto}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Nombre Departamento</td>\
			                	<td>{nom_dep}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Ubigeo Provincia</td>\
		                    	<td>{id_prov}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light\">Nombre Provincia</td>\
		                    	<td>{nom_prov}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light bg-light-label\">Ubigeo Distrito</td>\
		                    	<td class=\"bg-light-label\">{id_dist}</td>\
		                  	</tr>\
		                  	<tr>\
		                    	<td class=\"bg-light bg-light-label\">Nombre Distrito</td>\
		                    	<td class=\"bg-light-label\">{nom_dist}</td>\
		                  	</tr>\
		                </tbody>\
	              	</table>"
	            ].join(""),
	            fieldInfos: [
	              	{ fieldName: "id_dpto",  visible: true },
	              	{ fieldName: "nom_dep",  visible: true },
	              	{ fieldName: "id_prov",  visible: true },
	              	{ fieldName: "nom_prov", visible: true },
	              	{ fieldName: "id_dist",  visible: true },
	              	{ fieldName: "nom_dist", visible: true }
	            ]
	        })
	        /* /8 : Distrito */
		};
  		return popupPrivate;
	}
);