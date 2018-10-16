var playlist ={
  'Lennon': 'Let is Be !'
}

function updatePlaylist(playlist,artistName,songTitle){
  
playlist.assign({},{[artistName]:songTitle})
  
}


function removeFromPlaylist(playlist,artistName){
  
  delete playlist[artistName];
  
}