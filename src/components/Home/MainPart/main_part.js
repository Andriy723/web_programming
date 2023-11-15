function MainPart() {
    return (
        <div className="main_part">
            <nav className="main_part__nav">
                <div className="main_part__nav_img">
                    <img src="/icons/trolleybus_photo.png" alt="main_part_img" width="550" height="350" />
                </div>
                <div className="main_part_h_p">
                    <h1 className="main_part_header">The Newest Trolleybuses</h1>
                    <p className="main_part_paragraph">
                        A trolleybus (also known as trolley bus, trolley coach, trackless
                        trolley, trackless tram – in the 1910s and 1920s[1] – or trolley[2][3])
                        is an electric bus that draws power from dual overhead wires (generally
                        suspended from roadside posts) using spring-loaded trolley poles. Two wires,
                        and two trolley poles, are required to complete the electrical circuit. This
                        differs from a tram or streetcar, which normally uses the track as the return
                        path, needing only one wire and one pole (or pantograph). They are also distinct
                        from other kinds of electric buses, which usually rely on batteries. Power
                        is most commonly supplied as 600-volt direct current, but there are exceptions.
                        They are so common in the world.
                    </p>
                </div>
            </nav>
        </div>
    );
}

export default MainPart;
