import Image from "next/image";
import { RNode } from "../../subtitle";
import { ReactNode } from "react";

interface TicketHeaderProps {
  children: ReactNode;
  imagePath: string;
}

export const TicketHeader = ({ children, imagePath }: TicketHeaderProps) => {
  return (
    <div className="inline-flex items-center justify-start gap-2 self-stretch px-4">
      <Image
        className="dark:invert"
        src={imagePath}
        alt="avatar"
        width={32}
        height={32}
      />
      {children}
    </div>
  );
};

TicketHeader.Title = ({ children }: RNode) => (
  <div className="inline-flex flex-col items-start justify-start gap-1">
    <div className="justify-start text-sm leading-tight font-bold text-neutral-500">
      seus itens em
    </div>
    <div className="justify-start text-base font-bold text-neutral-800">
      {children}
    </div>
  </div>
);
