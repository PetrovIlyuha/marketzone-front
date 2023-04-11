export const pathsPublic: { [key: string]: string } = {
  home: "/",
  login: "login",
  productDetails: "product/:id",
  favorites: "/favorites",
};

export const pathsPrivate: { [key: string]: string } = {
  accountSettings: "account-settings",
  logout: "logout",
};

export const paths = { ...pathsPublic, ...pathsPrivate } as const;

export const checkPathMatch = (
  path: string,
  paths: { [key: string]: string }
): boolean => {
  return Object.values(paths).some((p) => p.slice(1) === path.split("/")[1]);
};
