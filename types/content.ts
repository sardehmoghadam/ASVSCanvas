export type AsvsVersion = "5.0.0";

export type CodeExample = {
  language: string;
  label: string;
  filename?: string;
  code: string;
  secure?: boolean;
};

export type Section = {
  id: string;
  slug: string;
  title: string;
  description: string;
  chapterId: string;
  asvsVersion: AsvsVersion;
};

export type Category = {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  asvsVersion: AsvsVersion;
};
