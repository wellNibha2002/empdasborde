import React from 'react'

const Header = () => {
    return (
        <>
            <div className="header">
                <h2>Dashboard</h2>
                <div className="header-right">
                    <span>🔔</span>
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="profile"
                        className="avatar"
                    />
                </div>
            </div>
        </>
    )
}

export default Header