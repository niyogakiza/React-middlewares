export default function ({ dispatch }) {
    return next => action =>{
        if(!action.payload || !action.payload.then){
            return next(action);
        }
        //console.log(action);
        //Make sure the action's promise resolves
        action.payload
            .then(function(response){
                // Create a new action with the old type, but replace the promise
                // with the response data
            const newAction  =  { ...action, payload: response};
                // run entire cycle again. then the next loop payload will have the response from backend
            dispatch(newAction);
            });

    };
}