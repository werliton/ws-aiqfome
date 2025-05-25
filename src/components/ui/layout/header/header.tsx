import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-primary flex h-[72px] min-w-full items-center gap-6 p-4 sm:grid sm:grid-cols-3">
      <Link href="/">
        <Image
          className="dark:invert"
          src="/icons/brand.svg"
          alt="Aiqfome"
          width={32}
          height={32}
          priority
        />
      </Link>
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
              width={16}
              height={16}
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
  );
};
