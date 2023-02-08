<!-- <script>
    import { onMount } from "svelte";
    // import createTorrent from '../../../node_modules/create-torrent/index';
    import fs from 'fs';
    var createTorrent
    onMount(async () => {
      // const wt = await import("webtorrent/dist/webtorrent.min");
      // const magnet = await import("magnet-uri");
      createTorrent = (await import("../../../node_modules/create-torrent/index")).default;
      const uri = "magnet:?xt=urn:btih:4206F43FECD1B52CEC33BA9A1D79B326BBB1E20A&dn=SEASON%3A+A+Letter+to+the+Future+%28Build+10453490%2C+MULTi8%29+%5BFitGirl+Repack%5D&tr=udp%3A%2F%2Fopentor.net%3A6969&tr=udp%3A%2F%2Fopentor.org%3A2710&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fretracker.lanta-net.ru%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce"
      // const parsed = magnet.decode(uri)
      // console.log(parsed);

      // const WebTorrent = wt.default;
      // const client = new WebTorrent();
      // const torrentId = "magnet:?xt=urn:btih:dd8255ecdc7ca55fb0bbf81323d87062db1f6d1c&dn=Big+Buck+Bunny&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fbig-buck-bunny.torrent";
      // client.add(uri, function (torrent) {
      //   const file = torrent.files.find(function (file) {
      //     console.log(file);
      //       return file.name.endsWith(".mp4");
      //   });
        
      //   // file.appendTo("body");
      // });

      
    });
    const handleInput=async(e)=>{
      var file = e.target.files[0];
      console.log(file);
      createTorrent(file, (err, torrent) => {
        if (!err) {
          // `torrent` is a Buffer with the contents of the new .torrent file
          console.log("HEY");
          
        }else{
          console.log(err);
        }
      })
    }
  
  </script>
  
  <body>
    <p>hello world</p>

    <input type="file" on:change={handleInput} />
  </body> -->

  <script>
    import { onMount } from "svelte";
    import dragDrop from 'drag-drop'
    var client
    onMount(async()=>{
      const wt = await import("webtorrent/dist/webtorrent.min");
      const WebTorrent = wt.default;
      client = new WebTorrent();

      client.on('error', err => {
        console.error('ERROR: ' + err.message)
      })

      dragDrop(el, files => {
        console.log(files);
        client.seed(files, torrent => {
          console.log(torrent);
          console.log('Client is seeding:', torrent.magnetURI)
        })
      })
    });
    var el;
var progress = 0;
    const download=()=>{
      //this is file
      // const magnet="magnet:?xt=urn:btih:018eac9c3745971ae770017098dbcba892de2b8f&dn=Manthan+and+Kajal.mp4&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com"
      //this is folder
      // const magnet = "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent"
      const magnet = "magnet:?xt=urn:btih:b395ddc7b1a40610fba16f13dfca9e95f299be3a&dn=ISArcExtract&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com"
      client.add(magnet, onTorrent)
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
          console.log('Progress: ' + progress + '%')
        }, 5000)

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
            // console.log(links);
            // console.log('(Blob URLs only work if the file is loaded from a server. "http//localhost" works. "file://" does not.)')
            // console.log('File done.')
            // console.log('<a href="' + URL.createObjectURL(blob) + '">Download full file: ' + file.name + '</a>')
          } catch (err) {
            if (err) console.log(err.message)
          }
        }
      }

      var dataEL;
      var links=[];
  </script>

  <button on:click|preventDefault={download}>DOWNLOAD</button>

  <div class="w-full bg-gray-200 rounded-full">
    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style="width: {progress}%"> {progress}%</div>
  </div>

  <div bind:this={el} class=" h-40 bg-gray-100 m-4 flex justify-center items-center">
    <p>
      Drag and drop file to start seeding...
    </p>
  </div>

  <div class="mx-4">
    <p>Download files-</p>
    <div bind:this={dataEL}>
      {#each links as link, i}
      <a download="{link.name}" target="_blank" rel="noreferrer" href={link.downloadURL}> {link.name} </a>
      <br/>
      {/each}
    </div>
  </div>