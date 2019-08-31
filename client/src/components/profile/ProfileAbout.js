import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  const firstName = name.trim().split(' ')[0];
  const lastLetterIsS = firstName[firstName.length - 1] === 's';
  return (
    <div className='profile-about bg-light p-2'>
      {bio && (
        <Fragment>
          <h2 className='text-primary'>
            {firstName}
            {lastLetterIsS ? "'" : "'s"} Bio
          </h2>
          <p>{bio}</p>
          <div className='line'></div>
        </Fragment>
      )}
      <h2 className='text-primary'>Skill Set</h2>
      <div className='skills'>
        {skills.map((skill, idx) => (
          <div key={idx} className='p-1'>
            <i className='fas fa-check'></i> {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
