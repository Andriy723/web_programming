import MainPart from "./MainPart/main_part";
import PhotosPart from "./PhotosPart/photos_part";
import Bottom from "./Bottom/bottom";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import React from "react";

function Home() {
        return (
            <div>
                <Header/>
                <MainPart/>
                <PhotosPart/>
                <Bottom/>
                <Footer/>
            </div>
        )
}

export default Home;
