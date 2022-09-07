// Вычет deduction $12950 из облагаемой суммы

let income = +prompt('Input your income per year');

const deduction = 12950;


if(income < 0){
    alert('Input correct value');
}

else{

    let NTD = income - deduction;

    if(NTD >= 0  &&  NTD <= 10275){
        NTD *= 0.1;
        alert(`You FIT Sum: ${NTD}$`);
    }

    else if(NTD > 10275  && NTD <= 41775){
        NTD = ((NTD - 10275) * 0.12) + (10275 * 0.1);
        alert(`Your FITSum: ${NTD}$`);
    }

    else if (NTD > 41775 && NTD <= 89075){
        NTD = ((NTD - 41775) * 0.22) + ((41775 - 10275) * 0.12) + (10275 * 0.1);
        alert(`Your FITSum: ${NTD}$`);
    }

    else if (NTD > 89075 && NTD <= 170050){
        NTD = ((NTD - 89075) * 0.24) + ((89075 - 41775) * 0.22) + ((41775 - 10275) * 0.12) + (10275 * 0.1);
        alert(`Your FITSum: ${NTD}$`);
    }

    else if (NTD > 170050 && NTD <= 215950){
        NTD = ((NTD - 170050) * 0.32) + ((170050 - 89075) * 0.24) + ((89075 - 41775) * 0.22) + ((41775 - 10275) * 0.12) + (10275 * 0.1);
        alert(`Your FITSum: ${NTD}$`);
    }

    else if (NTD > 215950 && NTD <= 539900){
        NTD = ((NTD - 215950) * 0.35) + ((215950 - 170050) * 0.32) + ((170050 - 89075) * 0.24) + ((89075 - 41775) * 0.22) + ((41775 - 10275) * 0.12) + (10275 * 0.1);
        alert(`Your FITSum: ${NTD}$`);
    }

    else if (NTD > 539900){
        NTD = ((NTD - 539900) * 0.37) + ((539900 - 215950) * 0.35) + ((215950 - 170050) * 0.32) + ((170050 - 89075) * 0.24) + ((89075 - 41775) * 0.22) + ((41775 - 10275) * 0.12) + (10275 * 0.1);
        alert(`Your FITSum: ${NTD}$`);
    }

    else{
        alert("Your FIT sum: 0$")
    }
}

