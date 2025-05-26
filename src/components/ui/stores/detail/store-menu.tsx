"use client";

import { getAllCategoriesByStoreId } from "@/lib/data";
import { Divider } from "../../divider";
import { MenuItem } from "../menu/menu-item";
import { Fragment } from "react";
import { Zus } from "@/lib/store/store";

export const StoreMenu = () => {
  const storeId = Zus.getStoreId();

  const data = getAllCategoriesByStoreId(storeId);

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
