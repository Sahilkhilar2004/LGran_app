const database = firebase.database();

function saveBooking() {
    database.ref('bookings/' + Date.now()).set({
        name: "John Doe",
        email: "johndoe@example.com",
        people: "4",
        time: "7:00 PM",
        date: "2025-03-25",
        phone: "1234567890"
    }).then(() => {
        console.log("Data saved successfully!");
    }).catch((error) => {
        console.error("Error saving data:", error);
    });
}

saveBooking();