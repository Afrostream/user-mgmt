

var CountrySelect = React.createClass({
	showLock: function() {
		// We receive lock from the parent component in this case
		// If you instantiate it in this component, just do this.lock.show()

		//this.props.lock.show();
	},

	render: function() {
		return (
			<div className="form-inline">
				<select className="form-control" id="country" name="country" required>
					<option value="AF">Afghanistan</option>
					<option value="ZA">Afrique du Sud</option>
					<option value="AL">Albanie</option>
					<option value="DZ">Algérie</option>
					<option value="DE">Allemagne</option>
					<option value="AD">Andorre</option>
					<option value="AO">Angola</option>
					<option value="AI">Anguilla</option>
					<option value="AG">Antigua et Barbuda</option>
					<option value="AN">Antilles néerlandaises</option>
					<option value="SA">Arabie saoudite</option>
					<option value="AR">Argentine</option>
					<option value="AM">Arménie</option>
					<option value="AW">Aruba</option>
					<option value="AU">Australie</option>
					<option value="AT">Autriche</option>
					<option value="AZ">Azerbaïdjan</option>
					<option value="BS">Bahamas</option>
					<option value="BH">Bahreïn</option>
					<option value="BD">Bangladesh</option>
					<option value="BB">Barbade</option>
					<option value="BE">Belgique</option>
					<option value="BM">Bermudes</option>
					<option value="BT">Bhoutan</option>
					<option value="BY">Biélorussie</option>
					<option value="BO">Bolivie</option>
					<option value="BA">Bosnie et Herzégovine</option>
					<option value="BW">Botswana</option>
					<option value="BN">Brunei Darussalam</option>
					<option value="BR">Brésil</option>
					<option value="BG">Bulgarie</option>
					<option value="BF">Burkina Faso</option>
					<option value="BI">Burundi</option>
					<option value="BZ">Bélize</option>
					<option value="BJ">Bénin</option>
					<option value="KH">Cambodge</option>
					<option value="CM">Cameroun</option>
					<option value="CA">Canada</option>
					<option value="CV">Cap-Vert</option>
					<option value="CF">Centrafrique</option>
					<option value="CL">Chili</option>
					<option value="CN">Chine</option>
					<option value="CY">Chypre</option>
					<option value="CO">Colombiae</option>
					<option value="KM">Comores</option>
					<option value="CG">Congo</option>
					<option value="KR">Corée du Nord</option>
					<option value="KP">Corée du Sud</option>
					<option value="CR">Costa Rica</option>
					<option value="HR">Croatie</option>
					<option value="CU">Cuba</option>
					<option value="CI">Côte d'Ivoire</option>
					<option value="DK">Danemark</option>
					<option value="DJ">Djibouti</option>
					<option value="DM">Dominique</option>
					<option value="SV">El Salvador</option>
					<option value="ES">Espagne</option>
					<option value="EE">Estonie</option>
					<option value="EG">Égypte</option>
					<option value="AE">Émirats arabes unis</option>
					<option value="EC">Équateur</option>
					<option value="ER">Érythrée</option>
					<option value="FM">États fédérés de Micronésie</option>
					<option value="US">États-Unis</option>
					<option value="ET">Éthiopie</option>
					<option value="FJ">Fidji</option>
					<option value="FI">Finlande</option>
					<option value="FR" selected>France</option>
					<option value="GA">Gabon</option>
					<option value="GM">Gambie</option>
					<option value="GH">Ghana</option>
					<option value="GI">Gibraltar</option>
					<option value="GD">Grenade</option>
					<option value="GL">Groënland</option>
					<option value="GR">Grèce</option>
					<option value="GP">Guadeloupe</option>
					<option value="GU">Guam</option>
					<option value="GT">Guatemala</option>
					<option value="GN">Guinée</option>
					<option value="GQ">Guinée équatoriale</option>
					<option value="GW">Guinée-Bissau</option>
					<option value="GY">Guyane</option>
					<option value="GF">Guyane française</option>
					<option value="GE">Géorgie</option>
					<option value="HT">Haïti</option>
					<option value="HN">Honduras</option>
					<option value="HK">Hong Kong</option>
					<option value="HU">Hongrie</option>
					<option value="BV">Ile Bouvet</option>
					<option value="CX">Ile Christmas</option>
					<option value="HM">Ile Heard et iles McDonald</option>
					<option value="MU">Ile Maurice</option>
					<option value="NF">Ile Norfolk</option>
					<option value="KY">Iles Cayman</option>
					<option value="CC">Iles Cocos (Keeling)</option>
					<option value="CK">Iles Cook</option>
					<option value="FK">Iles Falkland (Malouines)</option>
					<option value="FO">Iles Faroe</option>
					<option value="MH">Iles Marshall</option>
					<option value="MP">Iles Northern Mariana</option>
					<option value="SB">Iles Salomon</option>
					<option value="VG">Iles Vierges, G.B.</option>
					<option value="VI">Iles Vierges, É.U.</option>
					<option value="IN">Inde</option>
					<option value="ID">Indonésie</option>
					<option value="IQ">Irak</option>
					<option value="IR">Iran</option>
					<option value="IE">Irlande</option>
					<option value="IS">Islande</option>
					<option value="IL">Israël</option>
					<option value="IT">Italie</option>
					<option value="JM">Jamaïque</option>
					<option value="JP">Japon</option>
					<option value="JO">Jordan</option>
					<option value="KZ">Kazakhstan</option>
					<option value="KE">Kenya</option>
					<option value="KG">Kirghizstan</option>
					<option value="KI">Kiribati</option>
					<option value="KW">Koweït</option>
					<option value="LA">Laos</option>
					<option value="LV">Lettonie</option>
					<option value="LB">Liban</option>
					<option value="LY">Libye</option>
					<option value="LR">Libéria</option>
					<option value="LI">Liechtenstein</option>
					<option value="LT">Lituanie</option>
					<option value="LU">Luxembourg</option>
					<option value="LS">Lésotho</option>
					<option value="MO">Macao</option>
					<option value="MK">Macédoine</option>
					<option value="MG">Madagascar</option>
					<option value="MY">Malaisie</option>
					<option value="MW">Malawi</option>
					<option value="MV">Maldives</option>
					<option value="ML">Mali</option>
					<option value="MT">Malte</option>
					<option value="MA">Maroc</option>
					<option value="MQ">Martinique</option>
					<option value="MR">Mauritanie</option>
					<option value="YT">Mayotte</option>
					<option value="MX">Mexique</option>
					<option value="MD">Moldavie</option>
					<option value="MC">Monaco</option>
					<option value="MN">Mongolie</option>
					<option value="MS">Montserrat</option>
					<option value="MZ">Mozambique</option>
					<option value="MM">Myanmar (Birmanie)</option>
					<option value="NA">Namibie</option>
					<option value="NR">Nauru</option>
					<option value="NI">Nicaragua</option>
					<option value="NE">Niger</option>
					<option value="NG">Nigéria</option>
					<option value="NU">Niue</option>
					<option value="NO">Norvège</option>
					<option value="NC">Nouvelle Calédonie</option>
					<option value="NZ">Nouvelle-Zélande</option>
					<option value="NP">Népal</option>
					<option value="OM">Oman</option>
					<option value="UG">Ouganda</option>
					<option value="UZ">Ouzbékistan</option>
					<option value="PK">Pakistan</option>
					<option value="PW">Palau</option>
					<option value="PS">Palestine</option>
					<option value="PA">Panama</option>
					<option value="PG">Papouasie Nouvelle Guinée</option>
					<option value="PY">Paraguay</option>
					<option value="NL">Pays-Bas</option>
					<option value="PH">Philippines</option>
					<option value="PN">Pitcairn</option>
					<option value="PL">Pologne</option>
					<option value="PF">Polynésie française</option>
					<option value="PT">Portugal</option>
					<option value="PR">Puerto Rico</option>
					<option value="PE">Pérou</option>
					<option value="QA">Qatar</option>
					<option value="RO">Roumanie</option>
					<option value="GB">Royaume-Uni</option>
					<option value="RU">Russie</option>
					<option value="RW">Rwanda</option>
					<option value="CD">République Démocratique du Congo</option>
					<option value="DO">République dominicaine</option>
					<option value="CZ">République tchèque</option>
					<option value="RE">Réunion, île de la</option>
					<option value="EH">Sahara Ouest</option>
					<option value="KN">Saint-Kitts et Nevis</option>
					<option value="PM">Saint-Pierre et Miquelon</option>
					<option value="VC">Saint-Vincent et Les Grenadines</option>
					<option value="SH">Sainte-Hélène</option>
					<option value="LC">Sainte-Lucie</option>
					<option value="WS">Samoa</option>
					<option value="AS">Samoa américaine</option>
					<option value="SM">San Marino</option>
					<option value="ST">San Tomé et Principe</option>
					<option value="SC">Seychelles</option>
					<option value="SL">Sierra Leone</option>
					<option value="SG">Singapour</option>
					<option value="SK">Slovaquie</option>
					<option value="SI">Slovénie</option>
					<option value="SO">Somalie</option>
					<option value="SD">Soudan</option>
					<option value="LK">Sri Lanka</option>
					<option value="GS">St-George et les iles Sandwich</option>
					<option value="CH">Suisse</option>
					<option value="SR">Surinam</option>
					<option value="SE">Suède</option>
					<option value="SJ">Svalbard et Jan Mayen</option>
					<option value="SZ">Swaziland</option>
					<option value="SY">Syrie</option>
					<option value="SN">Sénégal</option>
					<option value="TJ">Tadjikistan</option>
					<option value="TZ">Tanzanie</option>
					<option value="TW">Taïwan</option>
					<option value="TD">Tchad</option>
					<option value="IO">Territoire britannique de l'Océan Indien</option>
					<option value="TF">Territoires français du Sud</option>
					<option value="TH">Thaïlande</option>
					<option value="TP">Timor Est</option>
					<option value="TG">Togo</option>
					<option value="TK">Tokelau</option>
					<option value="TO">Tonga</option>
					<option value="TT">Trinidad et Tobago</option>
					<option value="TN">Tunisie</option>
					<option value="TM">Turkmenistan</option>
					<option value="TC">Turks et iles Caicos</option>
					<option value="TR">Turquie</option>
					<option value="TV">Tuvalu</option>
					<option value="UA">Ukraine</option>
					<option value="UM">United States Minor Outlying Islands</option>
					<option value="UY">Uruguay</option>
					<option value="VU">Vanuatu</option>
					<option value="VA">Vatican, cité du</option>
					<option value="VN">Vietnam</option>
					<option value="VE">Vénézuela</option>
					<option value="WF">Wallis et Futuna</option>
					<option value="YU">Yougoslavie</option>
					<option value="YE">Yémen</option>
					<option value="ZM">Zambie</option>
					<option value="ZW">Zimbabwé</option>
				</select>
			</div>
		);
	}
});