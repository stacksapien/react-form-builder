export const getFormPreFillTextInput = (data) => {
    if("userInput" in data){
        return {
            isExists : true,
            data : data.userInput
        }
    }
    return {
        isExists : false,
        data : ''
    }
}

export const getFormPreFillCheckbox = (checkboxValue, data, index) => {
    try {
        if("userInput" in data){
            return {
                isEqual : (checkboxValue === data.userInput[index]),
            }
        }
        return {
            isEqual : false
        }    
    } catch (error) {
        console.log(error);
        return {
            isEqual : false
        }
    }
    
}

export const getFormPreFillRadioBox = (checkboxValue, data) => {
    try {
        if("userInput" in data){
            return {
                isEqual : (checkboxValue == data.userInput),
            }
        }
        return {
            isEqual : false
        }    
    } catch (error) {
        return {
            isEqual : false
        }
    }
    
}

export const getFormPreFillRating = (data) => {
    if("userInput" in data){
        return {
            index : data.userInput,
        }
    }
    return {
        index : -2
    }
}


export const getFormPreFillMultipleChoiceGrid = (checkboxValue, data, index) => {
    try {
        if("userInput" in data){
            return {
                isEqual : (checkboxValue == data.userInput[index]),
            }
        }
        return {
            isEqual : false
        }    
    } catch (error) {
        return {
            isEqual : false
        }
    }
    
}
