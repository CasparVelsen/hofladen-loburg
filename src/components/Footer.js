import Divider from "../modules/Divider/Divider";
import Title from "../modules/Title/Title";
import Paragraph from "../modules/Paragraph/Paragraph";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">Logo</div>
        <div className="information">
          <div className="row">
            <Title level={3}>Hofladen</Title>
            <ul className="list">
              <li>Straße, Hausn</li>
              <li>Postleitzahl, Ort</li>
              <li>Telefonnummer</li>
              <li>
                <a
                  className="mail"
                  href={`mailto:${"caspar@velsen-zerweck.de"}`}
                >
                  E-Mail
                </a>
              </li>
            </ul>
          </div>
          <div className="row">
            <Title level={3}>Öffnungszeiten</Title>
            <ul className="list">
              <li>Mo-Fr 10-18 Uhr</li>
              <li>Sa & So 10-14 Uhr </li>
            </ul>
          </div>
          <div className="row">
            <Title level={3}>Rechtliches</Title>
            <ul className="list">
              <li>Impressum</li>
              <li>Datenschutz</li>
              <li>AGB</li>
            </ul>
          </div>
          <div className="row">
            <Title level={3}>Folge uns</Title>
            <ul className="list">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </div>
      <Divider color="normal" size="large" />
      <div classNameName="stamp">
        <Paragraph textColor="light" textStyle="small">
          &copy;{new Date().getFullYear()} HOFLADEN LOBURG | All right reserved
          | Terms of service | Privacy |
        </Paragraph>
      </div>
    </div>
  );
}
