import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 pb-16 sm:pb-20 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 sm:gap-8 row-start-2 items-center">
        <h1 className="font-extrabold text-5xl sm:text-9xl text-center">Friendent</h1>
        <h3 className="font-extrabold text-3xl sm:text-7xl text-center">Dr. Abdelazeez Zaid</h3>
        <Image
          src="/imgs/abdelazeez-card.jpg"
          alt="Abdelazeez Card"
          width={440}
          height={19}
          className="w-full sm:w-auto"
          priority
        />
        <h3 className="font-bold text-3xl sm:text-7xl text-center">COMING SOON...</h3>
      </main>
    </div>
  );
}