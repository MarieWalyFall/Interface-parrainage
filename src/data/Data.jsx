import React from "react";
import Diomaye from './../assets/candidats/diomaye.jpeg'
import Amadou from './../assets/candidats/amadou-ba.jpeg'
import Anta from './../assets/candidats/anta-babacar.png'
import Khalifa from './../assets/candidats/khalifa.jpeg'
import Idrissa from './../assets/candidats/idrissa.avif'
import Dethie from './../assets/candidats/dethie.jpeg'

const InfosCandidats = [
    {
        nom : 'FAYE',
        prenoms : 'Bassirou Diomaye Diakhar',
        partiePolitique : 'PASTEF',
        slogan : 'Diomaye moy Sonko',
        couleurParti : ['#0388ad', '#af3a3b', '#e3ecf1'],
        urlInfos : 'https://pastef.org/',
        photo : Diomaye
    },
    {
        nom : 'BA',
        prenoms : 'Amadou',
        partiePolitique : 'Benno Bok Yakaar',
        slogan : 'Jamm du matt sëkk',
        couleurParti : ['#0388ad', '#af3a3b', '#e3ecf1'],
        urlInfos : 'https://www.au-senegal.com/',
        photo : Amadou
    },
    {
        nom : 'NGOM',
        prenoms : 'Anta Babacar',
        partiePolitique : 'ARC',
        slogan : 'La relève',
        couleurParti : ['#0388ad', '#af3a3b', '#e3ecf1'],
        urlInfos : 'https://www.au-senegal.com/',
        photo : Anta
    },
    {
        nom : 'SALL',
        prenoms : 'Khalifa Ababacar',
        partiePolitique : 'Khalifa President',
        slogan : 'Mottali Yeene',
        couleurParti : ['#0388ad', '#af3a3b', '#e3ecf1'],
        urlInfos : 'https://www.au-senegal.com/',
        photo : Khalifa
    },
    {
        nom : 'SECK',
        prenoms : 'Idrissa',
        partiePolitique : 'Rewmi',
        slogan : 'Pour un Senegal gagnant',
        couleurParti : ['#0388ad', '#af3a3b', '#e3ecf1'],
        urlInfos : 'https://www.au-senegal.com/',
        photo : Idrissa
    },
    {
        nom : 'FALL',
        prenoms : 'Dethie',
        partiePolitique : 'PRP',
        slogan : 'Senegal\'ug dundin gu neex, ci réew mu taaru ',
        couleurParti : ['#0388ad', '#af3a3b', '#e3ecf1'],
        urlInfos : 'https://www.au-senegal.com/',
        photo : Dethie
    },
];

export const Electeurs = [
    {
        numcarteelecteur: 1,
        cin: 1234567890,
        nom: "Drame",
        prenom: "Khadidiatou",
        datenaissance: "2000-01-01T00:00:00Z",
        adresse: "123 Main Street",
        telephone: 1234567890,
        mail: "khadidiatoubassiroudrame@esp.sn",
        bureaudevote: 12,
        codeauthentification: 10234
    }, 
    {
        numcarteelecteur: 123456789,
        cin: 1234567890123,
        nom: "FALL",
        prenom: "Abdoulaye",
        datenaissance: "2002-10-05T00:00:00Z",
        adresse: "123 Main Street",
        telephone: 779634406,
        mail: "mariewalyfall@esp.sn",
        bureaudevote: 12,
        codeauthentification: 1234
    },
]
export default InfosCandidats;