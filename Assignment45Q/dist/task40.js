const make_album = (artist, album, no_of_tracks) => {
    let Obj = {
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
export {};
