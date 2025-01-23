import { useState } from 'react';
import FieldsetList from './fieldsetList';
import './filtersPanel.css'

const FiltersPanel: React.FC = () => {

  const [maxView, setMaxView] = useState(2)

  const [yeartTestValues, setYeartTestValues] = useState([
    {
      id: 0,
      name: '2025',
      checked: false,
    },
    {
      id: 1,
      name: '2024',
      checked: false,
    },
    {
      id: 2,
      name: '2023',
      checked: false,
    },
    {
      id: 3,
      name: '2022',
      checked: false,
    },
    {
      id: 4,
      name: '2021',
      checked: false,
    },
    {
      id: 5,
      name: '2020',
      checked: false,
    },
    {
      id: 6,
      name: '2019',
      checked: false,
    },])
  console.log(yeartTestValues)

  return (
    <div className="filters-board">
      <FieldsetList
        title={'Years'}
        items={yeartTestValues}
        maxView={maxView}
        setMaxView={setMaxView}
        setYeartTestValues= {setYeartTestValues}
      />

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