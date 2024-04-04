<script>
    document.addEventListener("DOMContentLoaded", function() {
    // Display date in the footer
    let currentDate = new Date();
    const date = document.querySelector(".dateTime");
    date.innerHTML = currentDate.toLocaleDateString();
    });
</script>

<footer>
<img id="logo" src="src/images/gk-logo-vertical.webp" alt="logoImage">
<p class="footerTitle">© Grandpa's Kitchen</p>
<p class="dateTime"></p>
<p>Follow Us</p>
<div class="socialMedia">
    
    <div class="facebookSVG"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 360 360" style="enable-background:new 0 0 360 360;" xml:space="preserve">
        <style type="text/css">
	        .st0{fill:none;stroke:#000000;stroke-width:15;stroke-miterlimit:10;}
	        .st1{stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
        </style>
        <circle class="st0" cx="183.7" cy="177.2" r="148.2"/>
        <path class="st1" d="M150.2,287V179.4c0-1.2-1-2.2-2.2-2.2h-18.7c-1.2,0-2.2-1-2.2-2.2v-34.1c0-1.2,1-2.2,2.2-2.2h17.5
            c0.2,0,0.3,0,0.5,0.1c0.9,0.2,4,0.6,3.6-3.5c-0.4-4.8,0-31.2,0-31.2s0.1-28.4,28.3-36.7c3.1-0.9,6.3-1.3,9.5-1.4l49.2-1.4
            c1.2,0,2.2,0.9,2.2,2.2v34.7c0,1.2-1,2.2-2.1,2.2l-19.3,0.2c-1,0-2-0.1-3-0.1c-6.7,0.1-14,0.1-13.6,14.2c0.3,10,0.3,15.1,0.2,17.5
            c-0.1,1.2,0.9,2.2,2.1,2.2l33.4,0.7c1.3,0,2.2,1.1,2.1,2.4l-3.3,34.4c-0.1,1.1-1,1.9-2.1,1.9h-30.3c-1.2,0-2.2,1-2.2,2.2V287
            c0,1.2-1,2.2-2.2,2.2h-47.5C151.2,289.1,150.2,288.2,150.2,287L150.2,287L150.2,287z"/>
    </svg>
    </div>

<div class="instagramSVG">
    <svg version="1.1" id="Layer_2_00000168088340414018453490000014688334852625064588_"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 360 360"
	 style="enable-background:new 0 0 360 360;" xml:space="preserve">
<style type="text/css">
	.st0{fill:none;stroke:#000000;stroke-width:15;stroke-miterlimit:10;}
	.st1{stroke:#000000;stroke-width:15;stroke-miterlimit:10;}
</style>
<path class="st0" d="M103.6,25.2h156.8c43.6,0,79,35.4,79,79V257c0,43.6-35.4,79-79,79H103.6c-43.6,0-79-35.4-79-79V104.2
	C24.6,60.6,60,25.2,103.6,25.2z"/>
<circle class="st0" cx="182" cy="183" r="74.1"/>
<ellipse transform="matrix(0.1602 -0.9871 0.9871 0.1602 142.9853 339.2791)" class="st1" cx="270.9" cy="85.6" rx="15.3" ry="15.3"/>
</svg>
</div>

<div class="xSVG">
    <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 360 360" style="enable-background:new 0 0 360 360;" xml:space="preserve">
<style type="text/css">
   .st0{fill:none;stroke:#000000;stroke-width:15;stroke-miterlimit:10;}
   .st1{stroke:#000000;stroke-miterlimit:10;}
</style>
<polygon class="st0" points="59.8,42.4 129.9,42.4 325.4,323.6 261.2,323.6 "/>
<line class="st0" x1="318.1" y1="37" x2="210.7" y2="158.6"/>
<polygon class="st1" points="323.4,41.6 331.8,32.4 313.7,32.5 "/>
<line class="st0" x1="170.1" y1="205.1" x2="62.6" y2="326.7"/>
<polygon class="st1" points="57.5,321.8 49,330.9 67.1,331.1 "/>
</svg>
</div>

</div>
</footer>

<style>
    footer {
        background-color: #F6E6D6;
        /* display: flex; */
        justify-content: space-between;
        margin-top: 10px;
    }
    h2{
        /* font-size: 30px; */
        color: #283D64;
        padding-left: 10px;
    }
    .socialMedia svg{
        width: 10%;
    }
    .socialMedia {
        display: flex;
        justify-content: left;
    }
    #logo {
        margin-left: 50px;
    }
    
</style>