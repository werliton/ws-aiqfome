"use client";

import { Divider } from "../../atoms/divider";
import { MenuItem } from "../menu/menu-item";
import { Fragment } from "react";
import { useStoreMenu } from "@/hooks/useStoreMenu";

export const StoreMenu = () => {
  const data = useStoreMenu();

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
