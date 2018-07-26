//BUDGET CONTROLLER
var budgetController = (function (){
    //Code
})();

//UI CONTROLLER
var UIController = (function (){
    //Code
})();

//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl){
   
        
var ctrlAddItem = function(){
    
    //Get input data
        
    //Add item to budget controller
        
    //display to UI controller
        
    // calculate the budget
    
    // Display the budget   
        
    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
        if(event.keycode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });

})(budgetController,UIController);





