import React, { useState } from 'react';
import Candidat from './../assets/candidat.jpg';
import InfosCandidats from '@/data/Data';
import Exit from './../assets/exit-svgrepo-com.png';

function Candidats({ setVerificationReussie, setConnexion }) {
  const [showConfirmation, setShowConfirmation] = useState(false); // État pour afficher ou masquer la confirmation
  const [selectedCandidate, setSelectedCandidate] = useState(null); // État pour stocker les informations sur le candidat sélectionné
  const [parrainedCandidate, setParrainedCandidate] = useState(null); // État pour stocker les informations sur le candidat parrainé
  const [codeVerification, setCodeVerification] = useState(''); // État pour stocker le code de vérification

  const handleParrainer = (candidat) => {
    setSelectedCandidate(candidat); // Stocker les informations sur le candidat sélectionné
    setShowConfirmation(true); // Afficher la confirmation
  };

  const handleVerificationCode = () => {
    // Vérifier le code de vérification
    if (codeVerification === '12345') {
      setParrainedCandidate(selectedCandidate); // Stocker les informations sur le candidat parrainé
      setShowConfirmation(false); // Masquer la fenêtre de confirmation
    } else {
      alert('Code de vérification incorrect');
    }
  }

  return (
    <div>
      <div className='flex justify-end mt-4 pr-16'>
        <button
          onClick={() => {
            setVerificationReussie(false);
            setConnexion('');
          }}
          className='inline-flex justify-center items-center bg-red-500 p-2 rounded-xl text-white hover:bg-red-700'>
          Se déconnecter
          <img src={Exit} alt='' className='pl-2 h-4' />
        </button>
      </div>
      <div className='flex flex-col justify-center items-center mb-5'>
        <img src={Candidat} className='h-24' alt='Candidat' />
        <h1 className='font-bold text-2xl'>Les candidats</h1>
      </div>
      {/* Affichage du message de parrainage si un candidat a été parrainé */}
      {parrainedCandidate && (
        <div className='flex justify-center items-center mb-5'>
          <p>Vous avez parrainé le candidat <strong>{parrainedCandidate.prenoms} {parrainedCandidate.nom}</strong>.</p>
        </div>
      )}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
        {InfosCandidats.map((candidat, index) => (
          <div key={index} className='max-w-xs bg-white md:m-2 border h-96 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <a href={candidat.urlInfos}>
              <img className='rounded-t-lg w-full h-1/3' src={candidat.photo} alt={`${candidat.nom} ${candidat.prenoms}`} />
            </a>
            <div className='p-5'>
              <a href={candidat.urlInfos}>
                <h5 className='mb-2 text-lg font-bold tracking-tight text-gray-500 dark:text-white'>
                  {candidat.prenoms} {candidat.nom}
                </h5>
              </a>
              <p className='mb-3 font-normal text-sm text-gray-700 dark:text-gray-400'>
                <span className='font-bold'>Parti politique : </span> {candidat.partiePolitique}
              </p>
              <p className='mb-3 font-normal text-sm text-gray-700 dark:text-gray-400'>
                <span className='font-bold'>Slogan : </span> {candidat.slogan}
              </p>
              <p className='mb-3 font-bold text-sm text-gray-700 dark:text-gray-400'>Couleurs du parti :</p>
              <div className='flex space-x-2'>
                {candidat.couleurParti.map((color, index) => (
                  <div key={index} className='w-6 h-6 rounded-full border border-gray-200' style={{ backgroundColor: color }} title={`Couleur ${index + 1}`} />
                ))}
              </div>
              <a href={candidat.urlInfos} className='inline-flex items-center px-3 py-2 my-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Voir plus
                <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                  <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                </svg>
              </a>
              {/* Bouton Parrainer désactivé si un candidat a déjà été parrainé */}
              <button onClick={() => handleParrainer(candidat)} disabled={parrainedCandidate !== null} className={`py-2 px-3 ml-4 my-2 rounded-lg text-sm font-medium ${parrainedCandidate !== null  ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-green-500 text-white hover:bg-green-700'}`}>
                Parrainer
              </button>

            </div>
          </div>
        ))}
      </div>
      {/* Pop-up de confirmation */}
      {showConfirmation && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
            <div className='flex flex-col justify-center w-2/3 items-center bg-white p-8 rounded-lg shadow-md'>
                <p>Pour parrainer le candidat <span className='text-gray-500 font-bold'>{selectedCandidate.prenoms} {selectedCandidate.nom}</span>, veuillez renseigner le code envoyé à votre numéro de téléphone et votre adresse e-mail.</p>
                <div className='grid grid-cols-2 lg:w-1/3 justify-center items-center'>
                    <input
                    className='col-span-2 block py-2.5 px-0 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    id='codeVerification'
                    type='text'
                    value={codeVerification}
                    onChange={(e) => setCodeVerification(e.target.value)}
                    />
                    <button onClick={handleVerificationCode} className='bg-blue-500 mt-4 p-2 mr-2 rounded-lg text-white hover:bg-blue-700'>Envoyer</button>
                    <button className='bg-red-500 p-2 mt-4 text-white rounded-lg hover:bg-red-700' onClick={() => setShowConfirmation(false)}>Annuler</button>
                </div>

            </div>
        </div>
      )}
    </div>
  );
} 

export default Candidats;
