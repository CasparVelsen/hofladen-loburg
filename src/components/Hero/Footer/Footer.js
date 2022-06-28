import Divider from "../../../modules/Divider/Divider";
import Title from "../../../modules/Title/Title";
import Paragraph from "../../../modules/Paragraph/Paragraph";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.information}>
          <div className={styles.row}>
            <Title level={3} titleStyle="light">
              Hofladen
            </Title>
            <ul className={styles.list}>
              <li>Straße, Hausn</li>
              <li>Postleitzahl, Ort</li>
              <li>Telefonnummer</li>
              <li>
                <a
                  className={styles.mail}
                  href={`mailto:${"caspar@velsen-zerweck.de"}`}
                >
                  E-Mail
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.row}>
            <Title level={3} titleStyle="light">
              Öffnungszeiten
            </Title>
            <ul className={styles.list}>
              <li>Mo-Fr 10-18 Uhr</li>
              <li>Sa & So 10-14 Uhr </li>
            </ul>
          </div>
          <div className={styles.row}>
            <Title level={3} titleStyle="light">
              Rechtliches
            </Title>
            <ul className={styles.list}>
              <li>Impressum</li>
              <li>Datenschutz</li>
              <li>AGB</li>
            </ul>
          </div>
          <div className={styles.row}>
            <Title level={3} titleStyle="light">
              Folge uns
            </Title>
            <ul className={styles.list}>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </div>
      <Divider color="normal" size="large" />
      <div classNameName={styles.stamp}>
        <Paragraph textColor="gray" textStyle="small">
          &copy;{new Date().getFullYear()} HOFLADEN LOBURG | All right reserved
          | Terms of service | Privacy |
        </Paragraph>
      </div>
    </div>
  );
}
