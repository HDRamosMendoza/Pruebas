define([
	'esri/dijit/PopupTemplate',
    'esri/InfoTemplate',
	], function(
		PopupTemplate,
		InfoTemplate
	) {
	  	const popupPrivate = {
	        /* 3 : Saneamiento Actos Previos */
	        PopupTemplate_ActosPrevios: new PopupTemplate({
	          	title: "<center>Distrito</center>",
	          	description: [ "",
			  		""
	            ].join(""),
	            fieldInfos: []
	        })
	        /* /3 : Saneamiento Actos Previos */
		};
  		return popupPrivate;
	}
);
/*
"",
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
*/
/*
fieldInfos: [
	              	{ fieldName: "id_dpto",  visible: true },
	              	{ fieldName: "nom_dep",  visible: true },
	              	{ fieldName: "id_prov",  visible: true },
	              	{ fieldName: "nom_prov", visible: true },
	              	{ fieldName: "id_dist",  visible: true },
	              	{ fieldName: "nom_dist", visible: true }
	            ]
*/