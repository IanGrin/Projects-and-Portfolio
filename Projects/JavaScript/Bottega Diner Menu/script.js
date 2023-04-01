const dinnerMenu = {
    hamburger: {
        name: "Bacon Double Cheeseburger",
        cost: 7.99
    },

    curry: {
        name: "Green Curry",
        cost: 8.99
    },

    friedRice: {
        name: "Fried Rice",
        cost: 5.99
    }

};

const sideMenu = {
    fries: {
        name: "Garlic French Fries",
        cost: 5.99
    },

    salad: {
        name: "Thai Salad",
        cost: 3.99
    },

    milkshake: {
        name: "Hot Fudge Shake",
        cost: 3.99
    }
}

const welcome = () => {
    alert("Take a look at our menu! What can I get started for you?")
    alert(`
    Menu
    Entree's  ${dinnerMenu.hamburger.name}, Cost: $${dinnerMenu.hamburger.cost}.
                    ${dinnerMenu.curry.name}, Cost: $${dinnerMenu.curry.cost}.
                    ${dinnerMenu.friedRice.name}, Cost: $${dinnerMenu.friedRice.cost}.
    Side's      ${sideMenu.fries.name}, Cost $${sideMenu.fries.cost}.
                    ${sideMenu.salad.name}, Cost $${sideMenu.salad.cost}.
                    ${sideMenu.milkshake.name}, Cost $${sideMenu.milkshake.cost}.
    `);
};

let entree;
let side1;
let side2;
let price;
let entreePrice;
let side1Price;
let side2Price;

const order = () => {
    orderEntree();
    orderSides();
    confirmOrder();
}

const orderEntree = () => {
    entree = prompt(`What would you like for your main dish?
    (Hamburger, Curry, or Friedrice)

    ${dinnerMenu.hamburger.name}, Cost: $${dinnerMenu.hamburger.cost}.
    ${dinnerMenu.curry.name}, Cost: $${dinnerMenu.curry.cost}.
    ${dinnerMenu.friedRice.name}, Cost: $${dinnerMenu.friedRice.cost}.
    `).toUpperCase();
    if (entree === "HAMBURGER") {
        let confirmEntree = prompt(`The${dinnerMenu.hamburger.name} will be $${dinnerMenu.hamburger.cost}. Would you like the Hamburger entree?`).toString().toUpperCase();
        if (confirmEntree === "YES") { alert("That's a Great Choice!"); }
        else { orderEntree(); }
    } else if (entree === "CURRY") {
        let confirmEntree = prompt(`The${dinnerMenu.curry.name} will be $${dinnerMenu.curry.name}. Would you like the Curry entree?`).toString().toUpperCase();
        if (confirmEntree === "YES") { alert("That's a Great Choice!"); }
        else { orderEntree(); }
    } else if (entree === "FRIEDRICE") {
        let confirmEntree = prompt(`the${dinnerMenu.friedRice.name} will be $${dinnerMenu.friedRice.name}. Would you like the Fried Rice entree?`).toString().toUpperCase();
        if (confirmEntree === "YES") { alert("That's a Great Choice!"); }
        else { orderEntree(); }
    } else { 
        alert("I'm sorry, what can I make for you?")
        orderEntree(); 
    }
}

const orderSides = () => {
    orderSide1();
    orderSide2();
}

const orderSide1 = () => {
    side1 = prompt(`What can I get you for your first side?
    (Fries, Salad, Milkshake?)

    ${sideMenu.fries.name}, Cost: $${sideMenu.fries.cost}.
    ${sideMenu.salad.name}, Cost: $${sideMenu.salad.cost}.
    ${sideMenu.milkshake.name}, Cost: $${sideMenu.milkshake.cost}.
    `).toUpperCase();
    if (side1 === "FRIES") {
        let confirmSide1 = prompt(`The${sideMenu.fries.name} will be $${sideMenu.fries.name}. Would you like the Fries to go with your Entree?`).toString().toUpperCase();
        if (confirmSide1 === "YES") { alert("That's a Delicious Choice!"); }
        else { orderSide1(); }
    } else if (side1 === "SALAD") {
        let confirmSide1 = prompt(`The${sideMenu.salad.name} will be $${sideMenu.salad.cost}. Would you like the Salad to go with your Entree?`).toString().toUpperCase();
        if (confirmSide1 === "YES") { alert("That's a Delicious Choice!") }
        else { orderSide1(); }
    } else if (side1 === "MILKSHAKE") {
        let confirmSide1 = prompt(`The${sideMenu.milkshake.name} will be $${sideMenu.milkshake.name}. Would you like a Milkshake to go with your Entree?`).toString().toUpperCase();
        if (confirmSide1 === "YES") { alert("That's a Delicious Choice!") }
        else { orderSide1(); }
    } else { alert("I'm sorry, what else can I make for you?") }
}

