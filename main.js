// //********FUNCTION EXERCISE************/
// //functions we are going to need to be able to calculate the total cost for each order 
// //(orders can be placed at different franchises around the nation)
// //this function has all of the parameters it will need to perform it's calculation

//sales tax for each state - we'd normally use an API or have this stored in another file
const salesTax = {
    Maryland: 0.05,
    Virginia: 0.04,
    Tennessee: 0.09,
    Pennsylvania: 0.03
}

//items a customer can order at any of the BESTRESTAURANT franchises around the nation - we'd normally use an API or have this stored in another file
const bagel = {
    cost: 1.99,
    flavor: "Everything"
}

const donut = {
    cost: 0.99,
    flavor: "Chocolate frosted"
}

const coffee = {
    cost: 0.99,
    size: "Medium"
}


const calculateSalesTax = (state, subTotal) => { 
    const stateTaxRate = salesTax[state] //square bracket notation to get the object information
    return stateTaxRate * subTotal

}

const getOrderCost = (order, state) => { //takes the argument of order and state
    //you can also use the reduce array method
    let subTotal = 0 //why is this necessary?
    order.forEach(item => { //for each item in the order
        subTotal += item["cost"] //square bracket notation that takes the string and finds the object property of that name 
    })

    console.log({subTotal}) //do this just to make sure that your math is correct

    const salesTax = calculateSalesTax(state, subTotal) 
    return subTotal + salesTax 

}

//ordered in Maryland store
const order1769 = [bagel, bagel, coffee, donut] //an array of all the objects ordered for this order
//ordered in Pennsylvania store
const order2618 = [bagel, coffee, coffee, donut, donut, coffee] //an array of all the objects ordered for this order

const order1769Cost = getOrderCost(order1769, "Maryland") //because used square bracket notation, it will accept the string "Maryland" & find the object's value
const order2618Cost = getOrderCost(order2618, "Pennsylvania")


console.log(`Total cost for MD order 1769 is $${Math.round(order1769Cost * 100)/100}`)
console.log(`Total cost for PA order 2618 is $${Math.round(order2618Cost *100)/100}`)
//You can also use `.toFixed(2)` to round your total to 2 decimal places