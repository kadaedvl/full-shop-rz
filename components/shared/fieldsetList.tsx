interface itemsType {
    id: number;
    name: string;
    checked: boolean;
}

interface FieldsetListProps {
    title: string;
    items: itemsType[];
    maxView: number;
    setMaxView: Function;
    setYeartTestValues: Function;
}



const FieldsetList: React.FC<FieldsetListProps> = ({ title, items, maxView, setMaxView, setYeartTestValues }) => {

    const onClickOne = (el) => {
        el.checked = !el.checked
        setYeartTestValues();
    }
    const array = items.slice(0, maxView);

    return (
        <fieldset className="fieldset">
            <legend>{title}</legend>
            {array.map((el) => (
                <div key={el.id}>
                    <input type="checkbox" id={el.name} onChange={() => onClickOne(el)} />
                    <label htmlFor={el.name}>{el.name}</label>
                </div>
            ))}
            {(maxView < items.length)
                ? <a className="showDetails" onClick={() => setMaxView(items.length)}>Показати більше ↓</a>
                : <a className="showDetails" onClick={() => setMaxView(2)}>Приховати ↑</a>
            }

        </fieldset>
    )
}

export default FieldsetList;