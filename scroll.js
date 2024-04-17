
       
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        }
    
        
        window.onscroll = function() {remonter()};
    
        function remonter() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("scroll").style.display = "block";
            } else {
                document.getElementById("scroll").style.display = "none";
            }
        }
    