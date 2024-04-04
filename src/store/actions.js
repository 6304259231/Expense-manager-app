
export function addExpense(expense){
    return {type : 'ADD_EXPENSE' , payload : expense}
 }
 
 export function deleteExpense(id){
    return {type : 'DELETE_EXPENSE' , payload : id}
 }
 
 export function editExpense(id , expense){
     return {type : 'EDIT_EXPENSE' , payload : { id , expense}}
 }
 