<script>
    import Peer from 'simple-peer'

    if (Peer.WEBRTC_SUPPORT) {
        console.log("kk");
    } else {
        console.log("dd");
    }
</script>