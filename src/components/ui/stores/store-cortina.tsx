import React, { ReactNode } from "react";

type Props = { children: ReactNode };

export const StoreCortina = ({ children }: Props) => {
  return <>{children}</>;
};

StoreCortina.Title = ({ children }: Props) => (
  <p className="text-primary text-xl font-extrabold">{children}</p>
);
