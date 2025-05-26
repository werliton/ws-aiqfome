import { Divider } from "@/components/ui/divider";
import { Payment } from "@/components/ui/molecules/payment";
import { TicketHeader } from "@/components/ui/organisms/ticket/ticker-header";
import { TicketFoodItem } from "@/components/ui/organisms/ticket/ticket-food-item/ticket-food-item";
import { TicketFoodObs } from "@/components/ui/organisms/ticket/ticket-food-item/ticket-food-obs";
import { TicketFootAditional } from "@/components/ui/organisms/ticket/ticket-food-item/ticket-foot-adicional-list";
import { TiketFoodItemButtons } from "@/components/ui/organisms/ticket/ticket-food-item/tiket-food-item-buttons";

export default function Ticket() {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex flex-col items-center justify-start self-stretch py-6">
        <TicketHeader imagePath={"/images/stores/mat.png"}>
          <TicketHeader.Title>Burger King</TicketHeader.Title>
        </TicketHeader>

        <TicketFoodItem>
          <TicketFoodItem.Header>
            <TicketFoodItem.Title>Ceviche de polvo</TicketFoodItem.Title>
            <TicketFoodItem.Price>R$ 19,90</TicketFoodItem.Price>
          </TicketFoodItem.Header>

          <TiketFoodItemButtons />

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

        <TicketFoodItem>
          <TicketFoodItem.Header>
            <TicketFoodItem.Title>Temaki Filadélfia</TicketFoodItem.Title>
            <TicketFoodItem.Price>R$ 25,90</TicketFoodItem.Price>
          </TicketFoodItem.Header>

          <TiketFoodItemButtons />

          <TicketFootAditional>
            <TicketFootAditional.Title>
              escolha 3 ingredientes
            </TicketFootAditional.Title>

            <TicketFootAditional.Item>cream cheese</TicketFootAditional.Item>
            <TicketFootAditional.Item>tomate seco</TicketFootAditional.Item>
            <TicketFootAditional.Item>shimeji</TicketFootAditional.Item>
          </TicketFootAditional>

          {/* OPTIONAL */}
          <TicketFoodObs>tirar cebolinha</TicketFoodObs>
        </TicketFoodItem>

        <Payment />
      </div>
    </div>
  );
}
