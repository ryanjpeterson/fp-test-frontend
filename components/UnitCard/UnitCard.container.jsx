import UnitCard from "./UnitCard.component";

const UnitCardContainer = ({units}) => {
        return(
            <>
                <div className="unitCard__container">
                    {units.map(unit => {
                        return <UnitCard key={unit.id} unit={unit} />
                    })}
                </div>
            </>
        )    
} 

export default UnitCardContainer;