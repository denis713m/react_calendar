import moment from "moment";

export function monthError(props, propName, componentName) {
    if (props.isShowMonth) {
        if(!(propName in props)){
            return new Error(`Missing prop month(Number.type)`);
        }
        if(!Number.isInteger(props[propName])) return new Error(`Failed prop type: Invalid input type: ${propName} of type ${typeof props[propName]} supplied to ${componentName}, expected Integer.`);
        if (Number(props[propName]) < 0 || Number(props[propName] >11)) return new Error(`Prop month should be in interval [0...11]`);


    }
}

export function dateError(props, propName, componentName) {
    if(( typeof props[propName]) === 'string') {

        if (!moment(props[propName], 'YYYY.MM.DD').isValid())
            return new Error(`Failed prop type: Invalid input type: ${propName}: ${props[propName]} in "events" 
            supplied to ${componentName}, expected String in format YYYY.MM.DD.`);
    }
    else{
        return new Error(`Failed prop type: Invalid input type: ${propName}
         of type ${typeof props[propName]} supplied to ${componentName}, expected String in format YYYY.MM.DD.`);
    }
}

export function timeError(props, propName, componentName) {
    if ((typeof props[propName]) === 'string') {

        if (!moment(props[propName], 'HH:mm').isValid())
            return new Error(`Failed prop type: Invalid input type: ${propName}: ${props[propName]} in "events" 
            supplied to ${componentName}, expected String in format HH:mm(HH[0...23], mm[0..59]).`);
    } else {
        return new Error(`Failed prop type: Invalid input type: ${propName}
         of type ${typeof props[propName]} supplied to ${componentName}, expected String in format YYYY.MM.DD.`);
    }
}