import { NavItemType } from "@/types/NavItem-type";



export const NavItemsData: NavItemType[] = [
    {
        nombre: "Catalogos",
        children: [
            {
                nombre:"Conceptos empresa",
                href: "/catalogos/conceptos-empresa"
            },
            {
                nombre:"Otras incidencias",
                href: "/catalogos/otras-incidencias"
            },
        ]
    }
] 