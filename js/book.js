function calcRoute() {
	
    var strText = document.getElementById("name").value;
    var strText1 = document.getElementById("p").value;
    var strText2 = document.getElementById("location-1").value;
    var strText3 = document.getElementById("location-2").value;
    var strText4 = document.getElementById("pickupdate").value;
    var strText6 = document.getElementById("pickuptime").value;
    var strText7 = document.getElementById("cars").value;
    var strText8 = document.getElementById("ser").value;
   
    console.log("read successful");
    var result = 'Customer Name:  ' + strText + '%0APhone Number: ' + strText1 +'%0APickup Location: ' + strText2+  '%0ADrop Location: ' + strText3 + '%0APickup Date: ' + strText4 + '%0APickup Time: ' + strText6 +'%0AService: ' + strText8 + '%0ACars: ' + strText7;

        var finalMsg = encodeURI(result);
        document.getElementById("bookingForm").addEventListener("submit", (e) => {
        e.preventDefault();
        if(strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText6=="")
        {
        console.log('Fill blank Field');
        }else
        {
		fetch("https://api.telegram.org/bot1885611570:AAHMdThokECJ6rJUJ96C5RJ299qbqJf_cPc/sendMessage?chat_id=-588270493&text="+result)
			.then(response=>{
			
			if(response.status==200)
			{
				console.log("Sent Message successfully");
			    	console.log("Sent Telegram successfully");
				$(".myAlert-top").show();
				setTimeout(function(){
				$(".myAlert-top").hide();}, 5000);
				console.log("myAlert-top");
				window.location.href = "bc.html";
				
			}
			else
			{
				console.log("Sent Message unsuccessfully");
			    	console.log("Sent Telegram unsuccessfully"+response.errors.message);
			}
			 
		})  


        }

    });
    }       
   

 
