const h1Element = document.createElement('h1');

h1Element.append('Hello from it-incubator')
document.body.append(h1Element);

// data

const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    technologies: [
        {title: 'Front'},
        {title: 'Back'},
        {title: 'GameDev'}
    ]
}

// render
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);


let selectElement = document.createElement('select');

let option1Element = document.createElement('option');
option1Element.append(info.technologies[0].title);

let option2Element = document.createElement('option');
option2Element.append(info.technologies[1].title);

let option3Element = document.createElement('option');
option3Element.append(info.technologies[2].title);

selectElement.append(option1Element, option2Element, option3Element);
document.body.append(selectElement);











