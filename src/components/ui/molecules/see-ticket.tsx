import { Button } from "../button";
import Link from "next/link";

export const SeeTicket = () => {
  return (
    <div
      data-action="loja - ver ticket"
      data-status="active"
      className="flex w-80 flex-1 flex-col items-center justify-center gap-4 bg-gradient-to-l from-slate-50/90 via-white/20 to-white/0 px-3 py-2.5"
    >
      <Link href="/ticket">
        <Button className="flex h-12 w-80 flex-1 px-4 py-3 text-base font-bold text-white">
          Ver ticket
        </Button>
      </Link>
    </div>
  );
};
