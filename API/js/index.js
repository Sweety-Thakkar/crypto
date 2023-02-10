const url = "https://api.coingecko.com/api/v3/coins/" ;
async function getapi() {
var tbody = document.getElementById("tbody");
const response = await fetch(url);
var data = await response.json();

console.log()

    hideloader();
    showdata() ;
    data.forEach(function (value, i){
      let p1h = "text-danger"; 
      let p_24h = "text-danger";
      let p_7D = "text-danger";
      if(parseFloat(value.market_data.price_change_percentage_1h_in_currency.usd) > 0)
      {
            p1h = "text-success";
      }
      if(parseFloat(value.market_data.price_change_percentage_24h_in_currency.usd) > 0)
      {
            p_24h = "text-success";
      }
      if(parseFloat(value.market_data.price_change_percentage_7d_in_currency.usd) > 0)
      {
           p_7D = "text-success";
      }
   
 tbody.innerHTML += `<tr onclick="showTData('${value.id}')">
            
 <td ><i class="bi bi-star me-2" onclick="fav('${
      value.id
    }')" id="${value.id}"></i>${value.market_data.market_cap_rank}</td>
    <th ><img src="${
      value.image.thumb
    }"> ${value.name} <sup>${value.symbol}</sup></th>
    <td >$${parseFloat(
      value.market_data.current_price.usd
    ).toLocaleString("en-US")}</td>
    <td class="align-middle ${p1h}">${value.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}&#37</td>
      <td class="align-middle ${p_24h} ">${value.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}&#37</td>
       <td class="align-middle ${p_7D}">${value.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}&#37</td>
    <td >$${parseFloat(
      value.market_data.total_volume.usd
    ).toLocaleString("en-US")}</td>
    <td >$${parseFloat(
      value.market_data.market_cap.usd
    ).toLocaleString("en-US")}</td>
    </tr>`;
    });
   
}
  

   function hideloader() {
                document.getElementById("loading").style.display = "none";
    }
    function showdata() {
                document.getElementById("listTable").style.display = "block";
    }
    function showTData(id) {
  window.location.href = "second.html?id=" + id;
}

    getapi();