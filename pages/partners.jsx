
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partners
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://valornode.net">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://share.cubecloud.ca/299729731237052417/em3Fyb.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Valor Node</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      Hosting for all your needs, Game Hosting, VPS Hosting, Web Hosting, IP Subnets, Discord Bot Hosting, and more
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://store.maverickhq.ca/">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://share.cubecloud.ca/299729731237052417/MY-iDs.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Maverick HQ</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      FiveM Store for all your needs. We have Cars, EUP, Liveries, Commissions, and more!
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
