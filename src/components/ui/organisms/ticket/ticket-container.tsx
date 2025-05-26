"use client";

import { useTicket } from "@/hooks/useTicket";
import { Divider } from "../../divider";
import { Payment } from "../../molecules/payment";
import { TicketHeader } from "./ticker-header";
import { TicketFoodItem } from "./ticket-food-item/ticket-food-item";

import { TicketFootAditional } from "./ticket-food-item/ticket-foot-adicional-list";
import { TiketFoodItemButtons } from "./ticket-food-item/tiket-food-item-buttons";
import { Fragment } from "react";

export const TicketContainer = () => {
  /**
   * Algumas acoes nao implementadas por conta de nao estar no escopo
   * da entrega
   */

  const { items, total, shop } = useTicket();

  return (
    <div className="flex flex-col items-center justify-start self-stretch py-6">
      <TicketHeader imagePath={shop.image}>
        <TicketHeader.Title>{shop.name}</TicketHeader.Title>
      </TicketHeader>

      {items.map((item) => (
        <Fragment key={item.product?.id}>
          <TicketFoodItem>
            <TicketFoodItem.Header>
              <TicketFoodItem.Title>{item.product?.title}</TicketFoodItem.Title>
              <TicketFoodItem.Price>{item.total}</TicketFoodItem.Price>
            </TicketFoodItem.Header>

            <TiketFoodItemButtons>
              <TiketFoodItemButtons.Controls
                handleDecrement={() => {}}
                handleIncrement={() => {}}
                quantity={item.quantity}
              />
            </TiketFoodItemButtons>

            <TicketFootAditional>
              <TicketFootAditional.Title>tamanho</TicketFootAditional.Title>
              <TicketFootAditional.Item>médio</TicketFootAditional.Item>
            </TicketFootAditional>

            <TicketFootAditional>
              <TicketFootAditional.Title>
                vai querer bebida?
              </TicketFootAditional.Title>
              <TicketFootAditional.Item aditionalPrice={"R$ 5,00"}>
                coca-cola
              </TicketFootAditional.Item>
            </TicketFootAditional>
          </TicketFoodItem>

          <Divider />
        </Fragment>
      ))}

      <Payment>
        <Payment.Total>{total}</Payment.Total>
      </Payment>
    </div>
  );
};
