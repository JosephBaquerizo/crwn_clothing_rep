import { UserActionTypes } from './user.types.js';
/*
    Queremos que cada reducer esté al tanto de la acción específica a la que deben reaccionar (type)
    Payload puede ser cualquier cosa relacionada a la actualización del estado
    Debemos asegurarnos de tener un estado inicial
*/

const INITIAL_STATE = {
    currentUser: null
}

// Establecemos que null puede ser un valor actual del estado

/*
    El reducer recibe todas las acciones, aún cuando no se encuentren relacionadas a éste,
    por ello, en el caso de que la acción concuerde con lo seteado en el switch, queremos
    que se realice la actualización, caso contrario retorna el mismo estado.
*/

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;