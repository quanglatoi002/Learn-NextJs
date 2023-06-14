import { useId } from 'react';
//useId có thể được sử tốt cho cả CSR và SSR
function PasswordField() {
    // tạo ra Id duy nhất
    const passwordHintId = useId();
    return (
        <>
            <label>
                Password:
                <input type="password" aria-describedby={passwordHintId} />
            </label>
        </>
    );
}

export default function App() {
    return (
        <>
            <h2>Choose password</h2>
            <PasswordField />
            <h2>Confirm password</h2>
            <PasswordField />
        </>
    );
}
