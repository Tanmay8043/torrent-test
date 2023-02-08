<script>
    async function getRequest() {
        const response = await fetch('/endppo');
        console.log(response);
    }
    
    var userId=0, title="", body="";
    async function postRequest(){
        console.log(userId, body, title);
        const response = await fetch("/endppo",{
            method:"POST",
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId
            }),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        });

        const data = await response.json();
        console.log(data);
    }
</script>

<button on:click={getRequest} >GET request</button>

<hr/>

<input type="number" bind:value={userId}>
<input type="text" bind:value={title}>
<input type="text" bind:value={body}>

<button on:click={postRequest}>POST request</button>