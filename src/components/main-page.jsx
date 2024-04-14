import PropTypes from "prop-types";
import { useRef, useState } from "react";
import downloadPDF from "../util/pdf-download";
import DynamicDisplaySection from "./dynamic-display-section";
import Header from "./header";

export default function MainPage({ user, setUser }) {
  const [hideDeleteIcons, setHideDeleteIcons] = useState(false);
  const pdfRef = useRef();

  return (
    <>
      <main className="main-section">
        <div ref={pdfRef} className="page-section">
          <Header user={user} />
          <DynamicDisplaySection arrayName={"schools"} user={user} setUser={setUser} hideIcons={hideDeleteIcons} />
          <DynamicDisplaySection arrayName={"experience"} user={user} setUser={setUser} hideIcons={hideDeleteIcons} />
        </div>
        <button
          className="btn btn__download"
          onClick={() => {
            downloadPDF(user, setHideDeleteIcons, pdfRef);
          }}
        >
          DOWNLOAD PDF
        </button>
      </main>
    </>
  );
}

MainPage.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};
