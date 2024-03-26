<script>
    document.addEventListener("DOMContentLoaded", function() {
    // Display date in the footer
    let currentDate = new Date();
    const date = document.querySelector(".dateTime");
    date.innerHTML = currentDate.toLocaleDateString();
    });
</script>

<footer>
<img src="#" alt="logoImage">
<h2 class="footerTitle">© Grandpa's Kitchen</h2>
<p class="dateTime"></p>

<div class="socialMedia">
    <h3>Follow Us</h3>
    <img src="#" alt="Facebook Logo">
    <img src="#" alt="Instagram Logo">
    <img src="#" alt="Pinterest Logo">
</div>
</footer>

<style>
    footer {
        background-color: #F6E6D6;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
    h3, h2{
        /* font-size: 30px; */
        color: #283D64;
        padding-left: 10px;
    }
    
</style>