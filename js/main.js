let newTable = document.createElement('table');
let newTbody = document.createElement('tbody');
let newTr, newTd;

document.body.append(newTable);
newTable.setAttribute('id', 'table1');
document.getElementById('table1').append(newTbody);
newTbody.setAttribute('id', 'body1');

let line = prompt('Введите количество строк:');
let column = prompt ('Введите количество столбцов:');
let cell = 1;

for (i = 1; i <= line; i++) {
    
    newTr = document.createElement('tr');
    newTr.setAttribute('id', `tr${i}`);
    newTbody.append(newTr);
    
    for (j = 1; j <= column; j++) {
        
        newTd = document.createElement('td');
        newTd.setAttribute('id', `td${cell}`);
        newTd.innerHTML = `Ячейка ${cell}`
        newTr.append(newTd);
        cell++;

    }
}

function delCell() {
    
    for (z = line * column; z >= 1; z--) {
    
        let delCell = document.getElementById(`td${z}`);
        delCell.innerHTML = ''
    
    }

}

function delTd() {

    for (h = line * column; h >= 1; h--) {

        let delTd = document.getElementById(`td${h}`);
        delTd.remove();

    }

}

setTimeout(delCell, 2000);
setTimeout(delTd, 4000);
setTimeout(function() { newTable.remove() }, 6000);
