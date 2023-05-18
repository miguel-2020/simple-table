const logBtn = document.querySelector(".logBtn");
    const findBtn = document.querySelector(".find");
    const table = document.querySelector("table");
    const paragraph = document.querySelector(".details");
    const paragraphExpensive = document.querySelector(".mostExpensive");

    logBtn.addEventListener('click', handleLog);

    findBtn.addEventListener('click', findExpensiveRoom);
    // Function
    function handleLog() {
      var answer = prompt("Please pick a column from 1 to 4: ");
      paragraph.innerHTML = ""

      if (answer == null) {
        return;
      }

      try {
        if (answer.length == 0) {
          throw new Error("You must enter a value or just hit cancel")
        }


        answer = parseInt(answer);

        if (answer < 1 || answer > 4) {
          throw new Error("you can only enter a number between 1 and 4.")
        }


      let columnInfo = getColumnData(answer);
      
      paragraph.innerHTML = `This is what I found for ${columnInfo[0]}: ${columnInfo.slice(1,).toString()}`


      } catch (err) {
        alert(err.message);
        handleLog();
      }
    }


    function findExpensiveRoom(){
     
     let numnerOfRows = table.rows.length;

     let rate = 0;
     let price = 0;
     let type;
     let area;
     
     for (let row = 1; row < numnerOfRows; row++) {
      
      // type, area, and rate
       price = parseInt(table.rows[row].cells[3].innerHTML);
       
       
      if(rate < price){
        rate = price;
        type = table.rows[row].cells[1].innerHTML
       area = table.rows[row].cells[2].innerHTML
      }
       
     }


    

     paragraphExpensive.innerHTML = `Here is the most expensive room:<br>Room Type: ${type}<br>Area: ${area} Sq.Ft.<br>Rate:${rate} dollars.`
   }

    function getColumnData(query){
      
     
      let numnerOfRows = table.rows.length;
      const results = [];
      for (let row = 0; row < numnerOfRows; row++) {
       
        results.push(table.rows[row].cells[query -1].innerHTML);
        
      }



      return results;
    }