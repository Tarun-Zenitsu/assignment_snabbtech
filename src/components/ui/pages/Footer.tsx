import socilImg from "@/assets/Social.svg"
import aImg from "@/assets/north-star-24.svg"

const Footer = () => {
  return (
    <>
    <div>
        <h1 className="text-center text-[40px] font-semibold my-24 mx-24">Rejoignez notre communauté et aidez-nous à construire la première plateforme de networking en ligne à destination du marché africain!</h1>
        <div className="flex justify-center items-center gap-7 my-36">
            <button className=" p-3 rounded-3xl w-52 h-14 border border-gray-900">Créer un compte</button>
            <button className=" p-3 rounded-3xl w-52 h-14 border border-gray-900">Se connecter</button>
        </div>
    </div>
        <div className="pl-7">
            <div className="flex gap-8 justify-between">
                <div>
                    <h1 className="text-[20px] font-semibold my-3">Page d'accueil</h1>
                    <ul className="list-disc flex flex-col gap-2">
                        <li className="text-[13px]">Missions de PANDA</li>
                        <li className="text-[13px]">Fonctionnalités</li>
                        <li className="text-[13px]">Découvrez les experts</li>
                        <li className="text-[13px]">Découvrez les organisations en Afrique</li>
                        <li className="text-[13px]">Offres d'emploi</li>
                        <li className="text-[13px]">Evénements à venir</li>
                        <li className="text-[13px]">Témoignages</li>
                        <li className="text-[13px]">Les fondateurs</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-[20px] font-semibold my-3">pour les EXPERTS</h1>
                    <ul className="list-disc flex flex-col gap-2">
                        <li className="text-[13px]">Découvrez les organisations en Afrique</li>
                        <li className="text-[13px]">Offres d'emploi</li>
                        <li className="text-[13px]">Travel Map</li>
                        <li className="text-[13px]">Evénements à venir</li>
                        
                    </ul>
                </div>
                <div>
                    <h1 className="text-[20px] font-semibold my-3">pour les organisations en Afrique</h1>
                    <ul className="list-disc flex flex-col gap-2">
                        <li className="text-[13px]">Découvrez les experts</li>
                        <li className="text-[13px]">Travel Map</li>
                        <li className="text-[13px]">Evénements à venir</li>
                        
                    </ul>
                </div>
                <div>
                    <h1 className="text-[20px] font-semibold my-3">Contact</h1>
                    <ul className="list-disc flex flex-col gap-2">
                        <li className="text-[13px]">Nous contacter</li>                    
                    </ul>
                </div>
            </div>
            <div className="flex justify-between items-center my-10">
                <p className="text-[40px] flex justify-center items-center ">P NDA <span className="pl-5"><img src={aImg} alt="aimg" className="size-5"/></span></p>
                <p>© 2022 Tous droits réservés</p>
                <img src={socilImg} alt="socialImg" />
            </div>
        </div>
    </>
  )
}

export default Footer