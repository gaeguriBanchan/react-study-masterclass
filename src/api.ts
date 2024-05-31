const BASE_URL = 'https://api.coinpaprika.com/v1';

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

// useParams 로 받은 coinId는 타입을 (coinId: string | undefined) 로 해줄것
export function fetchCoinInfo(coinId: string | undefined) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string | undefined) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}
