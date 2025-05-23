import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background m-auto grid min-h-screen w-[390px] min-[390px]:min-w-[390px] sm:w-full">
      <header className="bg-primary flex h-32 min-w-full items-center gap-6 p-4 sm:grid sm:grid-cols-3">
        <Image
          className="dark:invert"
          src="/icons/brand.svg"
          alt="Endereço"
          width={32}
          height={32}
          priority
        />
        <div className="flex h-[2.5rem] grow items-center gap-2.5 sm:col-span-1">
          <Image
            className="dark:invert"
            src="/icons/marker.svg"
            alt="Endereço"
            width={24}
            height={24}
            priority
          />
          <div className="flex flex-col items-start gap-0.5">
            <p className="text-subtitle text-sm font-bold">entregando em</p>

            <div className="flex items-center gap-1 self-stretch">
              <p className="text-primary-foreground text-base font-bold">
                Rua Mandaguari, 198
              </p>{" "}
              <Image
                className="dark:invert"
                src="/icons/right-arrow.svg"
                alt="arrow"
                width={24}
                height={24}
                priority
              />
            </div>
          </div>
        </div>
        <Image
          className="sm:justify-self-end dark:invert"
          src="/icons/user.svg"
          alt="User"
          width={24}
          height={24}
          priority
        />
      </header>
      <aside></aside>
      <main></main>
      <footer className="bg-muted text-footer flex h-[119px] flex-col items-center justify-center gap-0.5 px-4 py-6">
        <p className="text-sm font-bold">Feito com amor em Maringá-PR</p>
        <p className="text-base font-bold">
          aiqfome.com © 2007-2023 aiqfome LTDA . CNPJ: 09.186.786/0001-58
        </p>
      </footer>
    </div>
  );
}
