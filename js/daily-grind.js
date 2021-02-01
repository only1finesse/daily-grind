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
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString); 

if(urlParams.has('day')){//use query string
     myDay = urlParams.get('day');
     myDay = parseInt(myDay);
 }else{              //use date object
     myDay = myDate.getDay();
 }

function coffeeTemplate(coffee) {
    let myReturn = " ";


    myReturn =
        `
        <p>
        <img src="${coffee.pic}" alt="Our ${coffee.alt}!" id="coffee">
        <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong
            class="feature">${coffee.name}</strong>!
            <p> ${coffee.desc} </p>
        </p>
        `;


    return myReturn;
}

switch (myDay) {
    case 0:
        today = "Sunday";
        coffee = {
            name: "Bubble Tea",
            color: "#c96462",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of Bubble Tea",
            day: "Sunday",
            desc: `Add some Bubble to your life!`

        };
        break;

    case 1:
        today = "Monday";
        coffee = {
            name: "Caramel Latte",
            color: "#d7a96e",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of Caramel Latte",
            day: "Monday",
            desc: `Enjoy the sweetness of the Caramel Latte`
        };
        break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "Cold Brew",
            color: "#54282c",
            pic: "images/cold-brew.jpg",
            alt: "A picture of Cold Brew coffee",
            day: "Tuesday",
            desc: `Start your Tuesday with the Cold Brew!`
        };
        break;

    case 3:
        today = "Wednesay";
        coffee = {
            name: "Drip",
            color: "brown",
            pic: "images/drip.jpg",
            alt: "A picture of Drip coffee",
            day: "Wednesday",
            desc: `Some days you just need the Drip`

        };
        break;

    case 4:
        today = "Thursday";
        coffee = {
            name: "Frappuccino",
            color: "#8A502B",
            pic: "images/frappaccino.jpg",
            alt: "A picture of Frappuccino",
            day: "Thursday",
            desc: `Hot day? Try the Frappe!`
        };
        break;

    case 5:
        today = "Friday";
        coffee = {
            name: "Mocha",
            color: "#a38068",
            pic: "images/mocha.jpg",
            alt: "A picture of Mocha",
            day: "Friday",
            desc: `Everybody Loves Mocha!`
        };
        break;

    case 6:
        today = "Saturday";
        coffee = {
            name: "Pumpkin spice latte",
            color: "#ff7518",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of Pumpkin Spice latte",
            day: "Saturday",
            desc: `Its the weekend, add some "spice" to your life`
        };
        break;
}

console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);
document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

// document.querySelectorAll("strong")[0].style.color = coffee.color;
// document.querySelectorAll("strong")[1].style.color = coffee.color;

// // Select the first div
// const strong = document.querySelector('.feature');

// // Assign the warning class to the first div
// strong.setAttribute('style', `color: ${coffee.color}` )

//alert("Hi, it's " + today + ". I'm in another file now!");