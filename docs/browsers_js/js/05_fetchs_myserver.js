// https://github.com/yojulab/learn_fastapis/blob/main/routes/events_api.py
let rate_list = document.querySelector("#retrieve_all_events");
rate_list.addEventListener('click', async (event) => {
    let url = `http://192.168.10.236:8000/user_api_router/` ;
    let options = {}; // python dict 유사
    try {
        let response = await fetch(url, options);   // send
        const result = await response.json(); // 응답
        console.log(`response result : ${result}`)
        // let contents = document.querySelector("#retrieve_all_events_contents");
        const results = result['user_datas'];
        let users_list = "";
            for (let user_object of results) {
            users_list = `${users_list}<tr><td>${user_object["_id"]}</td><td>${user_object["name"]}</td><td>${user_object["email"]}</td><td>${user_object["manager"]}</td><td>${user_object["sellist1"]}</td><td>${user_object["text"]}</td></tr>`;
            }
            let users_elements = document.querySelector("#retrieve_all_events_contents");
            users_elements.innerHTML = users_list;
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});
// update_event_withjson
let shopping_insite = document.querySelector("#update_event_withjson");
shopping_insite.addEventListener('click', async (event) => {
    let _id = event.target.value; // textContent
    _id = `65974f1dc5cd3d08cca7d951`;
    let url = `http://192.168.10.236:8000/user_api_router/${_id}` ;
    let data = {
        "name": "김덕재",
        "email": "kdj0712@google.com",
        "pswd": "abcdefg",
        "manager": "on",
        "sellist1": "Option3",
        "text": "만나서 반갑습니다.잘 부탁해요, 이제 집에 갑시다"
    }
    let options = {
        method : "PUT"
        // , mode: "no-cors" // no-cors, *cors, same-origin
        , headers : {
            "Content-Type" : "application/json"
        }
        , body : JSON.stringify(data)
    }; // python dict 유사
    try {
        let response = await fetch(url, options);   // send
        let result = await response.json(); // 응답
        console.log(`response result : ${result}`)
        // let contents = document.querySelector("#update_event_withjson_contents");
        // contents.innerHTML = result;
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});