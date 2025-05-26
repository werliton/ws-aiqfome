import { Button } from "../atoms/button";
import { RNode } from "../atoms/subtitle";

export const Payment = ({ children }: RNode) => {
  return (
    <div
      data-action="checkout bottom"
      data-status="active"
      className="absolute bottom-0 flex w-full flex-1 flex-col items-center justify-start rounded-tl-xl rounded-tr-xl bg-white shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)]"
    >
      <div className="inline-flex items-center justify-between self-stretch px-8 py-4">
        <div className="inline-flex flex-col items-start justify-start gap-0.5">
          <div className="justify-center text-sm leading-tight font-bold text-neutral-800">
            subtotal
          </div>
          {children}
        </div>
        <div className="justify-centerpx-10 flex h-12 w-48 items-center py-2.5">
          <Button className="bg-primary text-center text-sm leading-tight font-bold text-white">
            Ir para pagamento
          </Button>
        </div>
      </div>
    </div>
  );
};

const PaymentTotal = ({ children }: RNode) => (
  <div className="justify-center text-xl font-extrabold text-purple-800">
    {children}
  </div>
);

Payment.Total = PaymentTotal;
