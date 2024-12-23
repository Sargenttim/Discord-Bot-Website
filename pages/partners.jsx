
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
                            <img className="rounded-full h-32 w-32" src="/partnerimg/valornode.png" />
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
                            <img className="rounded-full h-32 w-32" src="/partnerimg/maverickhq.png" />
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

                    <div className="flex flex-col justify-center text-white rounded">
            <a href="https://toxicityprotection.com/">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="/partnerimg/tp.webp" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Toxicity Protection</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      A Discord bot that cares about you and your community, Here to keep you and your servers safe from: Scammers, Leakers, Toxic Members.
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                    <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.gg/FFQKX7RSct">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="/partnerimg/Nifty-Servers.jpg" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Nifty Servers</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      Simple Modded Rust Server PVE Come join to have some fun.
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
