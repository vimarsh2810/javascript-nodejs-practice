console.log('Start')

function loginUser(email, password, callback){
  setTimeout(() => {
    console.log('We havae the data');
    callback({username: email});
  }, 2000);
}

function getVideos(email, callback) {
  setTimeout( () => {
    callback(['video1','video2','video3']);
  }, 1000 );
}

function videoDetails(video, callback) {
  setTimeout( () => {
    callback('Video title');
  }, 1000 );
}


const user = loginUser('vimarsh@gmail.com', 123456, (user) => {
  console.log(user);
  getVideos(user.username, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (title) => {
      console.log(title);
    });
  });
} );

console.log('End')