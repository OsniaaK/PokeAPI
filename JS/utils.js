export const create = (tag="", content="", attributes={}) => {
    const elemento = document.createElement(tag)
    elemento.innerHTML=content;
    Object.keys(attributes).forEach((attribute) => elemento.setAttribute(attribute, attributes[attribute]));
}

export const read = (key) => JSON.parse(localStorage.getItem(key))

export const save = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
    return read(key);
}

export const select = (selector) => document.querySelector(selector)
export const selectAll = (selector) => document.querySelectorAll(selector)