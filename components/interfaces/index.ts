export type ContextState = {
  display: Boolean;
  option: number;
};

export type Blok = {
  blok: NavBlok;
};

export type NavBlok = {
  component: String;
  NavOptions: Array<NavOptions>;
};

export type NavOptions = {
  Title: String;
  Component: String;
  Options: Array<NavDropdown>;
  _uid: String | any;
};

export type NavDropdown = {
  List: ListObj;
  _uid: String | any;
};

export type ListObj = {
  content: Array<ListObj>;
  type: String;
  text: String;
};

export type HeroImageObj = {
  filename: string;
  name: string;
};

export type Actions = {
  MailingList: string;
  Returns: Array<TitleStr>;
  TripleBox: Array<TitleStr>;
};

export type CallToActionProps = {
  blok: Array<TitleStr>;
};

export type TitleStr = {
  Title: string;
};
