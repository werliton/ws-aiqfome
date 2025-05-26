import { Zus } from "@/lib/store/store";
import { Category } from "@/types";
import { useState } from "react";

export function useMenuItem(category: Category) {
    const [open, setOpen] = useState(false);

    const setCategory = Zus.useSetCategory();
    setCategory(category);

    return {
        open, setOpen
    }
}