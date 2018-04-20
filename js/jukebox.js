/*eslint-env browser*/

var Jukebox = function () {
    "use strict";
    var albums = [], self;
    
    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = -1, fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};

var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return artist + " : " + title + ". The album has been played " + this.played + " times.";
        }
    };
    return self;
};

var jbox = new Jukebox();
/*var album1 = new Album("Operation Ivy", "Energy");
var album2 = new Album("Blink 182", "Dude Ranch");
var album3 = new Album("New Found Glory", "Sticks and Stones");*/

var albumList = ["one", "two", "three"];
var albumsNew = [];
for (i = 0; i < albumList.length; i += 1) {
    albumsNew[i] = new Album(albumList[i]);
}

var i;
window.console.log(albumsNew);

window.addEventListener("load", function () {
    "use strict";
    for (i = 0; i < albumList.length; i += 1) {
        //window.console.log(albumList[i]);
        var optionNode = window.document.createElement("option"), optionText = window.document.createTextNode(albumList[i]);
        optionNode.appendChild(optionText);
       
        window.document.getElementsByTagName("option").className = "alb";
        window.document.getElementById("albumOptions").appendChild(optionNode);
    }
});


/*jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);*/

jbox.addAlbum(albumsNew);

/*album1.play();
album1.play();
album1.play();
album2.play();
album3.play();*/


//???
window.document.getElementById("playAlbum").addEventListener("click", function () {
    "use strict";
    
});

/*window.console.log("You favorite album is: " + jbox.favoriteAlbum());*/