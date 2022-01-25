let data = [
    { id: 1, title: 'Item No. 1', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 2, title: 'Item No. 2', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 3, title: 'Item No. 3', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 4, title: 'Item No. 4', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 5, title: 'Item No. 5', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 6, title: 'Item No. 6', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 7, title: 'Item No. 7', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 8, title: 'Item No. 8', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
];


new draggable({
    elm: document.querySelector('#list'),
    list: data,
    template: (item) => {
        return `
        <div class="list-item d-flex align-items-center mb-3" id="item-${item.id}">
            <h1 class="list-item_number px-3">${item.id}</h1>
            <div class="list-item_content px-3 my-3 h-75">
                <h4 class="title">${item.title}</h4>
                <P>${item.text}</P>
            </div>
        </div>
        `
    },
    update: (newList) => {
        console.clear();
        for (let item of newList) {
            console.log(item)
        }
    }
})