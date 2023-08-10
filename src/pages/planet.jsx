import { useState } from 'react';
import Search from '../components/Search';
import { getSearchedPlanetService } from '../services/planetService';
import PlanetsDataTable from '../components/PlanetsDataTable';

const Planet = () => {
  const [planetsData, setPlanetsData] = useState([]);
  const [isLoadingPlanets, setIsLoadingPlanets] = useState(false);

  const handleSearch = async (searchTerm) => {
    if (!searchTerm.trim().length) {
      setPlanetsData([]);
      return;
    }
    const uriParams = new URLSearchParams({
      search: searchTerm,
      page: 1,
    });
    setIsLoadingPlanets(true);
    const response = await getSearchedPlanetService(uriParams);
    const data = await response.json();
    setIsLoadingPlanets(false);
    setPlanetsData(data.results || []);
  };

  const planetsTableData = planetsData.map((eachPlanet) => {
    const pIcon = '\u{1F468}';
    return (
      <div key={eachPlanet.name}>
        <div className="col">{eachPlanet.name}</div>
        <div title={eachPlanet.population} className="col align-left">
          {!isNaN(+eachPlanet.population)
            ? new Array(eachPlanet.population.length).fill(pIcon).join('')
            : ''}
        </div>
      </div>
    );
  });

  return (
    <div>
      <Search onSearch={handleSearch} />
      {/*
       * Replace the section below with the results of the search
       */}

      <section>
        {isLoadingPlanets ? (
          'Loading...'
        ) : (
          <PlanetsDataTable data={planetsTableData} />
        )}
      </section>
    </div>
  );
};

export default Planet;
