import React, { Fragment } from 'react';
import { reviewBudget } from '../helpers';

const BudgetaryControl = ({ budget, rest }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {budget}
            </div>
            <div className={reviewBudget(budget, rest)}>
                Restante: $ {rest}
            </div>
        </Fragment>
    );
}

export default BudgetaryControl;



/* import { ComponentClick, MapComponent } from 'mycomponents'

function MyApp() {
    const [stateMap, setStateMap] = useState(false);

    const showHideMap = () => {
        if (stateMap) {
            setStateMap(!stateMap);
        }
    }
    return (
        <>
            <ComponentClick onClick={showHideMap} />

            {setStateMap ? <MapComponent /> : null}
        </>
    )
} */