export interface MenuListInterface {
  menu_name: string,
  menu_url: string,
  menu_icon?: string
  children?: Array<MenuListInterface>
}