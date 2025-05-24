import React from "react";
import { Stores } from "./stores";
import { StoreCortina } from "./store-cortina";
import { getAllStoresClosed } from "@/lib/data";

export const StoreClosed = () => {
  const data = getAllStoresClosed();
  return (
    <StoreCortina>
      <StoreCortina.Title>Fechados</StoreCortina.Title>
      <Stores data={data} />
    </StoreCortina>
  );
};
