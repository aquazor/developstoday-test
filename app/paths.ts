export const paths = {
  home: {
    getHref: () => '/',
  },
  recipes: {
    getHref: () => '/recipes',
  },
  recipe: {
    getHref: (id: string | number) => `/recipes/${id}`,
  },
};
