import { STRAPI_UPLOADS } from "../../config";

import Image from "next/image";

const UnitCard = ({ unit }) => {

    const { name, numOfBeds, numOfBaths, price, sqft, isAvailable, previewImg } = unit.attributes;

    let previewImgUrl = previewImg.data?.attributes.url;
    let preview;

    
    if (previewImgUrl !== undefined) {
        preview = previewImgUrl;
    } else {
        preview = null;
    }


    return <>
        <div className="unitCard">
            <div className="unitCard__img">
                {preview !== null && <Image src={preview} alt={name} height={500} width={500} objectFit="cover" />}
            </div>

            <div className="unitCard__info">
                <h3>{name}</h3>
                <span className="unitCard__bedsbaths">{numOfBeds} beds | {numOfBaths} baths</span>
                <div className=""><span className="unitCard__price">${price}</span> | <span className="unitCard__sqft">{sqft} sqft.</span></div>
                <span className="unitCard__availability">{isAvailable ? 'Available' : 'Not Available'}</span>

                <div className="unitCard__actions">
                    <a href="#" className="unitCard__moreInfo">More Info</a>
                </div>
            </div>
        </div>
    </>
}

export default UnitCard;