// class for handle the deck
//


class Deck {
    /**
     * function to get the image of a given card
     */
    static getCardImg (imgs, cardName) {
        let tempCard;
        imgs.forEach(img => {
            if (img.src.search('/' + cardName) != -1) {
                tempCard = img;
            }
        });
        return tempCard || 'Error - no card name find';
    }

    /**
     * function to give to a player random cads
     * only for test
     */
    static getRandomCard () {
        
    }

    /**
     * function to generate a shaffle shuffle deck
     */
}

export { Deck } ;

