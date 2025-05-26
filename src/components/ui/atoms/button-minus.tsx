import { LucideProps, Minus } from "lucide-react";
import { Button } from "../button";

type ButtonMinusProps = React.ComponentProps<"button"> & LucideProps;

export const ButtonMinus = ({ className, ...props }: ButtonMinusProps) => {
  const { children, type, disabled, onClick, ...iconProps } = props;

  return (
    <Button
      className={`rounded-full p-1 ${className ?? ""}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <Minus height={32} width={32} className="text-red-500" {...iconProps} />
    </Button>
  );
};
