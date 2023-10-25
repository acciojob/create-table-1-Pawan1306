function insert_Row() {
    
        // Get a reference to the table
        var table = document.getElementById("sampleTable");

        // Create a new row
        var newRow = table.insertRow();

        // Insert two cells in the new row
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        // Set the content for the new cells (you can change this to your desired content)
        cell1.innerHTML = "New cell1";
        cell2.innerHTML = "New cell2";
      }
   
  
  

