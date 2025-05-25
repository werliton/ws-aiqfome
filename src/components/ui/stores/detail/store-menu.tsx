import { getAllCategoriesByStoreId } from "@/lib/data";
import { Divider } from "../../divider";
import { MenuItem } from "../menu/menu-item";
import { Fragment } from "react";

export const StoreMenu = () => {
  const data = getAllCategoriesByStoreId("mat");

  return (
    <div className="inline-flex w-full flex-col items-center justify-start gap-1">
      {data.map((category) => (
        <Fragment key={category.id}>
          <MenuItem category={category} />
          <Divider />
        </Fragment>
      ))}
    </div>
  );
};
