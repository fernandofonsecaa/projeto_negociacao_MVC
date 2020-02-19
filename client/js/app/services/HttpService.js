class HttpService{
    get (url){
        return new Promise((receive, reject) =>{
            let xhr = new XMLHttpRequest()
            xhr.open('GET',url)
            xhr.onreadystatechange =()=>{
                if(xhr.readyState==4){
                    if(xhr.status ==200){
                        receive(JSON.parse(xhr.responseText))
                    }else{
                         reject(xhr.responseText)
                    }
                }
            }    
            xhr.send()
        })
    }
}