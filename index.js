var first_side_dishes;
var second_side_dishes;
var menu_drinks;

function time_validation() {
    function validateTime(time) {
        return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time);
    }

    let your_hour = prompt("Please enter the current time. (HH:MM).");

    if (your_hour && validateTime(your_hour)) {
        
        if (your_hour >= '08:00' && your_hour <= '11:00') {
            first_side_dishes = {
                "Oatmeal with fruits": "7",
                "Scrambled eggs": "5",
                "Avocado and salmon toast": "8",
                "Greek yogourt with granola and fruits": "4",
                "Egg and vegetables wraps": "5",
                "Pancakes with siroup": "3",
            };
            second_side_dishes = {
                "Extra fruit": "2",
                "Extra 1 egg": "2",
                "Extra avocado": "4",
                "Salmon": "6",
            };
            menu_drinks = {
                "Coffee with milk": "1.1",
                "Milk": "1.5",
                "Espresso": "1.0",
                "Smoothie": "3",
            };
            order();
        } else if (your_hour >= '13:00' && your_hour <= '16:00') {
            first_side_dishes = {
                "Rissoto": "22",
                "Avocado salad": "13",
                "Grilled chicken": "9",
                "Lasagna": "18",
                "Grilled sea bass": "22",
            };
            second_side_dishes = {
                "Spaghetti carbonara": "7",
                "Chicken caesar salad": "8",
                "Margherita pizza": "12",
                "Grilled salmon": "15",
                "Vegetables": "9",
            };
            menu_drinks = {
                "CocaCola": "1.5",
                "Fanta": "1.5",
                "Nestea": "1.0",
                "Water": "1",
                "Beer": "3",
            };

            order();
        } else if (your_hour >= '20:00' && your_hour <= '23:00') {
            first_side_dishes = {
                "Rissoto": "25",
                "Avocado salad": "15",
                "Grilled chicken": "11",
                "Lasagna": "21",
                "Grilled sea bass": "24",
            };
            second_side_dishes = {
                "Spaghetti carbonara": "9",
                "Chicken caesar salad": "10",
                "Margherita pizza": "13",
                "Grilled salmon": "19",
                "Vegetables": "11",
            };
            menu_drinks = {
                "CocaCola": "1.6",
                "Fanta": "1.6",
                "Nestea": "1.2",
                "Water": "1.5",
                "Beer": "3.6",
            };
            order();
        } else {
            alert("The kitchen is closed.");
        }
    } else {
        alert("Please enter a valid time in HH:MM format.");
        time_validation();
    }
}

time_validation();



