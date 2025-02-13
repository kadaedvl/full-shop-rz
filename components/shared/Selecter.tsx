import './Selecter.css'

type Vatiant = {
    name: string;
    value: string;
    disabled?: boolean;
}
interface Props {
    items: readonly Vatiant[];
    onClick?: (value: Vatiant['value']) => void;
    selectedValue?: Vatiant['value'];
    className?: string
}

const Selecter: React.FC<Props> = ({ items, onClick, className, selectedValue }) => {
    return (
        <div className='variations-board'>
            {items.map((item, index) => (
                <button className={Number(selectedValue) === index ? 'selectedValue' : ''} key={item.name} >{item.name}</button>
            ))}
        </div>
    )
}

export default Selecter;