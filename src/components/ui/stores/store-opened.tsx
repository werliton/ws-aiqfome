import { Stores } from "./stores";
import { StoreCortina } from "./store-cortina";
import { getAllStoresOpened } from "@/lib/data";

export const StoreOpened = () => {
  const data = getAllStoresOpened();
  return (
    <StoreCortina>
      <StoreCortina.Title>Abertos</StoreCortina.Title>
      <Stores data={data} />
    </StoreCortina>
  );
};
