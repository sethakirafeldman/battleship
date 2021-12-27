const ship = require("./ship");

test('test', () =>{
    expect(ship("5","rear", "OK")).toEqual({"hitLocation": "rear", "length": "5", "status": "OK"});
});