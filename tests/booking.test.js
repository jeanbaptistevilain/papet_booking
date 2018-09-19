const booking = require('../js/modules/booking.js');

test('rooms getted', () => {
    expect(booking.getRooms("http://localhost:3000")).toBe(true);
});
