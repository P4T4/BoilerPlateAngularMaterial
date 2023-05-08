export interface INavbarLink {
  path: string;
  label: string;
  icon?: string;
  children: INavbarLink[];
}
