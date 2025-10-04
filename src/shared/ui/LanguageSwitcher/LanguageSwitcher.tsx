import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LanguageSwitcher.module.scss";
import { Button, ButtonTheme } from "../Button/Button";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      onClick={toggleLang}
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.Lang, {}, [className])}
    >
      {t("Язык")}
    </Button>
  );
};
