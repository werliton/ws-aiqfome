import { LucideProps, Plus } from "lucide-react";
import { Button } from "../button";

type ButtonMinusProps = React.ComponentProps<"button"> & LucideProps;

export const ButtonAdd = ({ className, ...props }: ButtonMinusProps) => {
  const { children, type, disabled, onClick, ...iconProps } = props;
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`rounded-full p-1 ${className ?? ""} hover:bg-transparent`}
    >
      <Plus height={32} width={32} className="text-accent" {...iconProps} />
    </Button>
  );
};
