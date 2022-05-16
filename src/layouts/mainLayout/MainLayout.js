import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const MainLayout = ({ children, title, description }) => {

    document.title = typeof title !== "undefined" && title !== null ? ` ${title} || Tap2Earn` : "Tap2Earn"

    return (
        <>
            <div className="$block_style">
                <Header />
                <div className="main-body">
                    {
                        children
                    }
                </div>
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;
