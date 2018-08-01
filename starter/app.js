//BUDGET CONTROLLER
var budgetController = (function (){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value= value;
    };
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
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
    
    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            
            //  create new id
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
               } else {
                   ID = 0;
               }
            
            //create new item based on inc or exp type
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);

            } else if (type === 'inc'){
                newItem = new Income(ID, des, val);
            }
            
            //push it into our data structure
            data.allItems[type].push(newItem);
            
            //return the new element
            return newItem;
        }
        
    }

})(); //End of budgetController IIFE

//UI CONTROLLER
var UIController = (function (){

    var DOMstrings = {
      inputType: '.add__type',
      inputDescription: '.add__description',
      inputValue: '.add__value',
      inputButton: '.add__btn'
    }
    
    return {
        getInput: function(){
            return {
            type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
            };
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
    var input, newItem;
    
    input = UICtrl.getInput();
    
    //Add item to budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);    
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