function order() {
    function menu_ordering() {

        var drink_elegido_UpTo;
        var plato_elegido_UpTo;
        var side_elegido_UpTo;
        var menu_total_price = 0;
        var menu_first_dish_price;
        var menu_drinks_price;
        var menu_second_dish_price;
        var tips;
    
        function randomComment() {
            let random_number_comment = Math.floor(Math.random() * 3) + 1;
        
            if (random_number_comment === 1) {
                return("is a very good choice!");
            }
            else if (random_number_comment === 2) {
                return("is also my favorite!");
            }
            else {
                return("is our favorite one also.");
            }
        }
    
        function drink_choosing()
        {
            let message2 = prompt("And would you like something to drink? (Yes/No)");
            if (message2 === "Yes") {
                let choosing_drink = true;
                while (choosing_drink) {
                    let message3 = "Please choose your favorite drink from menu.\n";
                    for (let drinks in menu_drinks)
                    {
                        message3 += `${drinks}: $${menu_drinks[drinks]}\n`;
                    }
                    let drink_elegido = prompt(message3);
                    drink_elegido_UpTo = drink_elegido.charAt(0).toUpperCase() + drink_elegido.slice(1).toLowerCase();
    
                    if (drink_elegido_UpTo == "" )
                    {
                        alert("You didnt write a valid drink.");
                        drink_choosing();
                    }
                    else if (drink_elegido_UpTo in menu_drinks)
                    {
                        let my_comment = randomComment();
                        alert(`${drink_elegido_UpTo} ${my_comment}`);
                        menu_drinks_price = Number(menu_drinks[drink_elegido_UpTo])
                        menu_total_price += menu_drinks_price;
                        choosing_drink = false;
                    } else {
                        let retry = prompt("Sorry, we don't have that drink. Would you like to see the menu again? (Yes/No)");
                        if (retry !== "Yes") {
                            choosing_drink = false;
                        }
                    }
                }
            }
        }
    
        function second_side_choosing() 
        {
            let message5 = prompt("Would you also like second side dish? (Yes/No)");
            if (message5 === "Yes") {
                let choosing_second_side = true;
                while (choosing_second_side) {
                    let message6 = "Please choose your favorite dish from menu.\n";
                    for (let seconds in second_side_dishes)
                    {
                        message6 += `${seconds}: $${second_side_dishes[seconds]}\n`;
                    }
                    let side_elegido = prompt(message6);
                    side_elegido_UpTo = side_elegido.charAt(0).toUpperCase() + side_elegido.slice(1).toLowerCase();
    
                    if (side_elegido_UpTo == "" )
                    {
                        alert("You didnt write a valid dish.");
                        second_side_choosing();
                    }
                    else if (side_elegido_UpTo in second_side_dishes)
                    {
                        let my_third_comment = randomComment();
                        alert(`${side_elegido_UpTo} ${my_third_comment}`);
                        menu_second_dish_price = Number(second_side_dishes[side_elegido_UpTo])
                        menu_total_price += menu_second_dish_price;
                        choosing_second_side = false;
                    } else {
                        let retry2 = prompt("Sorry, we don't have that dish. Would you like to see the menu again? (Yes/No)");
                        if (retry2 !== "Yes") {
                            choosing_second_side = false;
                        }
                    }
                }
            }
        }
    
        function first_side_choosing()
        {
            let message = "Please choose your favorite dish:\n";
            for (let dish in first_side_dishes) {
                message += `${dish}: $${first_side_dishes[dish]}\n`;
            }
    
            let plato_elegido = prompt(message);
            plato_elegido_UpTo = plato_elegido.charAt(0).toUpperCase() + plato_elegido.slice(1).toLowerCase();
    
            if (plato_elegido_UpTo == "" )
            {
                alert("You didnt write a valid dish.");
                first_side_choosing();
            }
            else if (plato_elegido_UpTo in first_side_dishes)
            {
                let my_second_comment = randomComment();
                alert(`${plato_elegido_UpTo} ${my_second_comment}`);
                menu_first_dish_price = Number(first_side_dishes[plato_elegido_UpTo])
                menu_total_price += menu_first_dish_price;
                second_side_choosing();
                drink_choosing();
                let want_tips = prompt("Would you like to add some tip for our good job? (Yes/No)")
    
                if (want_tips === 'Yes') { // si dice que sí
                    tips = prompt("How much?") // preguntamos cuánto
                    menu_total_price = menu_total_price + Number(tips); // y sumamos dicho valor a nuestro menu_price
                } else { // si dice que no
                    menu_total_price = menu_total_price; // menu price queda igual
                }
            }
            else
            {
                let randomNumber = Math.floor(Math.random() * 2); // Generamos un número entero aleatorio entre 0 y 1
                if ( randomNumber === 1) { 
                    let pregunta = prompt("We dont have that dish in our menu, but we can prepare it for extra $9, do you agree? (Yes/No)")
                    {
                        if ( pregunta  === "Yes" )
                        {
                            menu_drinks[plato_elegido_UpTo] = "$9";
                            menu_first_dish_price = 9;
                            alert("Ok, perfect, it will take us 5 minuts to prepare.");
                            menu_total_price = menu_total_price + 9;
                            second_side_choosing();
                            drink_choosing();
                        }
                        else
                        {
                            let pregunta2 = prompt("Do you wanna see our menu again? (Yes/No)")
                            {
                                if (pregunta2 === "Yes")
                                {
                                    first_side_choosing();
                                }
                                else {
                                    alert("We are so sorry for no satisfy your desires.")
                                }
                            }
                        }
                    }
                }
                else {
                    let pregunta3 = prompt("Sorry, we cant prepare this kind of dish. Would you like to see our menu again? (Yes/No)");
                    if ( pregunta3 === "Yes")
                    {
                        first_side_choosing();
                    }
                    else
                    {
                        alert("We are so sorry for no satisfy your desires.")
                    }
                }
            }
    
            let order_summary = `Thank you for your order!\n Order Summary:\n`;
    
            if (plato_elegido_UpTo) {
                order_summary += ` ${plato_elegido_UpTo} - $${menu_first_dish_price}\n`;
            }
    
            if (side_elegido_UpTo) {
                order_summary += ` ${side_elegido_UpTo} - $${menu_second_dish_price}\n`;
            }
    
            if(drink_elegido_UpTo) {
                order_summary += ` ${drink_elegido_UpTo} - $${menu_drinks_price}\n`;
            }
            if(tips > 0) {
                order_summary += ` Tips: $${tips}\n`;
            }
    
            order_summary += `Total: $${menu_total_price}\n`;
    
            alert(order_summary);
            
        }
            
        first_side_choosing();
    
    }
    menu_ordering();
}

