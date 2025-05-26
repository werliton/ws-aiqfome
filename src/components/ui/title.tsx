import { RNode } from "./subtitle";

export const TextHeading = () => {
  return (
    <div className="justify-start self-stretch text-xl font-bold text-neutral-700">
      Ceviche de salmão
    </div>
  );
};

export const TextSubtle = () => {
  return (
    <div className="justify-start self-stretch text-xl font-bold text-neutral-700">
      Ceviche de salmão
    </div>
  );
};

export const TextMuted = () => {
  return (
    <div className="justify-start self-stretch text-xl font-bold text-neutral-700">
      Ceviche de salmão
    </div>
  );
};

export const TextMedium: React.FC<RNode> = ({ children }) => (
  <div className="justify-start text-base font-bold text-neutral-700">
    {children}
  </div>
);

export const TextSecondary: React.FC<RNode> = ({ children }) => (
  <div className="justify-start self-stretch text-sm leading-tight font-semibold text-neutral-500">
    {children}
  </div>
);

export const TextExtraLarge: React.FC<RNode> = ({ children }) => (
  <div className="text-foreground justify-start self-stretch text-xl font-extrabold">
    {children}
  </div>
);
