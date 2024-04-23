import React, { useState } from 'react';
import Vote from './../assets/R-removebg-preview.png';
import Candidats from './Candidats';
import Authentification from './Authentification';
import Connexion from './Connexion';
import { Electeurs } from '@/data/Data';

function Accueil() {
  const [numeroCarteElecteur, setNumeroCarteElecteur] = useState('');
  const [numeroCarteIdentite, setNumeroCarteIdentite] = useState('');
  const [nomFamille, setNomFamille] = useState('');
  const [numeroBureauVote, setNumeroBureauVote] = useState('');
  const [numeroTelephone, setNumeroTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [codeVerification, setCodeVerification] = useState('');
  const [etape, setEtape] = useState(1);
  const [verificationReussie, setVerificationReussie] = useState(false);
  const [connexion, setConnexion] = useState('');
  const [electeur, setElecteur] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier si l'électeur existe
    const electeur = Electeurs.find((electeur) => 
        electeur.numcarteelecteur === numeroCarteElecteur &&
        electeur.cin === numeroCarteIdentite &&
        electeur.nom === nomFamille &&
        electeur.bureaudevote === numeroBureauVote
    );
    if (electeur) {
      setElecteur(electeur);
      setEtape(2); // Passer à l'étape 2
    } else {
      alert('L\'électeur n\'existe pas');
    }
  };
  const handleVerification = (e) => {
    e.preventDefault();
    // Vérifier si l'email et le numéro de téléphone sont renseignés
    if (email === '' || numeroTelephone === '') {
        alert('Veuillez saisir votre adresse e-mail et votre numéro de téléphone');
        return;
    }
    // Envoyer le code de vérification
    alert('Code de vérification envoyé !');
    setEtape(3); // Passer à l'étape 3
  };

  const handleVerificationCode = (e) => {
    e.preventDefault();
    // Vérifier le code de vérification
    // (Simulons ici que le code est correct)
    if (codeVerification === electeur.codeauthentification) {
        setVerificationReussie(true);
    } else {
        alert('Code de vérification incorrect');
    }
  };


  return (
    verificationReussie ? (
        <Candidats setVerificationReussie={setVerificationReussie} setConnexion={setConnexion}/>
    ) : (
        <div className="auth flex justify-center items-center">
            {connexion == '' ? (
                <div className='bg-white p-4 md:w-1/2 flex flex-col justify-center items-center'>
                <img src={Vote} className='h-32' />
                <h2 className='font-bold text-xl'>Bienvenue sur votre plateforme de parrainage !</h2>
                <div className='space-x-8 mt-4'>
                    <button className='bg-blue-500 p-2 rounded-full text-white hover:bg-blue-700' onClick={() => setConnexion('compte')}>Creer un compte</button>
                    <button className='bg-blue-500 p-2 rounded-full text-white hover:bg-blue-700' onClick={() => setConnexion('connexion')}>Se connecter</button>
                </div>
            </div>

            ) : (
                <div className='w-full flex justify-center items-center'>
                    {connexion == 'connexion' ? (
                        <div className='bg-white p-4 w-3/4 md:w-1/2 flex flex-col justify-center items-center'>
                            <img src={Vote} className='h-32' />
                            <Connexion
                                numeroCarteElecteur={numeroCarteElecteur}
                                setNumeroCarteElecteur={setNumeroCarteElecteur}
                                numeroCarteIdentite={numeroCarteIdentite}
                                setNumeroCarteIdentite={setNumeroCarteIdentite}
                                nomFamille={nomFamille}
                                setNomFamille={setNomFamille}
                                numeroBureauVote={numeroBureauVote}
                                setNumeroBureauVote={setNumeroBureauVote}
                                email={email}
                                setEmail={setEmail}
                                numeroTelephone={numeroTelephone}
                                setNumeroTelephone={setNumeroTelephone}
                                handleVerification={handleVerification}
                                etape={etape}
                                setEtape={setEtape}
                                codeVerification={codeVerification}
                                setCodeVerification={setCodeVerification}
                                handleVerificationCode={handleVerificationCode}
                                handleSubmit={handleSubmit}
                            />
                        </div>
    
                    ) : (
                        <div className='w-full flex justify-center items-center'>
                            <div className='bg-white p-4 w-3/4 md:w-1/2 flex flex-col justify-center items-center'>
                                <img src={Vote} className='h-32' />
                                <Authentification
                                    numeroCarteElecteur={numeroCarteElecteur}
                                    setNumeroCarteElecteur={setNumeroCarteElecteur}
                                    numeroCarteIdentite={numeroCarteIdentite}
                                    setNumeroCarteIdentite={setNumeroCarteIdentite}
                                    nomFamille={nomFamille}
                                    setNomFamille={setNomFamille}
                                    numeroBureauVote={numeroBureauVote}
                                    setNumeroBureauVote={setNumeroBureauVote}
                                    email={email}
                                    setEmail={setEmail}
                                    numeroTelephone={numeroTelephone}
                                    setNumeroTelephone={setNumeroTelephone}
                                    handleVerification={handleVerification}
                                    etape={etape}
                                    setEtape={setEtape}
                                    codeVerification={codeVerification}
                                    setCodeVerification={setCodeVerification}
                                    handleVerificationCode={handleVerificationCode}
                                    handleSubmit={handleSubmit}
                                />
                            </div>

                        </div>
    
                    )}
                </div>
            )}

            
        </div>

    )
  );
}

export default Accueil;
