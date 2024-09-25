function HeaderComponent(props) {
    const {selectedColor} = props;
    return (<>
        <header>
            <h2>Currently selected: <span className={selectedColor}>{selectedColor}</span></h2>
        </header>
    </>);
}
export default HeaderComponent