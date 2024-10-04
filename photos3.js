     var images3 = new Array()
     images3[0] = "photos/grimerka2.png";
     images3[1] = "photos/grimerka3.png";
     images3[2] = "photos/grimerka1.png";
     setInterval("changeImage3()", 5000);
     var x3=0;

     function changeImage3()
     {
                document.getElementById("grimerka").src=images3[x3]
                x3++;
                if (images3.length == x3)
                {
                    x3 = 0;
                }
     }