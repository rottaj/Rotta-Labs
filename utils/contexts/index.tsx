import { createContext, Dispatch, SetStateAction} from 'react';

type AccountContextType = {
    walletType: any;
    walletNetwork: any;
    setWalletNetwork: Dispatch<SetStateAction<any>>; 
    setWalletType: Dispatch<SetStateAction<any>>;
    walletAddress: any;
    setWalletAddress: Dispatch<SetStateAction<any>>;
}
export const AccountContext = 
    createContext<AccountContextType | null>(null);