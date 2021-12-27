// // ship obj properties:
// length
// where hit 
// sunk or not sunk
//https://www.hasbro.com/common/instruct/Battleship.PDF

const ship = (length, hitLocation, status, dmg) => {
    return {
        length: length,
        hitLocation: hitLocation,
        status: status,
        hit(dmg) {
            
        }
    };
};

module.exports = ship;