import { Link } from 'react-router-dom';
import { CitiesListProps } from '../../types/types';
import { memo } from 'react';

const CitiesList: React.FC<CitiesListProps> = memo(({ cities, activeCity, onCityClick }) => (
  <ul className="locations__list tabs__list">
    {cities.map((city) => (
      <li className="locations__item" key={city}>
        <Link
          to="#"
          className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`}
          onClick={(evt) => {
            evt.preventDefault();
            onCityClick(city);
          }}
        >
          <span>{city}</span>
        </Link>
      </li>
    ))}
  </ul>
));

CitiesList.displayName = 'CitiesList';

export default CitiesList;
