import React from 'react';

export function Login() {
    

    return (
        <>
            <div className={loginstyle.login}>
                <div className={loginstyle.container}>
                    <div className={loginstyle.loginInfo}>
                        <loginInfo />
                    </div>

                    <div className={loginstyle.LoginForm}>
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </>
    )
}
