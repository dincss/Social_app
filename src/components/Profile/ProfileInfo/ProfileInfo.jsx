import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img alt='' src='https://www.w3schools.com/w3css/img_lights.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;