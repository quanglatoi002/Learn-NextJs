import React, { createContext, useContext } from 'react';

// Trước tiên cần phải tạo Context
const ThemeContext = createContext();

const App = () => {
    const theme = 'dark';
    //Sau đó phải cung cấp value cho ThemeContext.Provider
    //value ở đây chứa giá trị gì thì bên nhận sẽ nhận được giá trị đó
    return (
        <ThemeContext.Provider value={theme}>
            <Header />
            <MainContent />
            <Footer />
        </ThemeContext.Provider>
    );
};
// bây giờ các component con có thể truy cập vào giá trị của Context
const Header = () => {
    const theme = useContext(ThemeContext);

    return (
        <header
            style={{
                background: theme === 'dark' ? 'black' : 'white',
                color: theme === 'dark' ? 'white' : 'black',
            }}
        >
            <h1>Header</h1>
        </header>
    );
};

const MainContent = () => {
    const theme = useContext(ThemeContext);

    return (
        <main
            style={{
                background: theme === 'dark' ? 'black' : 'white',
                color: theme === 'dark' ? 'white' : 'black',
            }}
        >
            <h2>Main Content</h2>
        </main>
    );
};

const Footer = () => {
    const theme = useContext(ThemeContext);

    return (
        <footer
            style={{
                background: theme === 'dark' ? 'black' : 'white',
                color: theme === 'dark' ? 'white' : 'black',
            }}
        >
            <h3>Footer</h3>
        </footer>
    );
};

export default App;
