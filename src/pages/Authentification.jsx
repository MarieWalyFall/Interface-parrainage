import React from 'react';

function Authentification({
  numeroCarteElecteur,
  setNumeroCarteElecteur,
  numeroCarteIdentite,
  setNumeroCarteIdentite,
  nomFamille,
  setNomFamille,
  numeroBureauVote,
  setNumeroBureauVote,
  email,
  setEmail,
  numeroTelephone,
  setNumeroTelephone,
  handleVerification,
  etape,
  codeVerification,
  setCodeVerification,
  handleVerificationCode,
  handleSubmit
}) {
  return (
    <div className='w-full'>
        {etape === 1 ? (
            <form onSubmit={handleSubmit} className='w-full p-4 flex flex-col justify-center items-center'>
                <h2 className='font-bold'>Authentification</h2>
                <div className='flex flex-col relative z-0 w-full my-5 group'>
                    <label htmlFor='numeroCarteElecteur' className='peer-focus:font-medium mb-4 md:text-xl absolute dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Numéro de Carte Électeur :</label>
                    <input
                        id='numeroCarteElecteur'
                        className='block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=" " required 
                        type="text"
                        value={numeroCarteElecteur}
                        onChange={(e) => setNumeroCarteElecteur(e.target.value)}
                    />
                </div>
                <div  className='flex flex-col relative z-0 w-full my-5 group'>
                    <label htmlFor='numeroCarteIdentite' className='peer-focus:font-medium mb-4 md:text-xl absolute dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Numéro de Carte d'Identité :</label>
                    <input
                        id='numeroCarteIdentite'
                        className='block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        type="text"
                        value={numeroCarteIdentite}
                        onChange={(e) => setNumeroCarteIdentite(e.target.value)}
                    />
                </div>
                <div  className='flex flex-col relative z-0 w-full my-5 group'>
                    <label className='peer-focus:font-medium mb-4 md:text-xl absolute dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Nom de Famille :</label>
                    <input
                        className='block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        type="text"
                        value={nomFamille}
                        onChange={(e) => setNomFamille(e.target.value)}
                    />
                </div>
                <div  className='flex flex-col relative z-0 w-full my-5 group'>
                    <label htmlFor='numeroBureauVote' className='peer-focus:font-medium mb-4 md:text-xl absolute dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Numéro de Bureau de Vote :</label>
                    <input
                        id='numeroBureauVote'
                        className='block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        type="text"
                        value={numeroBureauVote}
                        onChange={(e) => setNumeroBureauVote(e.target.value)}
                    />
                </div>
                <button type="submit" className='bg-blue-500 w-32 p-2 rounded-full text-white hover:bg-blue-700'>Soumettre</button>
            </form>
        ) : etape === 2 ? (
            <div className='w-full p-4 flex flex-col justify-center items-center'>
                <p className='font-bold'>Veuillez renseigner votre adresse e-mail et votre numéro de téléphone :</p>
                <div className='flex flex-col relative z-0 w-full my-5 group'>
                    <label className='peer-focus:font-medium mb-4 md:text-xl absolute dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' htmlFor='email'>Email :</label>
                    <input
                        className='block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        id='email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='flex flex-col relative z-0 w-full my-5 group'>
                    <label className='peer-focus:font-medium mb-4 md:text-xl absolute dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' htmlFor='numeroTelephone'>Numéro de Téléphone :</label>
                    <input
                        className='block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        id='numeroTelephone'
                        type='tel'
                        value={numeroTelephone}
                        onChange={(e) => setNumeroTelephone(e.target.value)}
                    />
                </div>
                <button onClick={handleVerification} className='bg-blue-500 w-64 p-2 rounded-full text-white hover:bg-blue-700'>Envoyer le code de vérification</button>
            </div>
        ) : (
            <div className='w-full p-4 flex flex-col justify-center items-center'>
                <p className='font-bold'>Code de vérification envoyé à votre numéro de téléphone et votre adresse e-mail.</p>
                <div className='flex flex-col relative z-0 w-full my-5 group'>
                    <label className='peer-focus:font-medium mb-4 md:text-xl absolute dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' htmlFor='codeVerification'>Code de Vérification :</label>
                    <input
                        className='block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        id='codeVerification'
                        type='text'
                        value={codeVerification}
                        onChange={(e) => setCodeVerification(e.target.value)}
                    />
                </div>
                <button className='bg-blue-500 w-32 p-2 rounded-full text-white hover:bg-blue-700' onClick={handleVerificationCode}>Vérifier</button>
            </div>
        )}
    </div>
);
}

export default Authentification;
