
const wtreducer = (state,action) => {

let {type,payload} = action;

switch(type){
    case "updateWathcList" : return {...state,watchListMovie:payload.addthisMovie}
}  
}

export default wtreducer
