import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/gh/leonardosnt/mc-player-counter/dist/mc-player-counter.min.js"></script>
        <title>UnDisturbed</title>
        <meta name="description" content="UnDisturbed Minecraft server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">Un</span>Disturbed <br/>
          </h1>
          <div>
            <h3 className="text-[hsl(280,100%,70%)] text-3xl text-center m-auto"><span data-playercounter-ip="play.undisturbed.eu" data-playercounter-format="{online}/{max}">0</span> oнлайн</h3>
            <h3 className="text-[hsl(280,100%,70%)] text-3xl text-center m-auto">play.undisturbed.eu</h3>
            <h3 className="text-[hsl(280,100%,70%)] text-3xl m-auto text-center">phone.undisturbed.eu</h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://minecraft-mp.com/server-s318153"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Гласувай за нас →</h3>
              <div className="text-lg">
                Като гласуваш ни подпомагаш да се развиваме и получаваш награди в сървъра! 
                Гласуването ти носи ключ за Vote Crate и пари в играта. Играчът с най-много гласове в края на месеца ще получи ранк Top Voter.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://paypal.me/dahudohuto"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Donate-ни →</h3>
              <div className="text-lg">
                Можеш да ни подкрепиш с пари да поддържаме сървъра! Тъй като това е donation, НЕ връщаме пари.
                За donation от какъвто и да е размер, получаваш Donator ранк за месец, който НЕ носи предимства в играта.
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
