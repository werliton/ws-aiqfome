import { CategoryRadio } from "@/components/ui/organisms/product/category/category-radio";
import { CategoryCheckbox } from "@/components/ui/organisms/product/category/category-checkbox";

import { Textarea } from "@/components/ui/atoms/textarea";
import { SeeTicket } from "@/components/ui/molecules/see-ticket";
import { ProductInfo } from "@/components/ui/organisms/product/detail/product-info";
import { Divider } from "@/components/ui/atoms/divider";

export default async function Product({
  params,
}: {
  params: Promise<{ product: string; id: string }>;
}) {
  const { product, id } = await params;

  return (
    <div className="flex flex-1 flex-col items-center justify-start gap-4 pb-6">
      <ProductInfo productId={product} storeId={id} />

      <Divider />

      <CategoryRadio>
        <CategoryRadio.Header subtitle="escolha 1">
          qual o tamanho?
        </CategoryRadio.Header>
        <CategoryRadio.List>
          <CategoryRadio.ListItem priceBase="25,90">
            grande
          </CategoryRadio.ListItem>
          <CategoryRadio.PromotionListItem
            priceBase="21,90"
            priceDiscounted="18,90"
          >
            médio
          </CategoryRadio.PromotionListItem>
        </CategoryRadio.List>
      </CategoryRadio>

      <CategoryCheckbox>
        <CategoryCheckbox.Header subtitle="escolha de 1 a 2">
          acompanhamentos
        </CategoryCheckbox.Header>
        <CategoryCheckbox.List>
          <CategoryCheckbox.ListItem value="shoyo" />
          <CategoryCheckbox.ListItem value="gengibre" />
          <CategoryCheckbox.ListItem value="wasabi" />
          <CategoryCheckbox.ListItem value="sem acompanhamentos" />
        </CategoryCheckbox.List>
      </CategoryCheckbox>

      <Divider />

      <CategoryRadio>
        <CategoryRadio.Header subtitle="escolha até 1">
          precisa de talher?
        </CategoryRadio.Header>
        <CategoryRadio.List>
          <CategoryRadio.ListItemNoPrice value="hashi" />
          <CategoryRadio.ListItem priceBase="1,00">
            garfo e faca descartável
          </CategoryRadio.ListItem>
        </CategoryRadio.List>
      </CategoryRadio>

      <Divider />

      <CategoryCheckbox>
        <CategoryCheckbox.Header subtitle="escolha até 2">
          mais alguma coisa?
        </CategoryCheckbox.Header>
        <CategoryCheckbox.List>
          <CategoryCheckbox.ListItemWihtPrice value="biscoito da sorte">
            R$ 2,00
          </CategoryCheckbox.ListItemWihtPrice>
          <CategoryCheckbox.ListItemWihtPrice value="rolinho primavera">
            R$ 2,00
          </CategoryCheckbox.ListItemWihtPrice>
          <CategoryCheckbox.ListItemWihtPrice value="queijo">
            R$ 2,00
          </CategoryCheckbox.ListItemWihtPrice>
        </CategoryCheckbox.List>
      </CategoryCheckbox>

      <Divider />

      <Textarea
        className="h-20 w-80 px-3 py-2.5 text-sm leading-tight font-semibold text-neutral-500 outline-offset-[-1px] outline-gray-300"
        placeholder="alguma observação do item? • opcional ex: tirar algum ingrediente, ponto do prato"
      />

      {/* BOTAO FLUTUANTE VAI APARECER SOMENTE QUANDO TIVER ITENS NO CARRINHO */}
      <SeeTicket productId={product} />
    </div>
  );
}
