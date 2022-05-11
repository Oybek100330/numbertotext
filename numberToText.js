
const unlilar = ['i', 'a', 'e',  'o', 'u']

function numberToText (number) {
    let result = ""
    const birlar = {0: '', 1: 'bir', 2: 'ikki', 3: 'uch', 4: 'to‘rt', 5: 'besh', 6: 'olti', 7: 'yetti', 8: 'sakkiz', 9: 'to‘qqiz'}
    const onlar = {0: '', 1: 'o‘n', 2: 'yigirma', 3: 'o‘ttiz', 4: 'qirq', 5: 'ellik', 6: 'oltmish', 7: 'yetmish', 8: 'sakson', 9: 'to‘qson'}
    let bir = number % 10
    let on = parseInt((number % 100) / 10)
    let yuz = parseInt((number % 1000) / 100)
    if(number === 0) return 'nol'
    if(yuz) {
        result += birlar[yuz] + ' ' + 'yuz' + ' '
    }
    if(on) {
        result += onlar[on] + ' '
    }
    if(bir) {
        result += birlar[bir]
    }
    return result
}

function bigNumberToText (item) {
    let number
    if(item[item.length - 1] == '-'){
        number = +(item.slice(0, item.length - 1))
    }else {
        number = +item
    }
    let result = ""
    let yuz = number % 1000
    let ming = parseInt((number % 10 ** 6) / 1000)
    let million = parseInt((number % 10 ** 9) / 10 ** 6)
    let milliard = Math.trunc((number % 10 ** 12) / 10 ** 9)
    if(yuz) { 
        result = numberToText(yuz) + result
    }
    if(ming) {
        result = numberToText(ming) + ' ' + 'ming' + ' ' + result
    }
    if(million) {
        result = numberToText(million) + ' ' + 'million' + ' '+ result
    }
    if(milliard) {
        result = numberToText(milliard) + ' ' + 'milliard' + ' ' + result
    }
    if(isNaN(item)) {
        if(unlilar.includes(result[result.length - 1])) return result + 'nchi'
        return result + 'inchi'
    }
    return result
}

module.exports = bigNumberToText