import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { fetchCoinHistory } from '../api';
import { useQuery } from 'react-query';

interface IChartProps {
  coinId: string;
}

interface IHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

export default function Chart() {
  const coinData = useOutletContext<IChartProps>();
  const { isLoading, data } = useQuery<IHistory>(
    ['coinHistory', coinData.coinId],
    () => fetchCoinHistory(coinData.coinId)
  );

  return <div>Chart</div>;
}
