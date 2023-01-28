
const element = (() => {
    const createDiv = (className) => {
        const div = document.createElement('div');
        div.classList.add(className);
        return div
    };

    const createH1 = (className) => {
        const h1 = document.createElement('h1');
        h1.classList.add(className);
        return h1
    }

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
        btn.classList.add('btn');
        btn.classList.add(className);
        return btn;
    };

    return {
        createDiv,
        createH1,
        createPara,
        createInput,
        createButton
    };
})()

export default element;