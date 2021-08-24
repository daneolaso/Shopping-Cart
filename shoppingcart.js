console.log('i am working!!!');


const shoppingCart = document.querySelector('#shoppingCart')
const cart = document.querySelector('#cart')


shoppingCart.addEventListener('submit', function (e) {
    e.preventDefault(); // <-- prevent default action: re-routing data to a new url
    
    
    // const itemInput = document.querySelectorAll('input')[0];
    // const qtyInput = document.querySelectorAll('input')[1];

    console.log(shoppingCart.elements.itemName.value)
    console.log(shoppingCart.elements.qty.value)

                // finally append new item to orginal cart on HTML
    addItem()

    shoppingCart.elements.itemName.value = ''
    shoppingCart.elements.qty.value = ''

})

function addItem () {
    const itemInput  = shoppingCart.elements.itemName.value
    const qtyInput   = shoppingCart.elements.qty.value

    const newItem = document.createElement('li')    // create a li ~ Listed Item
    const boldTag = document.createElement('b')     // create a bold text
    boldTag.append(itemInput)                       // add/append ItemInput's value to the bold text 
    newItem.append(boldTag)                         // add/append bold text to the new item
    newItem.append(`- ${qtyInput}`)                  // add/append qty to new item

    cart.append(newItem)            
}

    //save list as an array
    //can remove indivdual indexs of the array
    //can re-order index of the array with drag and drop
    //can change the qty of the index of the array
    //  - probably means there needs to be 2 lists
    //  - event then when click on qty, input text appears
    //  - enter value
    //  - set a restriction for numerical value
    //  -  saves value / updates existing value (html)