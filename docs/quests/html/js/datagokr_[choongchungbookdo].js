let shopping_insite = document.querySelector("#check");
shopping_insite.addEventListener('click' , async (event) => {
    let url ='http://apis.data.go.kr/6430000/bioDistCompanyStatService/getbioDistCompanyStat?serviceKey=yJgnzrDPngw7nw8rHXdq2exc9xxcXlYp9knUeoaMTvMiiQipAFQsyhr9xYT2a0sr%2BR%2Bw1LLReXys9t18Q27yIA%3D%3D&currentPage=1&perPage=10';
    // let option = {};
    // let body = {
    //     "serviceKey":"yJgnzrDPngw7nw8rHXdq2exc9xxcXlYp9knUeoaMTvMiiQipAFQsyhr9xYT2a0sr%2BR%2Bw1LLReXys9t18Q27yIA%3D%3D&"
    //     ,"currentPage":"1"
    //     ,"perPage":"5"
    //   };
    // let option = {
    //     method : "GET"
    //     ,Body : JSON.stringify(body)
    // };
    try {
        let response = await fetch(url); // send
        let result = await response.json();       // response
        console.log(`response result : ${result}`) // print
        const results = result['body'];
        let animals_list = "";
            for (let animal_object of results) {
            animals_list = `${animals_list}<tr><td>${animal_object["FCLTY_NM"]}</td><td>${animal_object["MAIN_SKLL"]}</td><td>${animal_object["PRTN_SITTN"]}</td></tr>`;
            }
            let animals_elements = document.querySelector("#animals_arrays_id");
            animals_elements.innerHTML = animals_list;
    } catch (error) {
        console.log(`Error message : ${error.message}`)
    }
});
