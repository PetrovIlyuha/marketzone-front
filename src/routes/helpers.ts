export const pathsPublic: { [key: string]: string } = {
  home: "/",
  productDetails: "/product/:idOrSlug",
};

export const pathsPrivate: { [key: string]: string } = {
  accountSettings: "/account-settings",
};

export const paths = { ...pathsPublic, ...pathsPrivate } as const;

export const checkPathMatch = (
  path: string,
  paths: { [key: string]: string }
): boolean => {
  return Object.values(paths).some((p) => p.slice(1) === path.split("/")[1]);
};
