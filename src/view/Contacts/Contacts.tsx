import { BaseContainer, BaseIcon, BaseText, BaseTitle } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { BlockNumber, MapContacts } from '@content/index';
import React from 'react';
import styles from './Contacts.module.scss';

const financial_statements = [
  '1 Quarter',
  '2 Quarter',
  '3 Quarter',
  '4 Quarter',
];

const Contacts = () => {
  const canada = {
    lat: 53.54301013198513,
    lng: -113.50305024315116,
  };

  const usa = {
    lat: 40.70426710109089,
    lng: -74.01326555916454,
  };

  return (
    <>
      <div className={styles.Wrapper}>
        <div
          className={styles.Background}
          style={{ backgroundImage: 'url(/images/image/dust.jpg)' }}
        ></div>

        <BaseIcon
          viewBox="0 0 668 78"
          icon={ALL_ICONS.DECOR_1}
          className={styles.DecorIcon}
        />

        <BaseContainer>
          <div className={styles.Contacts}>
            <BlockNumber number="c1" className={styles.NumberIcon} />

            <BaseTitle className={styles.Contacts_Title}>Contacts</BaseTitle>

            <div className={styles.Contacts_Content}>
              <div className={styles.Contacts_Content_Address}>
                <BaseText className={styles.Contacts_Content_Address_Item}>
                  We are based in two countries currently (everyone started from
                  somewhere, right?)
                  <br />
                  Feel free to contact us by email and send us the request
                  below.
                  <br />
                  <br />
                  <a
                    href="mailto:info@spacefex.com"
                    className={styles.Contacts_Content_Address_Item_Mailto}
                  >
                    info@spacefex.com
                  </a>
                  &nbsp; — for Spacefex Foundation
                  <br />
                  <a
                    href="mailto:info@usf.spacefex.com"
                    className={styles.Contacts_Content_Address_Item_Mailto}
                  >
                    info@usf.spacefex.com
                  </a>
                  &nbsp; — for USF cryptocurrency
                </BaseText>
                <BaseText className={styles.Contacts_Content_Address_Item}>
                  Spacefex Technologies Limited
                  <br />
                  Incorporation number BC1344906
                  <br />
                  1095 MCKENZIE AVE SUITE 300 VICTORIA BC V8P GIIN <br />
                  VFKVUQ.99999.SL.124 MSB License issued by the Fintrac Canadian
                  Financial Market Regulator
                  <br />
                  17 State Street Suite 4000, New York, Manhattan, NY 10004
                </BaseText>
              </div>

              <div className={styles.Contacts_Content_Map}>
                <div className={styles.Contacts_Content_Map_Item}>
                  <div className={styles.Contacts_Content_Map_Item_Address}>
                    <p>
                      F10665 Jasper Avenue, Suite 1400 Edmonton, Alberta T5J
                      3S9, Canada
                    </p>
                  </div>
                  <div className={styles.Contacts_Content_Map_Item_Map}>
                    <MapContacts
                      center={canada}
                      marker_title="F10665 Jasper Avenue, Suite 1400 Edmonton, Alberta T5J
                      3S9, Canada"
                    />
                  </div>
                </div>

                <div className={styles.Contacts_Content_Map_Item}>
                  <div className={styles.Contacts_Content_Map_Item_Address}>
                    <p>
                      17 State Street Suite 4000, New York, Manhattan, NY 10004
                    </p>
                  </div>
                  <div className={styles.Contacts_Content_Map_Item_Map}>
                    <MapContacts
                      center={usa}
                      marker_title="17 State Street Suite 4000, New York, Manhattan, NY 10004"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.Contacts_Content_FinancialStatements}>
                <BaseTitle
                  className={styles.Contacts_Content_FinancialStatements_Title}
                >
                  Financial statements
                </BaseTitle>

                <div
                  className={
                    styles.Contacts_Content_FinancialStatements_Description
                  }
                >
                  <p>
                    Please find below our latest financial statements about the
                    current investments and expanses for our foundation.
                  </p>
                </div>

                <div className={styles.FinancialStatements}>
                  <div className={styles.FinancialStatements_Title}>
                    <h2>Coming in 2023</h2>
                  </div>
                  <div className={styles.FinancialStatements_Description}>
                    <p>Annual Report of Spacefex</p>
                  </div>

                  <div className={styles.FinancialStatements_Items}>
                    {financial_statements?.map((item, index) => {
                      return (
                        <div className={styles.File} key={index}>
                          <BaseIcon
                            viewBox="0 0 38 51"
                            icon={ALL_ICONS.FILE}
                            className={styles.File_Icon}
                          />
                          <div className={styles.File_Name}>{item}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className={styles.FinancialStatements_Quote}>
                    Transparency is the key to success.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Contacts;
