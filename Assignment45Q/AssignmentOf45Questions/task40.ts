interface Album {
  artist: string;
  album: string;
  tracks?: number;
}

const make_album = (artist: string, album: string, no_of_tracks?: number) => {
  let Obj: Album = {
    artist,
    album,
    ...(no_of_tracks != null && {
      no_of_tracks,
    }),
  };
  return Obj;
};
console.log(make_album("Arjit", "AlbumName"));
console.log(make_album("Atif Aslam", "AlbumName", 10));
console.log(make_album("Adnan Dhool", "AlbumName"));
