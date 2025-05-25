import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-6 p-4">
      <h2 className="text-lg font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="hover:text-accent-foreground cursor-pointer underline"
      >
        Retornar à tela inicial
      </Link>
    </div>
  );
}
