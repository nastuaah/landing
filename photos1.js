     var images = new Array()
     images[0] = "photos/white2.png";
     images[1] = "photos/white3.png";
     images[2] = "photos/white1.png";
     setInterval("changeImage()", 5000);
     var x=0;

     function changeImage()
     {
                document.getElementById("white").src=images[x]
                x++;
                if (images.length == x)
                {
                    x = 0;
                }
     }