// Custom cookie global object to store all cookie related stuff
         function Cookie(){
             this.setCookie = function(name, value, expires, path, domain) {
                 //value MUST NOT BE encoded and expires must me of UTC/GMT format
                 var cookie = name + "=" + encodeURIComponent(value) + ";";
                 if (!!expires) {
                     cookie += "expires=" + expires + ";";
                 }
                 if (!!path) {
                     cookie += "path=" + path + ";";
                 }
                 if (domain) {
                     cookie += "domain=" + domain + ";";
                 }
                 document.cookie = cookie;
             };

             this.set = function(path, domain) {

                var expires = new Date();
                 expires.setFullYear(expires.getFullYear() + 1);
                 expires = expires.toUTCString();


                //value MUST NOT BE encoded and expires must me of UTC/GMT format
                 var cookie = "ever_visited_flat" + "=" + encodeURIComponent("YES") + ";";
                 if (!!expires) {
                     cookie += "expires=" + expires + ";";
                 }
                 if (!!path) {
                     cookie += "path=" + path + ";";
                 }
                 if (domain) {
                     cookie += "domain=" + domain + ";";
                 }
                 document.cookie = cookie;
             }

             this.getCookie = function (cname) {
                 var name = cname + "=";
                 //cookie value must alwasy be encoded with uriEncodeComponent
                 var decodedCookie = decodeURIComponent(document.cookie);
                 var ca = decodedCookie.split(';');
                 for (var i = 0; i < ca.length; i++) {
                     var c = ca[i];
                     while (c.charAt(0) == ' ') {
                         c = c.substring(1);
                     }
                     if (c.indexOf(name) == 0) {
                         return c.substring(name.length, c.length);
                     }
                 }
                 return "";
             }            

         }