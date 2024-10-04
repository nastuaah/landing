    var images2 = new Array()
     images2[0] = "photos/loft2.png";
     images2[1] = "photos/loft3.png";
     images2[2] = "photos/loft1.png";
     setInterval("changeImage2()", 5000);
     var x2=0;

     function changeImage2()
     {
                document.getElementById("loft").src=images2[x2]
                x2++;
                if (images2.length == x2)
                {
                    x2 = 0;
                }
     }
