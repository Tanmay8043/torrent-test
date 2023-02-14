<script>
    import { onMount } from "svelte";
    import path from "path-browserify";
    
    var client, createTorrent
    onMount(async()=>{
        const wt = await import("webtorrent/dist/webtorrent.min");
        const WebTorrent = wt.default;
        client = new WebTorrent();
        window.client = client
        createTorrent = await import("create-torrent")
        // console.log(upload);
    })

  function isTorrentFile (file) {
  const extname = path.extname(file.name).toLowerCase()
  return extname === '.torrent'
}

function isNotTorrentFile (file) {
  return !isTorrentFile(file)
}
var files;
async function handleUpload(e){
  console.log(files.files);
  // var files = e.target.files[0];
  // console.log(files);
  // files.filter(isTorrentFile).forEach(downloadTorrentFile)
  // client.seed(files, onTorrent)
}

function downloadTorrentFile (file) {
  console.log('Downloading torrent from ' + (file.name) )  
  client.add(file, onTorrent);
}

async function onTorrent (torrent) {
    console.log('Got torrent metadata!')
    console.log(torrent);
    console.log(
      'Torrent info hash: ' + torrent.infoHash + ' ' +
      '<a href="' + torrent.magnetURI + '" target="_blank">[Magnet URI]</a> ' +
      '<a href="' + URL.createObjectURL(torrent.torrentFileBlob) + '" target="_blank" download="' + torrent.name + '.torrent">[Download .torrent]</a>'
    )

    // Print out progress every 5 seconds
    const interval = setInterval(() => {
      progress = (torrent.progress * 100).toFixed(1);
      const speed = torrent.downloadSpeed / 1024 / 1024 | 0;
      const downloadedSize = torrent.downloaded / 1024 / 1024 | 0;
      const fullSize = torrent.length / 1024 / 1024 | 0;

      console.log('Progress: ' + progress + '%')
      console.log(torrent);
      console.log(speed, downloadedSize);
    }, 500)

    torrent.on('done', () => {
      progress = 100;
      console.log('Progress: '+progress+'%')
      clearInterval(interval)
    })

    // Render all files into to the page
    for (const file of torrent.files) {
      try {
        // console.log(file);
        const blob = await file.blob()
        // console.log(blob);
        const url = window.URL.createObjectURL(blob);
        var fileData={
          name: file.name,
          size: file.size,
          type: file.type,
          downloadURL: url
        }
        links= [...links, fileData];
        console.log('File done.')
      } catch (err) {
        if (err) console.log(err.message)
      }
    }
  }
</script>


<div class="p-4">
  <p class="text-2xl font-semibold">Upload Files-</p>
  <input bind:this={files} type="file" on:change={handleUpload} multiple>
</div>