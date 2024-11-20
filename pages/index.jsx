import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="500" src="/img/bck.png" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          CubeCloud
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
        CubeCloud is your all-in-one Discord bot, designed to enhance every aspect of your server. Offering a comprehensive set of features, CubeCloud helps you manage, entertain, and engage your community like never before. Whether you’re looking to improve server efficiency or create unforgettable experiences, CubeCloud is your go-to solution. 
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://discord.com/oauth2/authorize?client_id=1202693084090081320"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Invite CubeCloud
              </a>
            </Link>
  <div className="py-10"></div>
  <Link href={"https://top.gg/bot/1202693084090081320"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Vote CubeCloud</a>
  </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/gift-left.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/gift-right.png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"CubeCloud" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "How about creating the best environment to relax yourself with your own emotions?" }}/>
            <a href="https://discord.com/oauth2/authorize?client_id=1202693084090081320" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Invite CubeCloud
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-amber-500`} /> Optimization</p>
                  <p className="text-gray-500 line-clamp-4">Experience seamless performance with CubeCloud. Engineered for speed and efficiency, CubeCloud is fully optimized to handle any task, from music playback to server management, ensuring that everything runs smoothly. Our customizable settings allow you to tailor CubeCloud to your server’s unique needs, making it the perfect addition to any community.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-amber-500`} /> Universal</p>
                  <p className="text-gray-500 line-clamp-4">CubeCloud supports a wide array of platforms, including Spotify, SoundCloud, and YouTube, so you can enjoy music wherever it’s available. Our bot guarantees smooth, high-quality playback while ensuring full compliance with copyright laws. CubeCloud brings all your music services together, making it the ultimate bot for your entertainment needs.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-amber-500`} /> Security</p>
                  <p className="text-gray-500 line-clamp-4">Security is a top priority at CubeCloud. As a trusted bot, CubeCloud is built with robust safeguards to protect your server and user data. While CubeCloud is not open-source, we ensure a high level of transparency and ongoing updates to provide a secure and reliable service. You can rest assured that CubeCloud is always up-to-date with the latest security protocols</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Support</p>
                  <p className="text-gray-500 line-clamp-4">At CubeCloud, we pride ourselves on providing outstanding support. Our dedicated team is always available to assist with any questions, issues, or feature requests you may have. Whether you're a new user or a long-time community member, we make sure you get the best help in the fastest time possible.</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://share.cubecloud.ca/299729731237052417/_X0qa1.png"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold">Ready to Level Up?</p>
                  <p className="text-md text-white font-medium line-clamp-5">CubeCloud isn’t just a bot; it’s the ultimate tool to elevate your Discord server.</p>
                  <p classname="text-md text-white font-medium line-clamp-5">From advanced moderation features to music playback and everything in between, </p>
                  <p classname="text-md text-white font-medium line-clamp-5">CubeCloud helps you build an engaging and well-managed community.</p>
                  <p classname="text-md text-white font-medium line-clamp-5">Are you ready to unlock the full potential of your server? CubeCloud is here to make it happen.</p>
                </div>
                <img src="" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>

      </>
  )
}
