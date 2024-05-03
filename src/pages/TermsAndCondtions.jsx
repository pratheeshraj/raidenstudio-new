import React, { Fragment, Suspense, useEffect, useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import ContactSection2 from "../components/ContactSection2";
import FooterSectionOne from "../components/FooterSectionOne";
import Preloader from "../elements/Preloader";
import TermsAndCondtionContent from "../components/TermsAndCondtionContent";
import Breadcrumb2 from "../components/Breadcrumb2";

const TermsAndCondtions = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <Fragment>
      <Suspense>
        {active === true && <Preloader />}

        {/* <HelmetReact
      title={metadata[0]?.meta_title}
      description={metadata[0]?.meta_dec}
      keywords={metadata[0]?.meta_keyword}
      ogimage={metadata[0]?.og_image}
    /> */}

        <HeaderTwo />
        <Breadcrumb2 data={"TERMS AND CONDTIONS"} content={"Welcome to Raiden Studios!"}/>
        <TermsAndCondtionContent />
        <ContactSection2 color={"#00ECE5"} buttoncolor={"#00E9E2 "} />
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default TermsAndCondtions;
