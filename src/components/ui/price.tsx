import { RNode } from "./subtitle";

export const PriceOriginal: React.FC<RNode> = ({ children }) => (
  <div className="text-price-original">{children}</div>
);

export const PriceDiscounted: React.FC<RNode> = ({ children }) => (
  <span className="text-price-discounted">{children}</span>
);

export const PriceBase: React.FC<RNode> = ({ children }) => (
  <div className="text-price-base">{children}</div>
);

export const PricePlus: React.FC<RNode> = ({ children }) => (
  <div className="text-price-plus">+{children}</div>
);
