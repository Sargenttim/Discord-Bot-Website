import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

export default function Commands() {
const commands = [
  "---Administrator---",
  "/ai - Manage AI channels for your server.",
  "/antisystem - Manage server anti-systems with advanced settings and whitelists.",
  "/backup - Comprehensive server backup system.",
  "/booster - Manage the boost logging system for your server",
  "/counting - Manage the counting system for your server.",
  "/event - Create and manage server events interactively.",
  "/globalchat - Manage the global chat system for your server",
  "/giveaway - Manage giveaways in your server.",
  "/jtc - Manage the Join-to-Create system for your server.",
  "/level - Advanced leveling system for users.",
  "/role - Manage roles of the server or members.",
  "/setup-logging - Set up and manage the logging system for your server with advanced configurations.",
  "/staff - Manage staff login, roster, role categories, and status updates.",
  "/sticky-messages - Set up sticky messages in the server channel.",
  "/ticket - Ticket Setup.",
  "---Moderation---",
  "/ban - Ban a member from the server.",
  "/clear - Clear out messages from a channel.",
  "/clone - Clone a Channel.",
  "/kick - Kick a user from the Server.",
  "/lock - Lock a Channel.",
  "/snipe - Get the last deleted message.",
  "/unban - Unban a user from the server.",
  "unlock - Unlock a channel in the server.",
  "warn - Warn a user in the server.",
  "---Conext Menu---",
  "/avatar - Get a users Avatar.",
  "/thanks - Say thanks to a user.",
  "/translate - Translate to English.",
  "---Developer---",
  "/eval - Evalulate a peice of code.",
  "/servers - list of bot servers.",
  "/simulate-boost - Simulate a boost start or end event for testing purposes.",
  "/source-bin - Uploads Code To Sourcebin, And Returns A Link!",
  "---Economy---",
  "/eco - Manage your economy with commands.",
  "/weedfarm - Manage your weed farm!",
  "---Fun---",
  "/advancement - Generates a Minecraft Advancement.",
  "/anime - Get information about an Anime.",
  "/birthday - Advanced birthday management with personalized announcements and rewards!",
  "/clever-rate - Rate a user on how clever are they.",
  "/memes - get the random fact.",
  "/games - Play various games with your friends in Discord!",
  "/gif - Search a gif.",
  "/hack - [Fun Only] Hack someone.",
  "/nuke - [Fun Only] Nuke the server.",
  "/search - Search the web for information using CubeClouds API.",
  "/truth-or-dare - Play a fun game of Truth or Dare with multiple options!",
  "---Information---",
  "/bot - Bot related commands.",
  "/help - Displays the help menu for CubeCloud, listing available slash commands and their usage.",
  "/server - Get information about the server.",
  "/user - Get information about a user",
  "---Premium---",
  "/premium - Manage premium codes with various commands.",
  "/projects - Manage and monitor your projects.",
  "---Utility---",
  "/afk - An engaging and advanced AFK system with playful setup.",
  "/calculator - Use a calculator.",
  "/embed - Create an embed.",
  "/emoji - Advanced emoji management system.",
  "/upload - Upload an attachment to the CDN repository",
  "/invites - Manage your invites and view statistics.",
  "/music - Advanced CubeCloud Music system with enriched visuals and interactivity.",
  "/poll - Make poll in your server.",
  "/reminder - Toggle enable/disable top.gg vote reminder.",
  "/say - Say something from bot.",
  "/short - Short a long url.",
  "/screenshot - Take a screenshot of the web.",
  "/timer - Set a countdown timer with interactive buttons.",
  "/translate - Translate any text into any language."
];

  return (
    <>
      <div>
      <div className="flex w-full justify-center">
      <img width="500" src="/img/bck2.png" />
      </div>
        <p className="text-xl font-medium text-white">
          <i className="fal fa-cogs text-amber-400 mr-2" />
         Bot Commands
        </p>
        <p className="text-white text-sm text-opacity-50 mb-5">
        You can get information about the commands of the CubeCloud Bot.
        </p>

        <div>
          <Menu as="div" className="w-full relative inline-block text-left">
          <div>
              <Menu.Button className="left-0 transition w-full duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6 flex justify-between items-center">
                <div className="flex items-center gap-x-1 text-white text-opacity-60">
                 
                    <>
                      <i className="fa fa-hashtag text-white text-opacity-20" />
                     View Commands List
                    </>
                
                </div>
              </Menu.Button>
            </div>

            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="z-1 custom-scroll absolute left-0 w-full mt-2 origin-top-right bg-black overflow-auto max-h-70 border border-black border-opacity-20 bg-opacity-95 rounded-lg p-1">
                <div className="px-1 py-1 w-full">

            {commands.map(mm => (

                <Menu.Item>
                    <button className={`w-full rounded-lg p-2 cursor-pointer text-white flex items-center space-x-3 transition-all duration-200`}>
                    <>
                          <i className="fa-spin text-xl text-white text-opacity-20" />
                         {mm}</>
                    </button>
                    </Menu.Item>
            ))}
              
        </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
  <Link href={"https://discord.com/oauth2/authorize?client_id=1202693084090081320"}>
  <a className={"flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Invite CubeCloud</a>
  </Link>

  <div className="py-10"></div>
  
  <Link href={"https://discord.gg/m4RBuRUuhB"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Support Server</a>
  </Link>

  <div className="py-10"></div>
  
  <Link href={"https://top.gg/bot/1202693084090081320"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Vote MusicMaker</a>
  </Link>
</div>

      </div>
      <div className="py-20"></div>
    </>
  )
  }
