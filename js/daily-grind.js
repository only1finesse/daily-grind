/*
Day of the Week - day
Coffee Name - name
Coffee pic - pic
Alt Tag - alt
Coffee Description - desc
Color for Coffee - color
*/


let myDate = new Date();
myDay = myDate.getDay();
today = "";
coffee = "";

function coffeeTemplate(coffee) {
    let myReturn = " ";


    myReturn =
        `
        <p>
        <img src="${coffee.pic}" alt="Our ${coffee.alt}!" id="coffee">
        <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong
            class="feature">${coffee.name}</strong>, ${coffee.desc}
        </p>
        `;


    return myReturn;
}

switch (myDay) {
    case 0:
        today = "Sunday";
        coffee = {
            name: "Drip",
            color: "brown",
            pic: "images/drip.jpg",
            alt: "A piccture of Drip coffee",
            day: "Wednesday",
            desc: `Some days you just need the Drip`

        };
        break;

    case 1:
        today = "Monday";
        break;

    case 2:
        today = "Tuesday";
        break;

    case 3:
        today = "Wednesay";
        coffee = {
            name: "Drip",
            color: "brown",
            pic: "images/drip.jpg",
            alt: "A piccture of Drip coffee",
            day: "Wednesday",
            desc: `Some days you just need the Drip`

        };
        break;

    case 4:
        today = "Thursday";
        break;

    case 5:
        today = "Friday";
        break;

    case 6:
        today = "Saturday";
        break;
}

console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

alert("Hi, it's " + today + ". I'm in another file now!");