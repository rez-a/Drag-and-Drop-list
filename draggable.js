class draggable {
    constructor(option) {
        this.setupList(option);
    }
    setupList(option) {
        let { list, elm: element, template } = option;

        if (!element) throw Error('the list is not exists');
        if (!list) throw Error('the data is not exists');
        if (!Array.isArray(list)) throw Error('the list is not an array, please insert an array');
        if (!template) throw Error('please add a Tempalte function');
        if (typeof template != 'function') throw Error('please add a function as template');
        let allItem = '';
        list.forEach(listItem => {
            allItem += template(listItem);
        })
        element.innerHTML = allItem;

    }
}