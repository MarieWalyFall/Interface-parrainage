import React, { useState } from 'react';
import { Electeurs } from '@/data/Data';

function Connexion({
    numeroCarteElecteur,
    setNumeroCarteElecteur,
    numeroCarteIdentite,
    setNumeroCarteIdentite,
    codeVerification,
    setCodeVerification,  
    handleVerificationCode
}) {
  const [etape, setEtape] = useState(1);
  const [electeur, setElecteur] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier si l'électeur existe
    const electeur = Electeurs.find((electeur) => 
        electeur.numcarteelecteur == numeroCarteElecteur &&
        electeur.cin == numeroCarteIdentite
    );
    if (electeur) {
      setElecteur(electeur);
      setEtape(2); // Passer à l'étape 2
    } else {
      alert('L\'électeur n\'existe pas');
    }
  };

  return (
    <div className='w-full'>
      {etape === 1 ? (
        <form onSubmit={handleSubmit} className='w-full p-4 flex flex-col justify-center items-center'>
            <h2 className='font-bold'>Connexion</h2>
          <div className='flex flex-col relative z-0 w-full my-5 group'>
            <label htmlFor='numeroCarteElecteur' className='peer-focus:font-medium mb-1 md:text-xl'>Numéro de Carte Électeur :</label>
            <input
              id='numeroCarteElecteur'
              className='block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=" " required 
              type="text"
              value={numeroCarteElecteur}
              onChange={(e) => setNumeroCarteElecteur(e.target.value)}
            />
          </div>
          <div className='flex flex-col relative z-0 w-full my-5 group'>
            <label htmlFor='numeroCarteIdentite' className='peer-focus:font-medium mb-1 md:text-xl'>Numéro de Carte d'Identité :</label>
            <input
              id='numeroCarteIdentite'
              className='block py-2.5 px-0  w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              type="text"
              value={numeroCarteIdentite}
              onChange={(e) => setNumeroCarteIdentite(e.target.value)}
            />
          </div>
          <button type="submit" className='bg-blue-500 w-32 p-2 rounded-full text-white hover:bg-blue-700'>Soumettre</button>
        </form>
      ) : (
        <div className='w-full p-4 flex relative flex-col justify-center items-center'>
          <p className='font-bold text-sm md:text-lg'>Code d'authentification envoyé à votre numéro de téléphone et votre adresse e-mail.</p>
          <div className='flex flex-col w-full my-5 group'>
            <div className='flex m-5 space-x-4'>
                <div className=''>
                    <p className='font-semibold mb-1 text-sm md:text-lg'>Nom : </p>
                    <p className='font-semibold mb-1 text-sm md:text-lg'>Prenom(s) : </p>
                    <p className='font-semibold mb-1 text-xs md:text-lg'>Date de naissance : </p>
                    <p className='font-semibold mb-1 text-xs md:text-lg'>Bureau de vote : </p>
                </div>
                <div className=''> 
                    <p className='peer-focus:font-medium mb-1 text-sm md:text-lg'>{electeur.nom}</p>
                    <p className='peer-focus:font-medium mb-1 text-sm md:text-lg'>{electeur.prenom}</p>
                    <p className='peer-focus:font-medium mb-1 text-sm md:text-lg'>{electeur.datenaissance}</p>
                    <p className='peer-focus:font-medium mb-1 text-sm md:text-lg'>{electeur.bureaudevote}</p>
                </div>
            </div>
            <div className=''>
                <label className='peer-focus:font-medium my-1 md:text-xl' htmlFor='codeVerification'>Code d'authentification :</label>
                <input
                    className='block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    id='codeVerification'
                    type='text'
                    value={codeVerification}
                    onChange={(e) => setCodeVerification(e.target.value)}
                />
            </div>
          </div>
          <button onClick={handleVerificationCode} className='bg-blue-500 w-64 p-2 rounded-full text-white hover:bg-blue-700'>Envoyer le code d'authentification</button>
        </div>
      )}
    </div>
  );
}

export default Connexion;
