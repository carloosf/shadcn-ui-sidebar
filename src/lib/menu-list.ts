import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon
} from "lucide-react";

import jsonData from '../../data/data.json'

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

function mapJsonToMenus(pathname: string, json: typeof jsonData): Menu[] {
  const categoryMap: Record<string, Menu> = {};

  json.forEach((item) => {
    const { CATEGORIA, NOME, URL } = item;

    if (!categoryMap[CATEGORIA]) {
      categoryMap[CATEGORIA] = {
        href: "",
        label: CATEGORIA,
        active: false,
        icon: Tag,
        submenus: []
      };
    }

    categoryMap[CATEGORIA].submenus.push({
      href: URL,
      label: NOME,
      active: pathname.includes(URL)
    });
  });

  return Object.values(categoryMap);
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "Administrador",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Painéis",
      menus: mapJsonToMenus(pathname, jsonData) // Adicionando o grupo de menus customizados
    }
  ];
}
