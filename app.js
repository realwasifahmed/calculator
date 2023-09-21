let inpTxt = document.getElementById('input')
let btn = document.querySelectorAll('button')

btn.forEach(e => {
    e.addEventListener('click', (e) => {
        console.log(e.target.textContent)

        if (e.target.textContent === 'C') {
            inpTxt.textContent = '';
        } else if (e.target.textContent === 'R') {
            inpTxt.innerText = inpTxt.innerText.slice(0, -1)
        } else if (e.target.textContent === '=') {
            inpTxt.innerText = eval(inpTxt.innerText)
        }
        else {
            inpTxt.textContent += e.target.textContent
        }

        inpTxt.scrollLeft = inpTxt.scrollWidth;
    })
})