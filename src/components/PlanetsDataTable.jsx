const PlanetsDataTable = ({ data }) => {
  return (
    <section>
      {Boolean(data.length) ? (
        <>
          <header>
            <div className="col">Name</div>
            <div className="col">Population</div>
          </header>
          {data}
        </>
      ) : (
        <div className="error">No planet matching search term</div>
      )}
    </section>
  );
};

export default PlanetsDataTable;
