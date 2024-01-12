const Home = () => {
  return (
    <div className="mx-10">
      <div className="flex justify-between m-4">
        <p>EN - FR</p>
        <h1 className='text-4xl mr-4'>Bienvenue sur PANDA</h1>
        <div>
          <span className="underline mr-2">Créer un compte </span>{`${" "}`}<span className="underline"> Se connecter</span>
        </div>
      </div>
      <div>
        <ul className="flex justify-between m-8">
          <li>missions de pANDA</li>
          <li>Fonctionnalités</li>
          <li>experts</li>
          <li>Organisations en Afrique</li>
          <li>Offres d'emploi</li>
          <li>Evénements à venir</li>
          <li>Témoignages</li>
          <li>Fondateurs</li>
        </ul>
      </div>
      <div className="text-5xl flex justify-center items-center">
        Nous réunissons experts du monde entier et organisations en Afrique
      </div>
    </div>
  );
};

export default Home;
