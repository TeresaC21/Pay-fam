import React from 'react';

const Form = () => {
    return (
        <form>
            <h2>Agrega tus gastos aquí</h2>

            <div className="field">
                <label>Descripción Gasto</label>
                <input
                    type="text"
                    className="u-fll-width"
                    placeholder="Ej. Transporte"
                />
            </div>
            <div className="field">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-fll-width"
                    placeholder="Ej. 300"
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

export default Form;