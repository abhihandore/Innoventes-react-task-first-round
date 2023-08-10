export const getSearchedPlanetService = async (uriParams) => {
  const response = await fetch(
    `https://swapi.dev/api/planets/?${uriParams.toString()}`
  );
  return response;
};
