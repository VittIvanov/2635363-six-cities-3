import OfferCard from './OfferCard';
import { OffersListProps } from '../../types/types';
import { useCallback, memo } from 'react';

const OffersList: React.FC<OffersListProps> = memo(({ offers, onFavoriteClick, onActiveOfferChange, activeOfferId }) => {

  const handleOfferMouseEnter = useCallback((id: string) => {
    onActiveOfferChange?.(id);
  }, [onActiveOfferChange]);

  const handleOfferMouseLeave = useCallback(() => {
    onActiveOfferChange?.('');
  }, [onActiveOfferChange]);

  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          isActive={offer.id === activeOfferId}
          onOfferMouseEnter={handleOfferMouseEnter}
          onOfferMouseLeave={handleOfferMouseLeave}
          onFavoriteClick={onFavoriteClick}
          variant="cities"
        />
      ))}
    </>
  );
});

OffersList.displayName = 'OffersList';

export default OffersList;
