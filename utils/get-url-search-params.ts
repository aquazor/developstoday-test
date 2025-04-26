export function getUrlSearchParams<T extends Record<string, string | undefined>>(
  searchParams: T,
) {
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });
  return params;
}
