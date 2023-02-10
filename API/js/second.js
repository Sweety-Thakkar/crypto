const urlid= new URL(document.location).searchParams; 
const id=urlid.get('id');

const url="https://api.coingecko.com/api/v3/coins/" + id;
async function getData() {
    const response = await fetch(url);
    var data = await response.json();
    hideLoader();
    showTable();
    var currencyData = document.getElementById("currencyData");
    currencyData.innerHTML = `<span class="badge bg-dark mb-2">Rank #${data.market_cap_rank}</span>
    <div class="d-flex align-items-center">
    <img src="${data.image.thumb}"/>
      &nbsp;<h3>${data.name}</h3>
      &nbsp;
      <span class="symbol">${data.symbol}</span>
    </div>
    <div class="d-flex align-items-center mb-2">
      <h1>$${parseFloat(data.market_data.current_price.usd).toLocaleString(
        "en-US"
      )}</h1>
      &nbsp;<span><i class="bi bi-caret-up-fill"></i>${data.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
        1
      )}%</span>
    </div>
    <button type="button" class="btn btn-outline-dark">
      <i class="bi bi-arrow-90deg-right"></i>
    </button>
    <button type="button" class="btn btn-outline-dark">
      <i class="bi bi-bell"></i>
    </button>
    <button type="button" class="btn btn-outline-dark">
      <i class="bi bi-star"></i>
    </button>
    
    <div class="row mt-3">
      <div class="col-lg-6">
        <table class="table">
          <tbody>
            <tr class="">
              <td scope="row" class="align-middle">Market Cap&nbsp;<i class="bi bi-question-circle"></i></td>
              <td class="align-middle text-end">$${parseFloat(
                data.market_data.market_cap.usd
              ).toLocaleString("en-US")}</td>
            </tr>
            <tr class="">
              <td scope="row" class="align-middle">24 Hour Trading Vol&nbsp;<i class="bi bi-question-circle"></i></td>
              <td class="align-middle text-end">$${parseFloat(
                data.market_data.total_volume.usd
              ).toLocaleString("en-US")}</td>
            </tr>
            <tr class="">
              <td scope="row" class="align-middle">Fully Diluted Valuation&nbsp;<i class="bi bi-question-circle"></i></td>
              <td class="align-middle text-end">$${parseFloat(
                data.market_data.fully_diluted_valuation.usd
              ).toLocaleString("en-US")}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="col-lg-6">
        <table class="table">
          <tbody>
            <tr class="">
              <td scope="row" class="align-middle">Circulating Supply&nbsp;<i class="bi bi-question-circle"></i></td>
              <td class="align-middle text-end">$${parseFloat(
                data.market_data.circulating_supply
              ).toLocaleString("en-US")}</td>
            </tr>
            <tr class="">
              <td scope="row" class="align-middle">Total Supply&nbsp;<i class="bi bi-question-circle"></i></td>
              <td class="align-middle text-end">$${parseFloat(
                data.market_data.total_supply
              ).toLocaleString("en-US")}</td>
            </tr>
            <tr class="">
              <td scope="row" class="align-middle">Max Supply&nbsp;<i class="bi bi-question-circle"></i></td>
              <td class="align-middle text-end">$${parseFloat(
                data.market_data.max_supply
              ).toLocaleString("en-US")}</td>
            </tr>
          </tbody>
        </table>
    
      </div>
    </div>`;
    console.log(data);
  } 

function hideLoader() {
    document.getElementById("loading").style.display = "none";
  }
  
  function showTable() {
    document.getElementById("currencyData").style.display = "block";
  }
  getData();
  