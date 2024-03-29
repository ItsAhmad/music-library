const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


printPlaylists: function () {
for (let playlistKey in this.playlists) {
    let playlist = this.playlists[playlistKey];
    let playlistNumber = playlist.id;
    let playlistName = playlist.name;
    let playlistTracks = playlist.tracks.length;

    console.log(`${playlistNumber}: ${playlistName} - ${playlistTracks} tracks`);
  }
},

printTracks: function () {

  for (let trackKey in this.tracks) {
    let track = this.tracks[trackKey];
    let trackNumber = track.id;
    let trackName = track.name;
    let trackArtist = track.artist;
    let trackAlbum = track.album;
  
  
    console.log(`${trackNumber}: ${trackName} by ${trackArtist} (${trackAlbum})`)
  }
},

printPlaylist: function (playlistId) {
    
  let playlist = this.playlists[playlistId];
  let playlistNumber = playlist.id;
  let playlistName = playlist.name;
  let playlistTracks = playlist.tracks.length;

  console.log(`${playlistNumber}: ${playlistName} - ${playlistTracks} tracks`);

  console.log('-------')

    for (let trackId of playlist.tracks) {
      let track = this.tracks[trackId];

      if (track) {
        let trackNumber = track.id;
        let trackName = track.name;
        let trackArtist = track.artist;
        let trackAlbum = track.album;

        console.log(`${trackNumber}: ${trackName} by ${trackArtist} (${trackAlbum})`);
      } else {
        console.log("Track not found")
      }
    }; 
    console.log('-----')
}, 

addTrackToPlaylist: function (trackId, playlistId) {
  let playlist = this.playlists[playlistId];

  if (!playlist.tracks.includes(trackId)) {
    playlist.tracks.push(trackId);
}
}, 

generateUid: function () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}, 

addTrack: function (name, artist, album) {
  let trackId = generateUid();
  let trackName = name;
  let trackArtist = artist;
  let trackAlbum = album;

  if (this.tracks[trackId]) {
    console.log("This track already exists!")
    return;
  }

  this.tracks[trackId] = {
    id: trackId,
    name: trackName,
    artist: trackArtist,
    album: trackAlbum,
  }

  console.log(`${trackId} has been added to the library.`)

}, 

addPlaylist: function (name) {
  let playlistId = generateUid();
  let playlistName = name
  let trackIds = generateUid();

  this.playlists[playlistId] = {
    id: playlistId,
    name: playlistName,
    tracks: trackIds
  }

}

};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {

  for (let playlistKey in library.playlists) {
    let playlist = library.playlists[playlistKey];
    let playlistNumber = playlist.id;
    let playlistName = playlist.name;
    let playlistTracks = playlist.tracks.length;

    console.log(`${playlistNumber}: ${playlistName} - ${playlistTracks} tracks`);
  }

};


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {

for (let trackKey in library.tracks) {
  let track = library.tracks[trackKey];
  let trackNumber = track.id;
  let trackName = track.name;
  let trackArtist = track.artist;
  let trackAlbum = track.album;


  console.log(`${trackNumber}: ${trackName} by ${trackArtist} (${trackAlbum})`)
}


}; 


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
    
  let playlist = library.playlists[playlistId];
  let playlistNumber = playlist.id;
  let playlistName = playlist.name;
  let playlistTracks = playlist.tracks.length;

  console.log(`${playlistNumber}: ${playlistName} - ${playlistTracks} tracks`);

  console.log('-------')

    for (let trackId of playlist.tracks) {
      let track = library.tracks[trackId];

      if (track) {
        let trackNumber = track.id;
        let trackName = track.name;
        let trackArtist = track.artist;
        let trackAlbum = track.album;

        console.log(`${trackNumber}: ${trackName} by ${trackArtist} (${trackAlbum})`);
      } else {
        console.log("Track not found")
      }

      

    }; 
    console.log('-----')

}

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  let playlist = library.playlists[playlistId];

  if (!playlist.tracks.includes(trackId)) {
    playlist.tracks.push(trackId);
}
}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  let trackId = generateUid();
  let trackName = name;
  let trackArtist = artist;
  let trackAlbum = album;

  if (library.tracks[trackId]) {
    console.log("This track already exists!")
    return;
  }

  library.tracks[trackId] = {
    id: trackId,
    name: trackName,
    artist: trackArtist,
    album: trackAlbum,
  }

  console.log(`${trackId} has been added to the library.`)

}

// adds a playlist to the library
const addPlaylist = function(name) {
  let playlistId = generateUid();
  let playlistName = name
  let trackIds = generateUid();

  library.playlists[playlistId] = {
    id: playlistId,
    name: playlistName,
    tracks: trackIds
  }

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}