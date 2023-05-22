const selectElement = (selector) => {
    let element = document.querySelector(selector);
    if (element) return element;
    return 'element not found. check to see if selector is correct!'
}

const selectElements = (selector) => {
    let elements = document.querySelectorAll(selector);
    if (elements) return elements;
    return 'elements not found. check to see if selector is correct!'
}

let stacks = selectElements('.change-stack');
let counter = 0;


function handleStack(data) {    
    if (counter === 4) {
        counter = 0;
    }

    stacks.forEach(stack => {
        stack.innerText = data[counter]
        
    });
    counter++
    

}

let interval = setInterval(() => {
    
    handleStack(['python', 'django', 'react', 'fullstack'])

}, 4000)


/* Toggle Dark Theme */

const toggleThemeBtn = selectElement('.toggle-theme-btn')
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

})

/* On hover over projects container */
/*const projectContainer = selectElement('.project');
projectContainer.addEventListener('mouseover', () => {
    projectContainer.classList.add('hovering')

})

projectContainer.addEventListener('mouseout', () => {
    projectContainer.classList.remove('hovering')

})*/

/* Making the essay section more functional */

const readMore = () => {
    const paragraphs = selectElements('.d-essay p')
    const readMoreBtn = selectElement('.read-more')
    let increment = 2;
    let counter = 0;
    paragraphs.forEach((paragraph, idx) => {
        paragraph.classList.add('hide-text');
        if(idx <= 1) {
            paragraph.classList.remove('hide-text')
        }
        
    })

    readMoreBtn.addEventListener('click', (e) => {

        switch (increment) {
            case 2:
                paragraphs[increment].classList.remove('hide-text')
                increment++
                break;
            case 3:
                paragraphs[increment].classList.remove('hide-text')
                increment++
                break;
            case 4:
                paragraphs[increment].classList.remove('hide-text')
                increment++
                break;
            case 5:
                paragraphs[increment].classList.remove('hide-text')
                increment++
                break;
            case 6:
                paragraphs[increment].classList.remove('hide-text')
                increment++
                break;
            case 7:
                increment = 2;
                paragraphs.forEach((paragraph, idx) => {
                    paragraph.classList.add('hide-text');
                    if(idx <= 1) {
                        paragraph.classList.remove('hide-text')
                    }
                    
                })
                break;
            default:
                break;
        }
        
        
    })


}
readMore();


/*creating our beautiful slides */

const slidedivs = selectElements('.slides div');
slidedivs[0].classList.add('extend-width')
slidedivs[0].classList.add('on-hover-slide')
slidedivs.forEach((eachDiv, idx) => {
    eachDiv.addEventListener('click', () => {

        slidedivs.forEach((secondDiv, indx) => {
            if (indx !== idx) {

                secondDiv.classList.remove('extend-width')
            }
            if (indx === idx) {
                secondDiv.classList.add('extend-width');
                eachDiv.classList.add('on-hover-slide')
                

            }
        })
    })
    eachDiv.addEventListener('mouseover', () => {
        if (eachDiv.classList.contains('extend-width')) {
            eachDiv.classList.add('on-hover-slide')

        }
    })


    eachDiv.addEventListener('mouseout', () => {
        if (eachDiv.classList.contains('extend-width')) {
            eachDiv.classList.remove('on-hover-slide')

        }
    })

})

const projectText = selectElement('.projects h2').innerText;
console.log(projectText)
console.log(projectText.split(''))


const makeTextVertical = (selector) => {
    const texts = selectElements(selector);
    texts.forEach(textEl => {
        let text = textEl.innerText;
        textEl.innerText = ''
        textEl.classList.add('flex')
        textEl.classList.add('flex-col')


        text.split('').forEach(letter => {
            let span = document.createElement('span');
            span.innerText = letter
            textEl.innerHTML += span.outerHTML
            console.log(span.outerHTML)
        })
    })
    
}

makeTextVertical('.projects h2')

console.log(screenX)

/*document.body.addEventListener('mouseover', () => {
    console.log(scrollbars)
})*/


/* Socials: making it interactive */
const socialsContainer = selectElement('.socials');
const showOrHideSocialBtn = selectElement('.show-or-hide-socials-btn');
showOrHideSocialBtn.addEventListener('click', () => {
    socialsContainer.classList.add('show-or-hide-socials')
    setTimeout(() => {
        socialsContainer.classList.remove('show-or-hide-socials')

    }, 2000)
})