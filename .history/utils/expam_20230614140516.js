import React, { createContext, useContext } from 'react';

// Tạo một Context
const ThemeContext = createContext();

const App = () => {
    const theme = 'dark';

    return (
        <ThemeContext.Provider value={theme}>
            <Header />
            <MainContent />
            <Footer />
        </ThemeContext.Provider>
    );
};

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
