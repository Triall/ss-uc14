import { useTranslation } from "react-i18next";

function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <select onChange={changeLanguage} defaultValue={i18n.language}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="ua">Ukrainian</option>
            <option value="de">German</option>
        </select>
    );
}

export default LanguageSelector;
