import { ReactNode } from "react";

type Props = { children: ReactNode };

export const StoreCortina = ({ children }: Props) => {
  return <>{children}</>;
};

const StoreCortinaTitle = ({ children }: Props) => (
  <p className="text-primary text-xl font-extrabold">{children}</p>
);

StoreCortina.Title = StoreCortinaTitle;
