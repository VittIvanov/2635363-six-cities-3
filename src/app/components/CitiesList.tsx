import { Link } from 'react-router-dom';
import { CitiesListProps } from '../../types/types';


const CitiesList: React.FC<CitiesListProps> = ({ cities, activeCity, onCityClick }) => (
  <ul className="locations__list tabs__list">
    {cities.map((city) => (
      <li className="locations__item" key={city}>
        <Link
          to="#"
          className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`}
          onClick={(e) => {
            e.preventDefault(); // чтобы не перезагружалась страница
            onCityClick(city); // обновляем выбранный город
          }}
        >
          <span>{city}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default CitiesList;
