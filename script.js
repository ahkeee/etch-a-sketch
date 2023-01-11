const container = document.querySelector('.container');
// const squareDiv = document.createElement('div');
// const squareDiv1 = document.createElement('div1');
// const squareDiv2 = document.createElement('div2');
// const squareDiv3 = document.createElement('div3');
// const squareDiv4 = document.createElement('div4');
// const squareDiv5 = document.createElement('div5');
// const squareDiv6 = document.createElement('div6');
// const squareDiv7 = document.createElement('div7');
// const squareDiv8 = document.createElement('div8');
// const squareDiv9 = document.createElement('div9');
// const squareDiv10 = document.createElement('div10');
// const squareDiv11 = document.createElement('div11');
// const squareDiv12 = document.createElement('div12');
// const squareDiv13 = document.createElement('div13');
// const squareDiv14 = document.createElement('div14');
// const squareDiv15 = document.createElement('div15');



// squareDiv.style.border = '1px solid #000';
// squareDiv.style.width = '50px';
// squareDiv.style.height = '50px';

// squareDiv1.style.border = '1px solid #000';
// squareDiv1.style.width = '50px';
// squareDiv1.style.height = '50px'

// squareDiv2.style.border = '1px solid #000';
// squareDiv2.style.width = '50px';
// squareDiv2.style.height = '50px'

// squareDiv3.style.border = '1px solid #000';
// squareDiv3.style.width = '50px';
// squareDiv3.style.height = '50px';

// squareDiv4.style.border = '1px solid #000';
// squareDiv4.style.width = '50px';
// squareDiv4.style.height = '50px'

// squareDiv5.style.border = '1px solid #000';
// squareDiv5.style.width = '50px';
// squareDiv5.style.height = '50px'

// squareDiv6.style.border = '1px solid #000';
// squareDiv6.style.width = '50px';
// squareDiv6.style.height = '50px'

// squareDiv7.style.border = '1px solid #000';
// squareDiv7.style.width = '50px';
// squareDiv7.style.height = '50px'

// squareDiv8.style.border = '1px solid #000';
// squareDiv8.style.width = '50px';
// squareDiv8.style.height = '50px'

// squareDiv9.style.border = '1px solid #000';
// squareDiv9.style.width = '50px';
// squareDiv9.style.height = '50px'

// squareDiv10.style.border = '1px solid #000';
// squareDiv10.style.width = '50px';
// squareDiv10.style.height = '50px'

// squareDiv11.style.border = '1px solid #000';
// squareDiv11.style.width = '50px';
// squareDiv11.style.height = '50px'

// squareDiv12.style.border = '1px solid #000';
// squareDiv12.style.width = '50px';
// squareDiv12.style.height = '50px'

// squareDiv13.style.border = '1px solid #000';
// squareDiv13.style.width = '50px';
// squareDiv13.style.height = '50px'

// squareDiv14.style.border = '1px solid #000';
// squareDiv14.style.width = '50px';
// squareDiv14.style.height = '50px'

// squareDiv15.style.border = '1px solid #000';
// squareDiv15.style.width = '50px';
// squareDiv15.style.height = '50px'

// container.appendChild(squareDiv);
// container.appendChild(squareDiv1);
// container.appendChild(squareDiv2);
// container.appendChild(squareDiv3);
// container.appendChild(squareDiv4);
// container.appendChild(squareDiv5);
// container.appendChild(squareDiv6);
// container.appendChild(squareDiv7);
// container.appendChild(squareDiv8);
// container.appendChild(squareDiv9);
// container.appendChild(squareDiv10);
// container.appendChild(squareDiv11);
// container.appendChild(squareDiv12);
// container.appendChild(squareDiv13);
// container.appendChild(squareDiv14);
// container.appendChild(squareDiv15);

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
}

makeRows(16, 16);

function 

