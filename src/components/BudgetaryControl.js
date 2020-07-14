import React, { Fragment } from 'react';

const BudgetaryControl = () => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto:
            </div>
            <div className="alert">
                Restante:
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