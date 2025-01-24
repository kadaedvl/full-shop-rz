import React from "react";

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

const FieldsetList: React.FC<FieldsetListProps> = ({
    title,
    items,
    maxView,
    setMaxView,
    setYeartTestValues,
}) => {
    // Функція для обробки кліку на чекбокс
    const onClickOne = (el: itemsType) => {
        setYeartTestValues((prevValues: itemsType[]) =>
            prevValues.map((item) =>
                item.id === el.id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    // Обрізаний масив для відображення
    const array = items.slice(0, maxView);

    return (
        <fieldset className="fieldset">
            <legend>{title}</legend>
            {array.map((el) => (
                <div key={el.id}>
                    <input
                        type="checkbox"
                        id={el.name}
                        checked={el.checked} // Динамічне значення `checked`
                        onChange={() => onClickOne(el)} // Виклик функції зміни стану
                    />
                    <label htmlFor={el.name}>{el.name}</label>
                </div>
            ))}
            {maxView < items.length ? (
                <a
                    className="showDetails"
                    onClick={() => setMaxView(items.length)}
                >
                    Показати більше ↓
                </a>
            ) : (
                <a
                    className="showDetails"
                    onClick={() => setMaxView(2)}
                >
                    Приховати ↑
                </a>
            )}
        </fieldset>
    );
};

export default FieldsetList;
