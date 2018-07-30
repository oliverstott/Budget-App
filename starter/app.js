//BUDGET CONTROLLER
var budgetController = (function (){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = descriptionl
        this.value= value;
    };
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = descriptionl
        this.value= value;
    };
    
    
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
           exp: 0,
           inc: 0 
        }
        
    };

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

    var setUpEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event){
    if(event.keycode === 13 || event.which === 13){
        ctrlAddItem();
        }
    });
};

   
var ctrlAddItem = function(){
    
    //Get input data
    var input = UICtrl.getInput();
    console.log(input);
    //Add item to budget controller
        
    //display to UI controller
        
    // calculate the budget
    
    // Display the budget   
         
    }
    
return {
    init: function () {
        console.log('Application has started');
        setUpEventListeners();
    }
};
  

})(budgetController,UIController);

controller.init();



