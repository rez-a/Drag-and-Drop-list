class draggable {
    dragElm;
    oldList;
    update;
    constructor(option) {
        this.setupList(option);
        for (let item of option.elm.children) {
            this.DnDHandlers(item);
        }
    }
    setupList(option) {
        let { list, elm: element, template, update } = option;

        if (!element) throw Error('the list is not exists');
        if (!list) throw Error('the data is not exists');
        if (!Array.isArray(list)) throw Error('the list is not an array, please insert an array');
        if (!template) throw Error('please add a Tempalte function');
        if (!update) throw Error('please add a update function')
        if (typeof template != 'function') throw Error('please add a function as template');
        this.oldList = list;
        this.update = update;
        let allItem = '';
        list.forEach(listItem => {
            allItem += template(listItem);
        })
        element.innerHTML = allItem;

    }
    DnDHandlers(item) {
        item.setAttribute('draggable', true);


        item.addEventListener('dragstart', (e) => this.handleDragStart(e));
        item.addEventListener('dragover', (e) => this.handleDragOver(e));
        item.addEventListener('dragleave', (e) => this.handleDragLeave(e));
        item.addEventListener('dragend', (e) => this.handleDragEnd(e));
        item.addEventListener('drop', (e) => this.handleDrop(e));
    }

    handleDragStart(e) {
        this.dragElm = e.target;
        e.dataTransfer.setData('text/html', e.target.outerHTML);
        e.target.classList.add('drag');

    }
    handleDragOver(e) {
        if (e.preventDefault) { e.preventDefault() }
        if (e.target.classList.contains('list-item') && e.target != this.dragElm) {
            e.target.classList.add('over')
        }
    }
    handleDragLeave(e) {
        if (e.target.classList.contains('over')) {
            e.target.classList.remove('over')
        }
    }
    handleDragEnd(e) {
        e.target.classList.remove('drag');
    }
    handleDrop(e) {
        if (e.target.classList.contains('over')) {
            e.target.classList.remove('over')
            let target = e.target.closest('.list-item');
            let data = e.dataTransfer.getData('text/html');
            target.insertAdjacentHTML('beforebegin', data);
            target.parentNode.removeChild(this.dragElm);
            this.DnDHandlers(target.previousElementSibling);
            this.listUpdate(this.oldList);
        }
    }
    listUpdate(list) {
        let data = [];
        let newList = Array.from(document.querySelector('#list').children);
        newList.forEach(listItem => {
            data.push(list.find(item => item.id === Number(listItem.id.split('-')[1])))
        })
        this.update(data);
    }
}