function adduser() {

    user_name = document.getElementById("user_name").Value;
    localStorage.setItem("user_name",user_name);
    window.Location = "kwitter_room.html"
    
    }
    function 