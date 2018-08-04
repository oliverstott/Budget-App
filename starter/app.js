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
      inputButton: '.add__btn',
      incomeContainer: '.income__list',
      expensesContainer: '.expenses__list'      
    }
    
    return {
        getInput: function(){
            return {
            type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },
        
        addListItem: function(obj, type){      
            var html, newHtml, element;
            
            if(type === "inc"){     
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === "exp"){
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }
          // Replace placeholder text with actual data
             newHtml = html.replace('%id%', obj.id);
             newHtml = newHtml.replace('%description%', obj.description);
             newHtml = newHtml.replace('%value%', obj.value);

          // insert HTML into the dom
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml); //<<<<<< This is a new function ive never used before.
        },
        
        clearFields: function(){
            var fields, fieldsArr;
              fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);  
              fieldsArr = Array.prototype.slice.call(fields);
              fieldsArr.forEach(function(current, index, array) {
                  current.value = "";
              }); 
              
              fieldsArr[0].focus();
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

   
var upateBudget = function() {
    // calculate the budget
    
    // Return the budget 
    
    // Display the budget   
         
};

    
var ctrlAddItem = function(){
    
    //Get input data
    var input, newItem;
    input = UICtrl.getInput();
    
    if(input.description !== "" && !isNaN(input.value) && input.value > 0){
       
        //Add item to budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value); 
        //display to UI controller
        UICtrl.addListItem(newItem, input.type);  

        // clear the fields 
        UICtrl.clearFields();

        // Calculate and update budget
        updateBudget();
 
        }
    };


return {
    init: function () {
        console.log('Application has started');
        setUpEventListeners();
    }
};
  

})(budgetController,UIController);

controller.init();



