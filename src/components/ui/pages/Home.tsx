import hamburImg from "@/assets/three-bars.svg"
import emptyflorImg from "@/assets/empty-floor-front-modern-building 1.png"
import empImgone from '@/assets/developer-working-with-app-his-workplace 1.png'
import empImgTwo from '@/assets/black-woman-city 1.png'
import empImgThree from '@/assets/vertical-close-up-portrait-young-cheerful-arab-businessman-formal-attire 1.png'
import rectImgOne from '@/assets/Rectangle 97.png'
import rectImgTwo from '@/assets/Rectangle 97 (1).png'
import rectImgThree from '@/assets/clout-africa-ic5A6FNjcns-unsplash.png'
import mapImg from "@/assets/Rectangle 111.png"
import vactorImg from '@/assets/Vector.svg'
import vactor1Img from '@/assets/Vector (1).svg'
import vactor2Img from '@/assets/Vector (2).svg'
import Footer from "./Footer";
import { CardComponent, CardTwoComponent, RotedCard } from "./CardComponent";

const Home = () => {
  return (
    <div className="ml-11">
      {/* heading section */}
      <div className="flex justify-between gap-6 m-4 sm:py-2">
          <p className="text-[16px]">EN - FR</p>
          <h1 className='text-[23px] sm:text-[39px] sm:text-4xl mx-auto text-center'>&nbsp;&nbsp;Bienvenue sur PANDA</h1>
          <div className="hidden sm:flex text-[16px]">
            <span className="underline mr-2">Créer un compte </span>{`${" "}`}<span className="underline"> Se connecter</span>
          </div>
          <div className="sm:hidden">
            <img src={hamburImg} alt="three dot" />
          </div>
        </div>
        <div className="mx-8">  
        <div className="sm:py-2">
          <ul className="justify-between m-8 text-[13px] hidden sm:flex">
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
        <h1 className="text-[20px] sm:text-[65px] sm:text-6xl text-center font-semibold sm:py-5">Nous réunissons experts du monde entier et organisations en Afrique</h1>
      </div>
      <div className="mt-4 flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:py-5 gap-7">
          <div className="hidden sm:flex flex-col">
            <h1 className="text-[28px] sm:text-[40px] text-red-200">Organisations en Afrique</h1>
            <p className="text-[13px] sm:text-[15px] text-gray-200">Vous êtes une entreprise privée ou publique basée en Afrique et vous avez du mal à recruter des profils expérimentés? Vous êtes une start-up africaine et vous souhaitez faire appel aux services d'un prestataire externe?
               Vous recherchez une expertise spécifique pour réaliser un futur projet?
               Grâce à son réseau, PANDA vous aide à trouver les experts dont vous avez besoin!</p>
          </div>
        <img src={emptyflorImg} alt="emptyflorImg" className=" w-[159px] h-[156px] flex-1 flex-col sm:flex sm:w-[579px] sm:h-[566px] md:size-[450px] "/>
          <div>
            <h1 className="text-[40px] text-red-200">Organisations en Afrique</h1>
            <p className="text-[15px] text-gray-200">Vous êtes une entreprise privée ou publique basée en Afrique et vous avez du mal à recruter des profils expérimentés? Vous êtes une start-up africaine et vous souhaitez faire appel aux services d'un prestataire externe?
               Vous recherchez une expertise spécifique pour réaliser un futur projet?
               Grâce à son réseau, PANDA vous aide à trouver les experts dont vous avez besoin!</p>
        </div>
      </div>
      {/* mission panda section */}
      <h1 className="text-[20px] sm:p-10 sm:text-[65px] sm:text-7xl font-semibold mt-5">Missions de PANDA</h1>
      <section className="flex flex-wrap md:flex-nowrap mt-6 gap-1">
      {cardData.map((card) => (
          <CardComponent
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </section>

      {/* Fonctionnalités section */}
      <div>
        <div>
          <h1 className="text-[65px] mt-28 mb-20">Fonctionnalités</h1>
          <div className="flex gap-7">
            <div>
              <div className="flex gap-3">
                {card2data.map((card) => (
                  <CardTwoComponent 
                    id={card.id}
                    key={card.id}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>

              <div className="flex justify-start gap-1">
                {rotedcardData.map((card) => (
                  <RotedCard 
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  />
                ))}
                <div className="w-72"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <div className="relative w-[550px] h-[444px] mt-10">
                  <img src={mapImg} alt="mapImg" className=" object-fill rounded" />
                  <div className="absolute top-1 left-36 transform  w-[41px] h-[56px]  rounded-full">
                    <img src={vactorImg} alt="vactor" />
                  </div>
                  <div className="absolute top-28 left-2 transform  w-[41px] h-[56px]  rounded-full">
                    <img src={vactor1Img} alt="vactor" />
                  </div>
                  <div className="absolute bottom-1 left-64 transform  w-[41px] h-[56px]  rounded-full">
                    <img src={vactor2Img} alt="vactor"/>
                  </div>
                </div>
              </div>
              <button className=" p-3 mt-5 rounded-3xl w-56 h-14 border border-gray-900">Explorer la Travel Map</button>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      {/* Découvrez les experts section */}
        <div className="flex gap-32 pt-16">
          <div className="flex flex-col justify-between gap-36">
            <div className="flex flex-col">
              <div className="flex flex-row gap-3">
                <div className="w-[95px] bg-gray-200 h-1">
                  <div className="w-[38px] bg-gray-400 h-1"></div>
                </div>
                <div className="w-[95px] bg-gray-200 h-1">
                </div>
                <div className="w-[95px] bg-gray-200 h-1">
                </div>
              </div>
              <h1 className="text-[65px]">Découvrez les experts</h1>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[15px] mb-6">Connectez-vous avec des organisations africaines, postulez au job de vos rêves en Afrique ou partagez votre expertise même à distance!</p>
              <button className=" p-3 mt-5 rounded-3xl w-56 h-14 border border-gray-900">Voir tout</button>
            </div>
          </div>
          <div>
            <h1 className="text-[40px]">“ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une offre d'emploi pour le poste de web developer publiée sur PANDA et le mois suivant je commençais à travailler à Dakar! ”</h1>
            <div className="flex gap-7 items-end mt-7">
                <img src={empImgone} alt="empthree" className="rounded-t-full " />
                <img src={empImgTwo} alt="emptwo" className="rounded-t-full "/>
                <img src={empImgThree} alt="empone" className="rounded-t-full" />
            </div>
          </div>
        </div>
        <div className="flex gap-32 pt-16 flex-row-reverse">
          <div className="flex flex-col justify-between gap-36">
            <div className="flex flex-col">
              <div className="flex flex-row gap-3">
                <div className="w-[119px] bg-gray-200 h-1">
                  <div className="w-[48px] bg-gray-400 h-1"></div>
                </div>
                <div className="w-[119px] bg-gray-200 h-1">
                </div>
                <div className="w-[119px] bg-gray-200 h-1">
                </div>
              </div>
              <h1 className="text-[65px]">Découvrez les organisations en Afrique</h1>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[15px] mb-6">Trouvez les experts que vous recherchez, publiez vos offres d'emploi et d'autres contenus exclusifs sur votre organisation!</p>
              <button className=" p-3 mt-5 rounded-3xl w-56 h-14 border border-gray-900">Voir tout</button>
            </div>
          </div>
          <div>
            <h1 className="text-[40px]">“PANDA nous donne accès aux meilleurs talents dans leur domaine d'activité et à de réelles perspectives de collaboration!  ”</h1>
            <div className="flex gap-7 items-end mt-7">
                <img src={rectImgOne} alt="empthree" className="rounded-t-full " />
                <img src={rectImgTwo} alt="emptwo" className="rounded-t-full "/>
                <img src={rectImgThree} alt="empone" className="rounded-t-full" />
            </div>
          </div>
        </div>
        {/* Offres d'emploi */}
        <div>
          <div>
            {/* If you like my work, please let me know. I will complete everything and also integrate the backend for our login logic */}
          </div>
          <div></div>
        </div>
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
  title: "Collaborations",
  description: "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de profils qualifiés."
},
{
  id: 5,
  title: "Evénements",
  description: "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de profils qualifiés."
},
  
]

const card2data = [
  {
    id: 1,
    title: "Recrument",
    description: "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de profils qualifiés."
  },
  {
    id: 2,
    title: "Recrument",
    description: "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de profils qualifiés."
  },
  {
    id: 3,
    title: "Recrument",
    description: "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de profils qualifiés."
  },
]
const rotedcardData = [
  {
    id: 1,
    title: "Recrument",
    description: "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de profils qualifiés."
  },
  {
    id: 2,
    title: "Recrument",
    description: "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de profils qualifiés."
  },
]

export default Home;
