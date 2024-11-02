import { createTable } from './createTable.js';

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('button');
    button.addEventListener('click', createTable);
});