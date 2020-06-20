/**
 * main.js entry point for test
 * create 31-05-2020 by Eugenio Gonzato
 **/
import { cleanCanvas, createImageHtmlElementList} from './util.js'; 
import { Deck } from './deck.js';


console.log("start program");

// global variables
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const WIDTH = 500;
const HEIGHT = 500;
const CARDS = createImageHtmlElementList(ctx);

function init() {
    ctx.canvas.height = HEIGHT;
    ctx.canvas.width = WIDTH;
    cleanCanvas(ctx);


    // only for test --- to remove
    document.cards = CARDS;
    console.log(Deck.getCardImg(CARDS, '1B'));
    document.deck = Deck;
}


// inizialization
init();



