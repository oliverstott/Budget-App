//BUDGET CONTROLLER
var budgetController = (function (){
    //Code
})();

//UI CONTROLLER
var UIController = (function (){

    var DOMstrings = {
      inputType: '.add__type',
      inputDescription: '.add__description',
      inputValue: '.add__value',
      inputButton: '.add__btn'
    };
    
    return {
        getInput: function(){
            return {
            type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        getDOMstrings: function(){
        return DOMstrings;
    }
    
    };

})();

//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl){
   
var DOM = UICtrl.getDOMstrings();
var ctrlAddItem = function(){
    
    //Get input data
    var input = UICtrl.getInput();
    console.log(input);
    //Add item to budget controller
        
    //display to UI controller
        
    // calculate the budget
    
    // Display the budget   
         
    }
    
    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
        if(event.keycode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });

})(budgetController,UIController);





