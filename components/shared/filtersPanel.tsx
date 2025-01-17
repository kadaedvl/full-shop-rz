import './filtersPanel.css'

const FiltersPanel:React.FC = () => {
    return (
      <div className="filters-board">
        <fieldset className="fieldset">
          <legend>Year</legend>
          <div>
            <input type="checkbox" id="new" />
            <label htmlFor="new">2025</label>
          </div>
          <div>
            <input type="checkbox" id="old" />
            <label htmlFor="old">2024</label>
          </div>
        </fieldset>

        <fieldset className="fieldset">
          <legend>Price</legend>
          <div>
            <input type="range" id="range" />
          </div>
          <div className="priceFromTo">
            <label htmlFor="from">From</label>
            <input type="text" id="from" />
            <label htmlFor="to">To</label>
            <input type="text" id="to" />
          </div>
        </fieldset>
      </div>
    );
}

export default FiltersPanel;