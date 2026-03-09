import {type SubItemType} from "@/types/SubItem-type"

export type NavItemType = {
    nombre: string,
    children? : SubItemType[]
}