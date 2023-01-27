
const element = (() => {
    const createDiv = (className) => {
        const div = document.createElement('div');
        div.classList.add(className);
        return div
    };

    const createPara = (className) => {
        const para = document.createElement('p');
        para.classList.add(className);
        return para;
    };

    const createInput = (inputType, inputId) => {
        const input = document.createElement('input');
        input.setAttribute('type', inputType);
        input.setAttribute('id', `${inputId}-input`);
        input.setAttribute('name', `${inputId}-input`);
        return input
    };

    const createButton = (className) => {
        const btn = document.createElement('button');
        btn.classList.add(className);
        return btn;
    };

    return {
        createDiv,
        createPara,
        createInput,
        createButton
    };
})()



export default element;