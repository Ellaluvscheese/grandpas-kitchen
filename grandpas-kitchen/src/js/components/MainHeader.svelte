<header>
    <div class="headerDiv">
        <h1>Grandpa's Kitchen</h1>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#search">Search Page</a></li>
        </ul>

        <div class="searchContainer">
            <form>
                <input class="searchBar" placeholder="what are you looking for?"> 
            </form>
            <p>🔍</p>
            
            <!-- SVG FOR SEARCH ICON-->
            <!-- <div class="searchSVG">
                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 360 360" style="enable-background:new 0 0 360 360;" xml:space="preserve">
                    <style type="text/css">
                        .st0{fill:none;stroke:#000000;stroke-width:15;stroke-miterlimit:10;}
                        .st1{stroke:#000000;stroke-miterlimit:10;}
                    </style>
                    <circle class="st0" cx="137.1" cy="137.2" r="95.9"/>
                    <line class="st0" x1="200.5" y1="209.1" x2="311.5" y2="311.6"/>
                    <path class="st1" d="M316,306.2c0,0,5.3,4.3,1.6,9.7s-10.5,1.1-10.5,1.1L316,306.2L316,306.2z"/>
                </svg>
            </div> -->
        </div>
        
        <button>Create</button>
    </div>
    
</header>

<style>
    .headerDiv {
        background-color: #F6E6D6;
        display: flex;
        justify-content: left;
    }
    h1 {
        font-size: 30px;
        color: #283D64;
        padding-left: 10px;
    }
    ul {
        display: flex;
        padding-left: 5px;
        list-style-type: none;
        margin-right: 200px;
    }
    a {
        color: #283D64;
        text-decoration: none;
        margin-top: 5px;
    }
    li {
        display: flex;
        justify-content: space-between;
        padding: 10px;  
    }
    button {
        padding: 0;
        height: 30px;
        width: 75px;
        background-color: #D15220;
        color: #F6E6D6;
        border-radius: 30px;
        margin: auto;
        margin-right: 20px;
        margin-left: 0;
        border-width: 0;
        position: absolute;
        right: 0;
        top: 32px;
    }
    #app {
        padding: 0;
    }
    .searchSVG {
        width: 3%;
        position: absolute;
        left: 920px;
        top: 32px;
    }
</style>
