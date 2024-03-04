let currentPage = 1;
// 이전 페이지 버튼 이벤트 리스너

async function fetchPage(pageNumber) {
    let url ='http://apis.data.go.kr/6430000/bioDistCompanyStatService/getbioDistCompanyStat';
    let Params = new URLSearchParams({
        serviceKey: "yJgnzrDPngw7nw8rHXdq2exc9xxcXlYp9knUeoaMTvMiiQipAFQsyhr9xYT2a0sr+R+w1LLReXys9t18Q27yIA==",
        currentPage: currentPage.toString(),  // 현재 페이지 번호
        perPage: "5"  // 한 페이지에 보여줄 아이템의 수
    });
    url = url + "?" + Params;
    try {
        let response = await fetch(url); // send
        let result = await response.json();       // response
        console.log(`response result : ${result}`) // print
        // JSON.parse(result);
        const results = result['body'];
        let comapany_list = "";
            for (let comapany_object of results) {
            comapany_list = `${comapany_list}<tr><td>${comapany_object["FCLTY_NM"]}</td><td>${comapany_object["MAIN_SKLL"]}</td><td>${comapany_object["PRTN_SITTN"]}</td></tr>`;
            }
            let comapany_elements = document.querySelector("#company_arrays_id");
            comapany_elements.innerHTML = comapany_list;
            document.querySelector("#currentPage").innerText = currentPage.toString();
    } catch (error) {
        console.log(`Error message : ${error.message}`)
    }
};

// 조회하기 버튼 이벤트
document.querySelector("#check").addEventListener('click', () => {
    currentPage = 1;
    fetchPage(currentPage);
});

// 이전 페이지 버튼 이벤트
document.querySelector("#prevPage").addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchPage(currentPage);
    } else {
        alert('첫 페이지입니다.');
    }
});

// 다음 페이지 버튼 이벤트 
document.querySelector("#nextPage").addEventListener('click', async () => {
    let nextUrl ='http://apis.data.go.kr/6430000/bioDistCompanyStatService/getbioDistCompanyStat';
    let nextParams = new URLSearchParams({
        serviceKey: "yJgnzrDPngw7nw8rHXdq2exc9xxcXlYp9knUeoaMTvMiiQipAFQsyhr9xYT2a0sr+R+w1LLReXys9t18Q27yIA==",
        currentPage: (currentPage + 1).toString(),  // 다음 페이지 번호
        perPage: "5"  // 한 페이지에 보여줄 아이템의 수
    });

    nextUrl = nextUrl + "?" + nextParams;
    let nextResponse = await fetch(nextUrl);
    let nextResult = await nextResponse.json();
    if (nextResult['body'].length > 0) {
        currentPage++;
        fetchPage(currentPage);
    } else {
        alert('다음 페이지가 없습니다.');
    }
});
fetchPage(1) 