
// uplode logo
var uplodBtn=document.getElementById('uplodbtn');
var imageChosen=document.getElementById('imgchosen');

uplodBtn.onchange =()=>{
    var reader= new FileReader();
    reader.readAsDataURL(uplodBtn.files[0]);
    reader.onload =() =>{
        imageChosen.setAttribute('src', reader.result);
    }
};

// Uplode singnature
var uplodBto=document.getElementById('uplodbto');
var imageChos=document.getElementById('imgchos');

uplodBto.onchange =()=>{
    var reader= new FileReader();
    reader.readAsDataURL(uplodBto.files[0]);
    reader.onload =() =>{
        imageChos.setAttribute('src', reader.result);
    }
};






// Assuming you have a table with an id 'TBody' and a button with an id 'cloneButton'
var table = document.getElementById('TBody');
var cloneButton = document.getElementById('btn');

 function storedata() {
    
    var lastRow = document.getElementById('TRow');
  var clonedRow = cloneRow(lastRow);


  // Append the cloned row to the table
  table.appendChild(clonedRow);

 
  
 


   
};




function cloneRow(row) {
  // Deep clone the row, including its descendants
  var clonedRow = row.cloneNode(true);

  // Clear the input values in the cloned row
  var inputs = clonedRow.querySelectorAll('input');
  inputs.forEach(function (input) {
    input.value = '';
  });

  return clonedRow;
}



// Calculate each row

function Calculat(v){
 
  var table = document.getElementById('TBody');
  var os = table.rows.length;
  
  for (var i = 0; i < os; i++) {
    var Cpq = document.getElementsByName('cpqq')[i].value;
    var Qty = document.getElementsByName('qtyy')[i].value;
    
    // Perform your calculation
    var tottValue = Qty * Cpq;
  

    // Set the calculated value to the element with name 'tott' in the current row
    document.getElementsByName('tott')[i].value = tottValue;
  
    getTotal();
    
  }  

}

function getTotal(){
  var table = document.getElementById('TBody');
  var rowCount = table.rows.length;
  var sum = 0;
  
  for (var i = 0; i < rowCount; i++) {
      var Total = document.getElementsByName('tott')[i].value;
      sum += parseFloat(Total) || 0; // Parse as float, default to 0 if NaN
  
      var lam = sum * 0.1; // Calculate 10% of the sum
  
      document.getElementsByName('ftotal')[0].value = sum.toFixed(2); // Set total sum with 2 decimal places
      document.getElementById('gst').innerHTML = lam.toFixed(2); // Set inner HTML of the element with ID 'gst' with 2 decimal places
 
 var get= lam + sum
 document.getElementById('alltot').innerHTML= get.toFixed(2)
 
    }
}



// clear all cloned row

function cleardata() {
 var table = document.getElementById('TBody');
  var rowCount = table.rows.length-1;

  for (var i = rowCount; i >0 ; i--) {
   var cells = document.getElementsByName('sdel');

    // Check if the NodeList has an element at the current index
    if (cells[i]) {
      cells[i].parentElement.parentElement.remove(cells[i]);
      
    }
    getTotal();

document.getElementById('sl').value="";

document.getElementById('dic').value="";

document.getElementById('qty').value="";

document.getElementById('cpq').value="";

document.getElementById('tot').value="";

document.getElementById('total').value="0.00";
document.getElementById('gst').innerHTML="0.00";
document.getElementById('alltot').innerHTML="0.00";
  }
}









