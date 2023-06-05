const LocationList = ({ locations, deleteLocation }) => {
  return (
    <div>
      <h2 className="heading-level-1">Locations</h2>
      {locations.map((location) => (
        <div key={location.$id} className="card">
          {/* style={{ display: 'flex', justifyContent: 'space-between' } */}
          <ul className="list">
            <li className="list-item u-main-space-between u-flex">
              <div>
                <span
                  className="icon-arrow-circle-right u-margin-32 u-cross-center"
                  aria-hidden="true"
                ></span>
                <span className="text heading-level-4 u-cross-center">
                  {location.name} - ${location.cost.amount}
                </span>
              </div>

              <button className="tooltip" aria-label="variables info">
                <span
                  onClick={() => deleteLocation(location)}
                  className="icon-trash button"
                ></span>
                <span className="tooltip-popup" role="tooltip">
                  Delete travel details
                </span>
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LocationList;
