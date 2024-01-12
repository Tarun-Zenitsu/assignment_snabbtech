const HeroForMob = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[818px] overflow-hidden text-left text-base text-gray font-biz-udpgothic">
      <div className="absolute top-[98.87px] left-[19.57px] w-80 h-[709.1px]">
        <div className="absolute top-[0px] left-[0px] rounded-t-161xl rounded-b-none box-border w-80 h-[709.1px] border-[1px] border-solid border-gray" />
        <div className="absolute top-[109.65px] left-[109px] [text-decoration:underline] tracking-[-1.5px] leading-[158.7%]">
          Se connecter
        </div>
        <div className="absolute top-[62.97px] left-[96px] [text-decoration:underline] tracking-[-1.5px] leading-[158.7%]">
          Créer un compte
        </div>
        <div className="absolute top-[218.19px] left-[80.5px] flex flex-col items-center justify-center gap-[40px] text-smi">
          <div className="relative tracking-[-1.5px] leading-[158.7%] capitalize">
            {" "}
            Missions de PANDA
          </div>
          <div className="relative tracking-[-1.5px] leading-[158.7%] capitalize">
            {" "}
            Fonctionnalités
          </div>
          <div className="relative tracking-[-1.5px] leading-[158.7%] capitalize">
            experts
          </div>
          <div className="relative tracking-[-1.5px] leading-[158.7%] capitalize whitespace-pre-wrap">
            Organisations en Afrique
          </div>
          <div className="relative tracking-[-1.5px] leading-[158.7%] capitalize">
            Offres d’emploi
          </div>
          <div className="relative tracking-[-1.5px] leading-[158.7%] capitalize">
            Evénements à venir
          </div>
          <div className="relative tracking-[-1.5px] leading-[158.7%] capitalize">
            {" "}
            Témoignages
          </div>
          <div className="relative tracking-[-1.5px] leading-[158.7%] capitalize">
            Fondateurs
          </div>
        </div>
      </div>
      <div className="absolute top-[-0.46px] left-[0.57px] w-[360px] h-[52px] text-center text-[23px] font-kyivtype-sans">
        <div className="absolute w-[55.96%] top-[22.49%] left-[22.53%] leading-[135.2%] flex items-end justify-center">
          Bienvenue sur PANDA
        </div>
        <div className="absolute top-[38.47%] left-[2.22%] text-smi leading-[130%] font-simple-text-13-regular text-left">
          EN - FR
        </div>
        <img
          className="absolute h-[30.65%] w-[4.73%] top-[42.1%] right-[2.78%] bottom-[27.25%] left-[92.49%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/threebars.svg"
        />
      </div>
      <img
        className="absolute top-[267px] left-[172px] w-4 h-[17px] object-contain"
        alt=""
        src="/northstar24.svg"
      />
    </div>
  );
};

export default HeroForMob;
