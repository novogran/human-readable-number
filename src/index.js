module.exports = function toReadable (number) {
    let result;
    let tens;
    switch (number.toString().length) {
        case 1:
            if(number == 0) {
                result = 'zero';
            } else {
                result = numbersToReadable(number.toString());
            }
            break;
        case 2:
            if(number.toString()[0] == 1){
                result = tenToNineteenReadable(number.toString()[1]);
            } else {
                tens = tensToReadable(number.toString()[0]);
                if(number.toString()[1] == 0){
                    result = tens;
                } else {
                    result = tens + ' ' + numbersToReadable(number.toString()[1]);
                }
            }
            break;
        case 3:
            if(number.toString()[1] == 0 && number.toString()[2] == 0) {
                result = numbersToReadable(number.toString()[0]) + ' ' + 'hundred';
                break;
            }
            if (number.toString()[1] == 0){
                result = numbersToReadable(number.toString()[0]) + ' ' + 'hundred' + ' '+ numbersToReadable(number.toString()[2]);
                break;
            }
            if(number.toString()[1] == 1){
                result = numbersToReadable(number.toString()[0]) + ' ' + 'hundred' + ' ' + tenToNineteenReadable(number.toString()[2]);
            } else {
                if(number.toString()[2] != 0){
                    result = numbersToReadable(number.toString()[0]) + ' ' + 'hundred' + ' ' + tensToReadable(number.toString()[1]) + ' ' + numbersToReadable(number.toString()[2]);
                } else {
                    result = numbersToReadable(number.toString()[0]) + ' ' + 'hundred' + ' ' + tensToReadable(number.toString()[1]);
                }
            }
            break;
        default:
            console.log( "Ошибка" );
    }
    return result;
}

function numbersToReadable (number) {
    let result;
    switch (number) {
        case '1':
            result = 'one';
            break;
        case '2':
            result = 'two';
            break;
        case '3':
            result = 'three';
            break;
        case '4':
            result = 'four';
            break;
        case '5':
            result = 'five';
            break;
        case '6':
            result = 'six';
            break;
        case '7':
            result = 'seven';
            break;
        case '8':
            result = 'eight';
            break;
        case '9':
            result = 'nine';
            break;
        default:
            result = '';
    }
    return result;
}

function tensToReadable (tens) {
    let result;
    switch (tens) {
        case '2':
            result = 'twenty';
            break;
        case '3':
            result = 'thirty';
            break;
        case '4':
            result = 'forty';
            break;
        case '5':
            result = 'fifty';
            break;
        case '6':
            result = 'sixty';
            break;
        case '7':
            result = 'seventy';
            break;
        case '8':
            result = 'eighty';
            break;
        case '9':
            result = 'ninety';
            break;
        default:
            result = '';
    }
    return result;
}

function tenToNineteenReadable (number){
    let result;
    switch (number) {
        case '0': 
            result = 'ten';
            break;
        case '1':
            result = 'eleven';
            break;
        case '2':
            result = 'twelve';
            break;
        case '3':
            result = 'thirteen';
            break;
        case '4':
            result = 'fourteen';
            break;
        case '5':
            result = 'fifteen';
            break;
        case '6':
            result = 'sixteen';
            break;
        case '7':
            result = 'seventeen';
            break;
        case '8':
            result = 'eighteen';
            break;
        case '9':
            result = 'nineteen';
            break;  
        default:
            result = ''; 
    }
    return result;
}
