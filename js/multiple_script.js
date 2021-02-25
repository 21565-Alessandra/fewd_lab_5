function Restaurant(name, tables, booked, breakfast, promotion) {
    this.name = name;
    this.tables = tables;
    this.booked = booked;
    this.breakfast = breakfast;
    this.checkAvailability = function() {
        return this.tables - this.booked;
    };
}    
    

var vegDublin = new Restaurant('The Veg Cuisine Dublin', 120, 25, true);
var vegBray = new Restaurant('The Veg Cuisine Bray', 50, 31, true);

var details1 = vegDublin.name + ' tables: ';
    details1 += vegDublin.checkAvailability();
var elRestaurant1 = document.getElementById('restaurant1');
elRestaurant1.textContent = details1;
document.getElementById('breakfastService').textContent = 'Breakfast: ' + vegDublin.breakfast;

var details2 = vegBray.name + ' tables: ';
    details2 += vegBray.checkAvailability();
var elRestaurant2 = document.getElementById('restaurant2');
elRestaurant2.textContent = details2;

const options = document.querySelectorAll(".options li");
//console.log(options);

const myForm = document.querySelector('#my-Form')

let sysDate  = new Date()  
  , userDate = new Date(Date.UTC(sysDate.getFullYear(), sysDate.getMonth(), sysDate.getDate(),  sysDate.getHours(), sysDate.getMinutes(), 0));

myForm.currentDate.valueAsDate = userDate
myForm.currentTime.valueAsDate = userDate

function Promotion(celebration, price, people) {
    this.celebration = celebration;
    this.price = price;
    this.people = people;
    this.checkOffer = function() {
        return this.price * this.people;
    };
}    

var promo = new Promotion('Mothers day', 50, 2);

var details3 = promo.celebration + ' deal: ';
    details3 += promo.checkOffer();
    details3 += ' euros for ' + promo.people + ' people';
var elPromotion = document.getElementById('promotion');
elPromotion.textContent = details3;

    



