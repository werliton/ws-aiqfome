import { Divider } from "../../divider";
import { MenuItem } from "../menu/menu-item";

export const StoreMenu = () => {
  return (
    <div className="inline-flex w-full flex-col items-center justify-start gap-1">
      <MenuItem />
      <Divider />

      <MenuItem />
      <Divider />

      <MenuItem />
      <Divider />

      <MenuItem />
    </div>
  );
};
