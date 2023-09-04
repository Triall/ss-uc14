import React from 'react';
import {useTranslation} from 'react-i18next';
import {formatCurrency, formatDate, formatNumber, formatUnit} from './formattingUtils';
import LanguageSelector from "./LanguageSelector";
import './i18n'

function App() {
    const {t, i18n} = useTranslation();

    const date = new Date();
    const number = 1234567890;
    const unitValue = 100;

    return (
        <>
            <LanguageSelector/>
            <div>
                <p>{t('hi')}</p>

                <p>{formatDate(date, 'style1', i18n.language)}</p>
                <p>{formatDate(date, 'style2', i18n.language)}</p>
                <p>{formatDate(date, 'style3', i18n.language)}</p>
                <p>{formatDate(date, 'style4', i18n.language)}</p>

                <p>{formatNumber(number, 'style1', i18n.language)}</p>
                <p>{formatNumber(number, 'style2', i18n.language)}</p>
                <p>{formatNumber(number, 'style3', i18n.language)}</p>
                <p>{formatNumber(number, 'style4', i18n.language)}</p>

                <p>{formatUnit(unitValue, 'inches', i18n.language)}</p>
                <p>{formatUnit(unitValue, 'pounds', i18n.language)}</p>
                <p>{formatUnit(unitValue, 'liters', i18n.language)}</p>

                <p>{formatCurrency(1234.56, 'USD', i18n.language)}</p>
            </div>
        </>
    );
}

export default App;
