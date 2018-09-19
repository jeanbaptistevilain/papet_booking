const booking = require('../js/modules/addBooking');

test('resa does not already exist', ()=>{
    expect(booking.isNotConflict("2018-09-17", "8:00", "9:00")).toBe(false)
});