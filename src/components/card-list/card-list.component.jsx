import './card-list.style.css';
import Card from '../card/card.component';

const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map((monster) => {
            const { id, name, email } = monster;
            return (
                <Card monster={monster} key={id} />
            )
        })}
    </div>
);

export default CardList;