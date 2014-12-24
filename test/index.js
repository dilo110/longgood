 	$(document).ready(function(){
 		//read datarow
		
		
        $.ajax({
            url:"readDataRow.php",
            type:"post",
            datatype:'json'
        }).done(function(datareturn){
			
			//alert(datareturn);
            var obj = $.parseJSON(datareturn);
           
            var count=Object.keys(obj).length;
			
			$('.heartValue').text(obj["A"]["HeartBeat"]);
			$('.lungValue').text(obj["B"]["Breath"])
			/*
			$.each(obj, function(idx, obj2) {
				alert(obj2.Breath);
			});
             */
			//buttonx
			//alert(count=Object.keys(obj["A"]).length);
			
			for(i=1;i<13;i++){
				
				var index=".data"+i;
				
				var section= $(index).attr('id');
				
				if(((obj["A"][section]+obj["B"][section]+obj["C"][section])/3)>obj["A"][section]){
					//alert(((obj["A"][section]+obj["B"][section]+obj["C"][section])/3));
					$(index).css('background','#CA391B');
					//$().stop(true,false).animate({height: average+"%"},600);
				}
				
			}
		
		function draw(){
			//alert("TEST");
			var section= $(this).attr('id');
			var average=(obj["A"][section]+obj["B"][section]+obj["C"][section])/3;
			$('.sectionName').text(section+"之分數");
			if(average>obj["A"][section]){
				$('.userA').css('background','#CA391B');
				}
			else{
				$('.userA').css('background','#15823B');
				}	
			$('.userA').stop(true,false).animate({height: obj["A"][section]+"%"},600);
			$('.userA').text(obj["A"][section]);
			$('.average').stop(true,false).animate({height: average+"%"},600);
			$('.average').text(average);
       /*
            var no= $(this).parent().attr('value');

       			var sum=$('h2.sum').attr('value'); 
        $.ajax({
            url:"deletedata.php",
            type:"post",
            datatype:'json',
            data:{ no:no,
                   sum: sum}
            }).done(function(sum_return){
                var obj = $.parseJSON(sum_return);
            
                $('.sum').text("總金額： "+obj["sum"]+"  元");
            
             
            
            //error: function(){alert("X");}*/
			}
		
		$('.buttonx').bind('click',draw); 
			
		$(".buttonx").hover(function(){   
        $(this).stop(true,false).animate({width:"30px",height: "30px"},500);
        },function(){
             $(this).stop(true,false).animate({width:"20px",height: "20px"},300);        
        });
			
			
            //error: function(){alert("X");}
        });
		
 		
 	});