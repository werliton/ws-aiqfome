import React from "react";
import { Button } from "../button";

export const SeeTicket = () => {
  return (
    <div
      data-action="loja - ver ticket"
      data-status="active"
      className="flex w-80 flex-1 flex-col items-center justify-center gap-4 bg-gradient-to-l from-slate-50/90 via-white/20 to-white/0 px-3 py-2.5"
    >
      <Button className="flex h-12 w-80 flex-1 px-4 py-3 text-base font-bold text-white">
        Ver ticket
      </Button>
    </div>
  );
};
