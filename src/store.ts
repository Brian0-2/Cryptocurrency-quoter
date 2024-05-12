import { create } from 'zustand';
import { devtools } from 'zustand/middleware'
import { CryptoCurrency, CryptoPrice, Pair } from './types';
import { getCryptos, fetchCurrentCryptoPrice } from './services/CryptoService';

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[],
    result: CryptoPrice,
    loading: boolean,
    fetchCryptos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set)=>({
    cryptoCurrencies: [],
    result: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY : '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: '',
    },
    loading: false,
    fetchCryptos : async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    },
    fetchData: async (pair) => {
        set(()=>({
            loading: true
        }));
        const result = await fetchCurrentCryptoPrice(pair);
        set(()=>({
            result,
            loading: false,
        }));
    }

})))