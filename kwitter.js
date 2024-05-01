function adduser(){
    username=document.getElementById("User_Name").value ;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
}
