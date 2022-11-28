// phone
const handleProductChange = (isChange) => {
    const inputCount = document.querySelector('.form-control');
    const inputValue = parseInt(inputCount.value);

    let newInputValue = inputValue;

    if(isChange == true){
        newInputValue = inputValue + 1;
    }else if(isChange == false && inputValue > 0){
        newInputValue = inputValue - 1;
    }

    inputCount.value = newInputValue;

    const totalPice = newInputValue * 1219;
    document.querySelector('.phone-price').innerText =  `$${totalPice}`;
}