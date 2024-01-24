// Fetch 기본 문법
// async (params) => {
//     try {
//         let response = await fetch(url, options)
//     } catch (error) {
//         console.log(`Error message : ${error.message}`)
//     }
// }

// from data.go.kr with loan rate
let rate_list = document.querySelector("#rent-loan-rate-info_rate-list");
rate_list.addEventListener('click', async (event) => {
    let url ='http://apis.data.go.kr/B551408/rent-loan-rate-info/rate-list?serviceKey=yJgnzrDPngw7nw8rHXdq2exc9xxcXlYp9knUeoaMTvMiiQipAFQsyhr9xYT2a0sr%2BR%2Bw1LLReXys9t18Q27yIA%3D%3D&pageNo=1&numOfRows=30&dataType=JSON&=';
    let options = {}; // LIKE DICTIONARY OF PYTHON 
    try {
        let response = await fetch(url, options); // send
        let result = await response.json();       // response
        console.log(`response result : ${result}`) // print
        let contents = document.querySelector("#rent-loan-rate-info_rate-list_contents");
        contents.innerHTML = result['header']['resultMsg'];
    } catch (error) {
        console.log(`Error message : ${error.message}`)
    }
});

// from datalab_shoppinginsite of Naver API
let shopping_insite = document.querySelector("#datalab_shoppinginsite");
shopping_insite.addEventListener('click' , async (event) => {
    let url ='https://openapi.naver.com/v1/datalab/shopping/categories';
    let data = {
        "startDate": "2023-08-01",
        "endDate": "2023-09-30",
        "timeUnit": "month",
        "category": [
            {"name": "패션의류", "param": [ "50000000"]},
            {"name": "화장품/미용", "param": [ "50000002"]}
        ],
        "device": "pc",
        "gender": "f",
        "ages": [ "20",  "30"]
      };
    let options = {
        method : "POST"
        ,headers : {
            "X-Naver-Client-Id" : "BOmq7WuvGENwf353WeCQ"
            ,"X-Naver-Client-Secret" : "2fqIUaIyE3"
            ,"Content-Type" : "application/json"
            ,"Content-Length" : "<calculated when request is sent>"
        } 
        , body : JSON.stringify(data)
    }; // LIKE DICTIONARY OF PYTHON 
    try {
        let response = await fetch(url, options); // send
        let result = await response.json();       // response
        console.log(`response result : ${result}`) // print
        let contents = document.querySelector("#datalab_shoppinginsite_contents");
        contents.innerHTML = result['endDate'];
    } catch (error) {
        console.log(`Error message : ${error.message}`)
    }
});