const orderSide2 = () => {
    side2 = prompt(`What can I get you for your first side?
    (Fries, Salad, Milkshake?)

    ${sideMenu.fries.name}, Cost: $${sideMenu.fries.cost}.
    ${sideMenu.salad.name}, Cost: $${sideMenu.salad.cost}.
    ${sideMenu.milkshake.name}, Cost: $${sideMenu.milkshake.cost}.
    `).toUpperCase();
    if (side2 === "FRIES") {
        let confirmSide2 = prompt(`The${sideMenu.fries.name} will be $${sideMenu.fries.cost}. Would you like the Fries for your second choice side?`).toString().toUpperCase();
        if (confirmSide2 === "YES") { alert("What a Wonderful Second Choice!") }
        else { orderSide2(); }
    } else if (side2 === "SALAD") {
        let confirmSide2 = prompt(`The${sideMenu.salad.name} will be $${sideMenu.salad.cost}. Would you like the Salad for your second choice side?`).toString().toUpperCase();
        if (confirmSide2 === "YES") { alert("What a Wonderful Second Choice!") }
        else { orderSide2(); }
    } else if (side2 === "MILKSHAKE") {
        let confirmSide2 = prompt(`The${sideMenu.milkshake.name} will be $${sideMenu.milkshake.cost}. Would you like the Milkshake as your second choice side?`).toString().toUpperCase();
        if (confirmSide2 === "YES") { alert("What a Wonderful Second Choice!") }
        else { orderSide2(); }
    } else { alert("I'm sorry, What else can I make for you?") }
}

const confirmOrder = () => {
    let orderConfirm = prompt(`We have your order of ${entree} for your Entree and for the two sides we have ${side1} and ${side2}.`).toString().toUpperCase();
    if (orderConfirm === "YES") { 
        alert("Your order will be out shortly!") 
    } else if ( orderConfirm === "NO") { 
        changeOrder(); 
    } else { alert("Sorry, Could you please repeat that?") 
             confirmOrder();
    }
}

const changeOrder = () => {
    let wrongOrder = prompt(`What can I change for you? your Entree? or either one of your two Sides?`).toString().toUpperCase();
    if (wrongOrder === "ENTREE") { 
        orderEntree(); 
        confirmOrder();
    } else if (wrongOrder === "SIDES") {
        orderSides();
        confirmOrder();
    } else { 
        alert("Sorry, Could you please repeat that?")
        changeOrder();
    }
}

const checkout = () => {
    if (entree === "HAMBURGER") {
        entreePrice = dinnerMenu.hamburger.cost;
    } else if (entree === "CURRY") {
        entreePrice = dinnerMenu.curry.cost;
    } else if (entree === "FRIEDRICE") {
        entreePrice = dinnerMenu.friedRice.cost;
    }

    if (side1 === "FRIES") {
        side1Price = sideMenu.fries.cost;
    } else if (side1 === "SALAD") {
        side1Price = sideMenu.salad.cost;
    } else if (side1 === "MILKSHAKE") {
        side1Price = sideMenu.milkshake.cost;
    }

    if (side2 === "FRIES") {
        side2 = sideMenu.fries.cost;
    } else if (side2 === "SALAD") {
        side2 = sideMenu.salad.cost;
    } else if (side2 === "MILKSHAKE") {
        side2 = sideMenu.milkshake.cost;
    }
    total = parseFloat( entreePrice + side1Price +side2Price).toFixed(2);
    alert(`Your total today is ${total}. Thanks for dining with us and have a great day!`)
}

dinner = () => {
    welcome();
    order();
    checkout();
}

dinner();

console.log(`Customer wants ${entree} for the entree and the ${side1} and ${side2} for their two sides.`)