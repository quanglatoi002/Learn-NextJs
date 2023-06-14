import { useId } from 'react';

function PasswordField() {
    const passwordHintId = useId();
    return (
        <>
            <label>
                Password:
                <input type="password" described={passwordHintId} />
            </label>
            <p id={passwordHintId}>The password should contain at least 18 characters</p>
        </>
    );
}
