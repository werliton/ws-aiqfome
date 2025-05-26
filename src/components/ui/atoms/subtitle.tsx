export type RNode = {
  children: React.ReactNode;
};

export const Subtitle: React.FC<RNode> = ({ children }) => (
  <div className="justify-center text-sm leading-tight font-semibold text-neutral-800">
    {children}
  </div>
);

export const SubtitleItem: React.FC<RNode> = ({ children }) => (
  <div className="justify-start text-xs font-normal text-neutral-500">
    {children}
  </div>
);

export const AuxiliarSubtitle: React.FC<RNode> = ({ children }) => (
  <div className="justify-start text-right text-xs font-bold text-neutral-500">
    {children}
  </div>
);
