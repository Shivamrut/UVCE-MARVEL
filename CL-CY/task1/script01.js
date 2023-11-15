        var str = "";
        var l = [];
        function take_input() {
            var name = document.getElementsByClassName("student");
            // alert("Name: " + name); 
            
            for(var i =0;i< name.length;i++)
            {
                str += name[i].value + " ";
                //alert(name[i].value);
            }
            alert("Names " + str);
            var marks = document.getElementsByClassName('studentMarks');
            var k = 0;
            
            for (var i = 0; i < marks.length; i++) {
                var a = marks[i];
                k +=  parseInt( a.value) ;
                if((i+1)%3==0){
                    l.push(k/3);
                    k=0;
                }
            }
            //k = k/3;
            alert("Marks: "+ l);
            give_output();
                
        }
        
        function give_output()
        {
            var name = str.split(" ");
            var avg = 0;
            for(var i = 0; i<l.length;i++)
            {
                avg += l[i];
            }
            let combine = l.map((e, i) => [e, name[i]]);
            combine.sort().reverse();
            alert(combine);

            document.getElementById('average').innerHTML = avg/10;  
            
            for(var i = 0; i <combine.length;i++)
            {
                document.getElementById('result').innerHTML += ((i+1) + " "+ combine[i][1] + " " + combine[i][0] + "<br>");
            }
           // "<table class='table table-borderline'><tr>    <th>  no  </th> </tr> <tr>     <td>  1              </td> </tr> </table>";  
        }
