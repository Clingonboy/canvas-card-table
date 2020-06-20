/**
 * function for clean the canvas
 * @param {object} ctx - context of the canvas to clean
 */
function cleanCanvas (ctx) {
    ctx.fillStyle = 'rgb(50,150,50)';
    let w = ctx.canvas.width;
    let h = ctx.canvas.height;
    ctx.fillRect(0,0,w,h);
}

/**
 * function for create a deck of card name
 * @param{number} mode - if mode = 0 return ordered deck
 *                      if mode = 1 return shuffle deck
 * @returns{array[string]} return an array of card name string
 */

function createShaffleDeck (mode = 0) {
    let cardsName = [];
    let seeds = ['B', 'C', 'D', 'S'];
    let values = [ ...Array(13).keys()].map(x => ++x);
    values.forEach(value => {
        seeds.forEach(seed => {
            cardsName.push(value.toString()+seed);
        });
    });
    if (mode == 0) {
        return cardsName;
    }
    if (mode == 1) {
        cardsName.sort(() => Math.random() - 0.5);
        return cardsName;
    }
}


/** function to create a list of images files names
 *
 * @param {string} the path of the images files
 */
function createImageFileNameList(path) {
    let imageFileNameList = [];
    let names = createShaffleDeck(1);
    names.forEach(name => {
        imageFileNameList.push(path + name + '.jpg');
    });
    return imageFileNameList;
}

/** function to create image html elements list, draw all card on canvas
 * return an array of html image object
 *
 * @param {object} ctx context of the game canvas
 * @returns {array} imageHtmlElemtsList
 */
function createImageHtmlElementList (ctx) {
    let imageFileNameList = createImageFileNameList('../img/');
    let imageHtmlElemtsList = [];
    let jarOfPromise = [];
    for (let i=0; i<imageFileNameList.length; i++) {
        jarOfPromise.push(
            new Promise(resolve => {
                imageHtmlElemtsList[i] = new Image();
                imageHtmlElemtsList[i].src = imageFileNameList[i];
                imageHtmlElemtsList[i].addEventListener('load', function() {
                    resolve(true);
                });
            })
        );
    }
    
    Promise.all(jarOfPromise).then( _ =>{
        let x = 20;
        let y = 20;
        imageHtmlElemtsList.forEach(element => {
            ctx.drawImage(element, x, y);
            x += 30;
            if (x == (20+30*13)) {
                x = 20;
                y += 100;
            }
        })
    });

    return imageHtmlElemtsList;
}


export {cleanCanvas, createImageHtmlElementList };
