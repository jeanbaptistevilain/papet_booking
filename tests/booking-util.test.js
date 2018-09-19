const booking = require('../js/modules/booking.util.js');

test('free rooms', () => {
    expect(booking.getAvailables('2018-09-17', '21:00', "http://localhost:3000")).toEqual([0, 1, 2]);
});
