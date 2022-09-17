import {useTranslation} from 'react-i18next'
import {ReactElement} from "react";
import dynamic from 'next/dynamic';

interface ITranslator {
    path: string;
}

const Translator = ({path}: ITranslator) : ReactElement => {
    const {t} = useTranslation()
    return t(path)
}

export default dynamic(() => Promise.resolve(Translator), {ssr: false})
