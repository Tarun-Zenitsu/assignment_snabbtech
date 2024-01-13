import hamburImg from "@/assets/three-bars.svg"
import emptyflorImg from "@/assets/empty-floor-front-modern-building 1.png"
import CardComponent from "./CardComponent";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="mx-4 sm:mx-20">
      <div className="flex justify-between gap-6 m-4">
        <p>EN - FR</p>
        <h1 className='text-2xl sm:text-4xl mr-7 text-center'>Bienvenue sur PANDA</h1>
        <div className="hidden sm:flex">
          <span className="underline mr-2">Créer un compte </span>{`${" "}`}<span className="underline"> Se connecter</span>
        </div>
        <div className="md:hidden">
          <img src={hamburImg} alt="three dot" />
        </div>
      </div>
      <div>
        <ul className="justify-between m-8 hidden sm:flex">
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
      <h1 className="text-3xl sm:text-6xl text-center font-semibold">Nous réunissons experts du monde entier et organisations en Afrique</h1>
      <div className="mt-4 flex justify-center">
        <img src={emptyflorImg} alt="emptyflorImg" className="size-[400px] md:size-[450px] "/>
      </div>
      {/* mission panda section */}
      <h1 className="text-2xl sm:text-7xl font-semibold mt-5">Missions de PANDA</h1>
      <section className="flex gap-3 mt-6 flex-wrap">
      {cardData.map((card) => (
          <CardComponent
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </section>
      <Footer/>
    </div>
  );
};


const cardData = [{
  id: 1,
  title: "Networking",
  description: "Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux."
},{
  id:2,
  title: "Partage",
  description: "Promouvoir le partage de connaissances et d’expertises."
},{
  id: 3,
  title: "Recrument",
  description: "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de profils qualifiés."
},
{
  id: 4,
  title: "Recrument",
  description: "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de profils qualifiés."
},
{
  id: 5,
  title: "Recrument",
  description: "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de profils qualifiés."
},
  
]

export default Home;
