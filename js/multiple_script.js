function Restaurant(name, tables, booked) {
    this.name = name;
    this.tables = tables;
    this.booked = booked;
    this.breakfast = breakfast;
    this.checkAvailability = function() {
        return this.tables - this.booked;
    };
}

var vegDublin = new Restaurant('The Veg Cuisine Dublin', 120, 25, true);
var vegBray = new Restaurant('The Veg Cuisine Bray', 50, 31, false);

var details1 = vegDublin.name + ' tables: ';
    details1 += vegDublin.checkAvailablity();
var elRestaurant1 = document.getElementById('restaurant1');
elRestaurant1.textContent = details1;
document.getElementById('breakfastService').textContent = 'Breakfast' + vegDublin.breakfast;

var details2 = vegBray.name + ' tables: ';
    details2 += vegBray.checkAvailablity();
var elRestaurant2 = document.getElementById('restaurant2');
elRestaurant2.textContent = details2;

