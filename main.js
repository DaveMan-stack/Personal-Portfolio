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
console.log(stacks)

function handleStack(data) {
    console.log(counter)
    
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
    console.log(document.body.classList)
})

/* On hover over projects container */
const projectContainer = selectElement('.project');
projectContainer.addEventListener('mouseover', () => {
    projectContainer.classList.add('hovering')

})

projectContainer.addEventListener('mouseout', () => {
    projectContainer.classList.remove('hovering')

})