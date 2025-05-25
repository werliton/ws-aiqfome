import { ReactNode } from "react";

interface TicketFoodObsProps {
  children: ReactNode;
}
export const TicketFoodObs: React.FC<TicketFoodObsProps> = ({ children }) => {
  return (
    <div className="inline-flex items-center justify-start gap-1 self-stretch rounded bg-neutral-100 p-1.5">
      <div className="justify-start text-xs font-bold text-neutral-700">
        observação:
      </div>
      <div className="flex-1 justify-start text-xs font-semibold text-neutral-700">
        {children}
      </div>
    </div>
  );
};
