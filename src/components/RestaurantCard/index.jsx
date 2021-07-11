import React, { useState} from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';

import { RestaurantPhoto, Restaurant, RestaurantInfo, Title, Address } from './styles';

const RestaurantCard = ({restaurant}) => { 
    const [imageLoaded, setimageLoaded] = useState(false);
    return(
        <Restaurant >
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars count={5} value={restaurant.rating} isHalf activeColor="#e7711c" edit={false}/>
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto
            imageLoaded={imageLoaded}
            src={restaurant.photo ? restaurant.photos[0].getUrl() : restaurante} alt="foto do restaurante" onLoad={() => setimageLoaded(true)} />
            {!imageLoaded && <Skeleton width="100px" height="100px"/>}
        </Restaurant>  
    );
};

export default RestaurantCard;