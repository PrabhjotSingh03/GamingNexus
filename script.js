window.onload = form;

var gameInfo={
    genreName: "",
    setupName: ""
};


function form(){

    /*variables*/
    var formHandle = document.forms.gameForm;
    var gChoice = formHandle.genre_Choice; 
    var sChoice = formHandle.setup_Choice; 

    var header = document.getElementById("header");
    var ss = document.getElementById("slideshow");
    var forms = document.getElementById("forms");

    /* elements used for results*/
    var genreNResult = document.getElementById("result__genreName");
    var setupNResult = document.getElementById("result__setupName");
    var genreNResultac = document.getElementById("result__genreNameac");
    var setupNResultac = document.getElementById("result__setupNameac");
    var genreNResultfc = document.getElementById("result__genreNamefc");
    var setupNResultfc = document.getElementById("result__setupNamefc");
    var genreNResultwitch = document.getElementById("result__genreNamewitch");
    var setupNResultwitch = document.getElementById("result__setupNamewitch");
    var genreNResultuncharted = document.getElementById("result__genreNameuncharted");
    var setupNResultuncharted = document.getElementById("result__setupNameuncharted");
    var genreNResultTomClancy = document.getElementById("result__genreNameTomClancy");
    var setupNResultTomClancy = document.getElementById("result__setupNameTomClancy");
    /* elements used for results*/

    /*reload button*/
    var reloadBtnTomb = document.getElementById("reloadBtn-tomb");
    var reloadBtnAco = document.getElementById("reloadBtn-aco");
    var reloadBtnFc = document.getElementById("reloadBtn-fc");
    var reloadBtnWitcher = document.getElementById("reloadBtn-witcher");
    var reloadBtnUncharted = document.getElementById("reloadBtn-uncharted");
    var reloadBtnTom = document.getElementById("reloadBtn-tom");
    /*reload button*/
    /*variables*/

    function formProcess(){

        /* checking for no and default input*/
        if(gChoice.options[gChoice.selectedIndex].value === "X"){   
			gChoice.style.background = "red";
            gChoice.focus();
			return false;
		} 
        else {
            gChoice.style.background = "white";
        }

        if(sChoice.options[sChoice.selectedIndex].value === "X"){
			sChoice.style.background = "red";
            sChoice.focus();
			return false;
		} 
        else {
            sChoice.style.background = "white";
        }
         /* checking for no and default input*/

         /*if else statements for showing selecting appropriate results based on selected input*/
        if(gChoice.options[gChoice.selectedIndex].text == "Action-Adventure" && sChoice.options[sChoice.selectedIndex].text == "Jungle" ) {
           
            hide();            /*run hide function to hide the main page*/

            reloadBtnTomb.addEventListener('click', reloadPage);   /* event listener for reloading page*/
            
            /*getting input values and show on the page */
		    gameInfo.genreName = genreNResult.value;
            gameInfo.setupName = setupNResult.value;

            genreNResult.innerHTML = gChoice.options[gChoice.selectedIndex].text;
            setupNResult.innerHTML = sChoice.options[sChoice.selectedIndex].text;
            /*getting input values and show on the page */

            aajun.style.display= "block";   /*showing default hidden elements*/

            /* gallery*/
            var bigImage = document.getElementById("mainImg-tomb");

                //GET THE GALLERY IMAGES
            var image1 = document.getElementById("pic1-tomb");
            var image2 = document.getElementById("pic2-tomb");
            var image3 = document.getElementById("pic3-tomb");
            var image4 = document.getElementById("pic4-tomb");
            var image5 = document.getElementById("pic5-tomb");
            var image6 = document.getElementById("pic6-tomb");
            
                //SETUP LISTENERS FOR THE GALLERY IMAGES
            image1.onmouseover = switchPic1;
            image2.onmouseover = switchPic2;
            image3.onmouseover = switchPic3;
            image4.onmouseover = switchPic4;
            image5.onmouseover = switchPic5;
            image6.onmouseover = switchPic6;
            
                //CREATE FUNCTIONS TO CHANGE PICTURES
            function switchPic1(){
                bigImage.src = image1.src;
            }
            function switchPic2(){
                bigImage.src = image2.src;
            }
            function switchPic3(){
                bigImage.src = image3.src;
            }
            function switchPic4(){
                bigImage.src = image4.src;
            }
            function switchPic5(){
                bigImage.src = image5.src;
            }
            function switchPic6(){
                bigImage.src = image6.src;
            }
                //CREATE FUNCTION TO RESET IMAGE
            function resetPic(){
                bigImage.src = "images/tomb_raider_screenshot_3.jpg";
            }
                //RESET THE IMAGE WHEN MOUSE LEAVES
                //SETUP LISTENERS
            image1.onmouseout = resetPic;
            image2.onmouseout = resetPic;
            image3.onmouseout = resetPic;
            image4.onmouseout = resetPic;
            image5.onmouseout = resetPic;
            image6.onmouseout = resetPic;
            /* gallery*/
        }

        else if(gChoice.options[gChoice.selectedIndex].text == "Action-Adventure" && sChoice.options[sChoice.selectedIndex].text == "Open World" ) {
            
            hide(); /*run hide function to hide the main page*/

            reloadBtnAco.addEventListener('click', reloadPage);  /* event listener for reloading page*/

            /*getting input values and show on the page */
		    gameInfo.genreName = genreNResultac.value;
            gameInfo.setupName = setupNResultac.value;

            genreNResultac.innerHTML = gChoice.options[gChoice.selectedIndex].text;
            setupNResultac.innerHTML = sChoice.options[sChoice.selectedIndex].text;
            /*getting input values and show on the page */

            aaopen.style.display= "block";  /*showing default hidden elements*/

            /* gallery*/
            var bigImage = document.getElementById("mainImg-origins");

                //GET THE GALLERY IMAGES
            var image1 = document.getElementById("pic1-origins");
            var image2 = document.getElementById("pic2-origins");
            var image3 = document.getElementById("pic3-origins");
            var image4 = document.getElementById("pic4-origins");
            var image5 = document.getElementById("pic5-origins");
            var image6 = document.getElementById("pic6-origins");
            
                //SETUP LISTENERS FOR THE GALLERY IMAGES
            image1.onmouseover = switchPic1;
            image2.onmouseover = switchPic2;
            image3.onmouseover = switchPic3;
            image4.onmouseover = switchPic4;
            image5.onmouseover = switchPic5;
            image6.onmouseover = switchPic6;
            
                //CREATE FUNCTIONS TO CHANGE PICTURES
            function switchPic1(){
                bigImage.src = image1.src;
            }
            function switchPic2(){
                bigImage.src = image2.src;
            }
            function switchPic3(){
                bigImage.src = image3.src;
            }
            function switchPic4(){
                bigImage.src = image4.src;
            }
            function switchPic5(){
                bigImage.src = image5.src;
            }
            function switchPic6(){
                bigImage.src = image6.src;
            }
                //CREATE FUNCTION TO RESET IMAGE
            function resetPic(){
                bigImage.src = "images/AC_origins_screenshot_3.jpg";
            }
                //RESET THE IMAGE WHEN MOUSE LEAVES
                //SETUP LISTENERS
            image1.onmouseout = resetPic;
            image2.onmouseout = resetPic;
            image3.onmouseout = resetPic;
            image4.onmouseout = resetPic;
            image5.onmouseout = resetPic;
            image6.onmouseout = resetPic;
            /* gallery*/
        }

        else if(gChoice.options[gChoice.selectedIndex].text == "Role-playing" && sChoice.options[sChoice.selectedIndex].text == "Jungle" ) {
            
            hide(); /*run hide function to hide the main page*/
              
            reloadBtnFc.addEventListener('click', reloadPage);  /* event listener for reloading page*/

            /*getting input values and show on the page */
		    gameInfo.genreName = genreNResultfc.value;
            gameInfo.setupName = setupNResultfc.value;
            
            genreNResultfc.innerHTML = gChoice.options[gChoice.selectedIndex].text;
            setupNResultfc.innerHTML = sChoice.options[sChoice.selectedIndex].text;
            /*getting input values and show on the page */
                
            rpgjun.style.display= "block";  /*showing default hidden elements*/

            /* gallery*/
            var bigImage = document.getElementById("mainImg-farcry");

                //GET THE GALLERY IMAGES
            var image1 = document.getElementById("pic1-farcry");
            var image2 = document.getElementById("pic2-farcry");
            var image3 = document.getElementById("pic3-farcry");
            var image4 = document.getElementById("pic4-farcry");
            var image5 = document.getElementById("pic5-farcry");
            var image6 = document.getElementById("pic6-farcry");
            
                //SETUP LISTENERS FOR THE GALLERY IMAGES
            image1.onmouseover = switchPic1;
            image2.onmouseover = switchPic2;
            image3.onmouseover = switchPic3;
            image4.onmouseover = switchPic4;
            image5.onmouseover = switchPic5;
            image6.onmouseover = switchPic6;
            
                //CREATE FUNCTIONS TO CHANGE PICTURES
            function switchPic1(){
                bigImage.src = image1.src;
            }
            function switchPic2(){
                bigImage.src = image2.src;
            }
            function switchPic3(){
                bigImage.src = image3.src;
            }
            function switchPic4(){
                bigImage.src = image4.src;
            }
            function switchPic5(){
                bigImage.src = image5.src;
            }
            function switchPic6(){
                bigImage.src = image6.src;
            }
                //CREATE FUNCTION TO RESET IMAGE
            function resetPic(){
                bigImage.src = "images/Far_cry_4_screenshot_3.jpg";
            }
                //RESET THE IMAGE WHEN MOUSE LEAVES
                //SETUP LISTENERS
            image1.onmouseout = resetPic;
            image2.onmouseout = resetPic;
            image3.onmouseout = resetPic;
            image4.onmouseout = resetPic;
            image5.onmouseout = resetPic;
            image6.onmouseout = resetPic;
            /* gallery*/
        }

        else if(gChoice.options[gChoice.selectedIndex].text == "Role-playing" && sChoice.options[sChoice.selectedIndex].text == "Open World" ) {
           
            hide(); /*run hide function to hide the main page*/
                
            reloadBtnWitcher.addEventListener('click', reloadPage); /* event listener for reloading page*/

            /*getting input values and show on the page */
		    gameInfo.genreName = genreNResultwitch.value;
            gameInfo.setupName = setupNResultwitch.value;

            genreNResultwitch.innerHTML = gChoice.options[gChoice.selectedIndex].text;
            setupNResultwitch.innerHTML = sChoice.options[sChoice.selectedIndex].text;
            /*getting input values and show on the page */
                
            rpgopen.style.display= "block"; /*showing default hidden elements*/

            /* gallery*/
            var bigImage = document.getElementById("mainImg-witcher");

                //GET THE GALLERY IMAGES
            var image1 = document.getElementById("pic1-witcher");
            var image2 = document.getElementById("pic2-witcher");
            var image3 = document.getElementById("pic3-witcher");
            var image4 = document.getElementById("pic4-witcher");
            var image5 = document.getElementById("pic5-witcher");
            var image6 = document.getElementById("pic6-witcher");
            
                //SETUP LISTENERS FOR THE GALLERY IMAGES
            image1.onmouseover = switchPic1;
            image2.onmouseover = switchPic2;
            image3.onmouseover = switchPic3;
            image4.onmouseover = switchPic4;
            image5.onmouseover = switchPic5;
            image6.onmouseover = switchPic6;
            
                //CREATE FUNCTIONS TO CHANGE PICTURES
            function switchPic1(){
                bigImage.src = image1.src;
            }
            function switchPic2(){
                bigImage.src = image2.src;
            }
            function switchPic3(){
                bigImage.src = image3.src;
            }
            function switchPic4(){
                bigImage.src = image4.src;
            }
            function switchPic5(){
                bigImage.src = image5.src;
            }
            function switchPic6(){
                bigImage.src = image6.src;
            }
                //CREATE FUNCTION TO RESET IMAGE
            function resetPic(){
                bigImage.src = "images/Witcher_screenshot_3.jpg";
            }
                //RESET THE IMAGE WHEN MOUSE LEAVES
                //SETUP LISTENERS
            image1.onmouseout = resetPic;
            image2.onmouseout = resetPic;
            image3.onmouseout = resetPic;
            image4.onmouseout = resetPic;
            image5.onmouseout = resetPic;
            image6.onmouseout = resetPic;
            /* gallery*/
        }

        else if(gChoice.options[gChoice.selectedIndex].text == "Third-Person Shooter" && sChoice.options[sChoice.selectedIndex].text == "Jungle" ) {
            
            hide(); /*run hide function to hide the main page*/
                  
            reloadBtnUncharted.addEventListener('click', reloadPage);   /* event listener for reloading page*/

            /*getting input values and show on the page */
		    gameInfo.genreName = genreNResultuncharted.value;
            gameInfo.setupName = setupNResultuncharted.value;

            genreNResultuncharted.innerHTML = gChoice.options[gChoice.selectedIndex].text;
            setupNResultuncharted.innerHTML = sChoice.options[sChoice.selectedIndex].text;
            /*getting input values and show on the page */
                
            tpsjun.style.display= "block";  /*showing default hidden elements*/

            /* gallery*/
            var bigImage = document.getElementById("mainImg-uncharted");

                //GET THE GALLERY IMAGES
            var image1 = document.getElementById("pic1-uncharted");
            var image2 = document.getElementById("pic2-uncharted");
            var image3 = document.getElementById("pic3-uncharted");
            var image4 = document.getElementById("pic4-uncharted");
            var image5 = document.getElementById("pic5-uncharted");
            var image6 = document.getElementById("pic6-uncharted");
            
                //SETUP LISTENERS FOR THE GALLERY IMAGES
            image1.onmouseover = switchPic1;
            image2.onmouseover = switchPic2;
            image3.onmouseover = switchPic3;
            image4.onmouseover = switchPic4;
            image5.onmouseover = switchPic5;
            image6.onmouseover = switchPic6;
            
                //CREATE FUNCTIONS TO CHANGE PICTURES
            function switchPic1(){
                bigImage.src = image1.src;
            }
            function switchPic2(){
                bigImage.src = image2.src;
            }
            function switchPic3(){
                bigImage.src = image3.src;
            }
            function switchPic4(){
                bigImage.src = image4.src;
            }
            function switchPic5(){
                bigImage.src = image5.src;
            }
            function switchPic6(){
                bigImage.src = image6.src;
            }
                //CREATE FUNCTION TO RESET IMAGE
            function resetPic(){
                bigImage.src = "images/Uncharted_screenshot_3.jpg";
            }
                //RESET THE IMAGE WHEN MOUSE LEAVES
                //SETUP LISTENERS
            image1.onmouseout = resetPic;
            image2.onmouseout = resetPic;
            image3.onmouseout = resetPic;
            image4.onmouseout = resetPic;
            image5.onmouseout = resetPic;
            image6.onmouseout = resetPic;
            /* gallery*/
        }
        else if(gChoice.options[gChoice.selectedIndex].text == "Third-Person Shooter" && sChoice.options[sChoice.selectedIndex].text == "Open World" ) {
            
            hide(); /*run hide function to hide the main page*/
                  
            reloadBtnTom.addEventListener('click', reloadPage); /* event listener for reloading page*/

            /*getting input values and show on the page */
		    gameInfo.genreName = genreNResultTomClancy.value;
            gameInfo.setupName = setupNResultTomClancy.value;

            genreNResultTomClancy.innerHTML = gChoice.options[gChoice.selectedIndex].text;
            setupNResultTomClancy.innerHTML = sChoice.options[sChoice.selectedIndex].text;
            /*getting input values and show on the page */
                
            tpsopen.style.display= "block";     /*showing default hidden elements*/

            /* gallery*/
            var bigImage = document.getElementById("mainImg-TomClancy");

                //GET THE GALLERY IMAGES
            var image1 = document.getElementById("pic1-TomClancy");
            var image2 = document.getElementById("pic2-TomClancy");
            var image3 = document.getElementById("pic3-TomClancy");
            var image4 = document.getElementById("pic4-TomClancy");
            var image5 = document.getElementById("pic5-TomClancy");
            var image6 = document.getElementById("pic6-TomClancy");
            
                //SETUP LISTENERS FOR THE GALLERY IMAGES
            image1.onmouseover = switchPic1;
            image2.onmouseover = switchPic2;
            image3.onmouseover = switchPic3;
            image4.onmouseover = switchPic4;
            image5.onmouseover = switchPic5;
            image6.onmouseover = switchPic6;
            
                //CREATE FUNCTIONS TO CHANGE PICTURES
            function switchPic1(){
                bigImage.src = image1.src;
            }
            function switchPic2(){
                bigImage.src = image2.src;
            }
            function switchPic3(){
                bigImage.src = image3.src;
            }
            function switchPic4(){
                bigImage.src = image4.src;
            }
            function switchPic5(){
                bigImage.src = image5.src;
            }
            function switchPic6(){
                bigImage.src = image6.src;
            }
                //CREATE FUNCTION TO RESET IMAGE
            function resetPic(){
                bigImage.src = "images/Tom_Clancy_screenshot_3.jpg";
            }
                //RESET THE IMAGE WHEN MOUSE LEAVES
                //SETUP LISTENERS
            image1.onmouseout = resetPic;
            image2.onmouseout = resetPic;
            image3.onmouseout = resetPic;
            image4.onmouseout = resetPic;
            image5.onmouseout = resetPic;
            image6.onmouseout = resetPic;
            /* gallery*/
        }
        /*if else statements for showing selecting appropriate results based on selected input*/

        /*function for hiding elements*/
        function hide(){
            header.style.display = "none";
            ss.style.display = "none";
            forms.style.display = "none"; 
        }
        /*function for hiding elements*/

        /* function for reloading the page*/
        function reloadPage() {
            location.reload();
        }
        /* function for reloading the page*/

        return false;
    }
    formHandle.onsubmit = formProcess;
}