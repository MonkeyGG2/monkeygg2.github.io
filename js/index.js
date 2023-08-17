function makeclone(){
    if((window.top.location.href!="about:blank")){
        var url = window.location.href;
        win = window.open();
        if(!win || win.closed || typeof win.closed=='undefined') { 
            alert('Please allow Pop-Ups - By disabling popups, you allow this website to show up in your history.');
        }else{
            win.document.body.style.margin = "0";
            win.document.body.style.height = "100vh";
            var iframe = win.document.createElement("iframe");
            iframe.style.border = "none";
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.margin = "0";
            iframe.referrerpolicy = "no-referrer";
            iframe.allow = "fullscreen";
            iframe.src = url.toString();
            win.document.body.appendChild(iframe);
            window.location.replace("https://drive.google.com");
        }
    }
}
