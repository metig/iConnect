import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props; 

   return (
     <div className="row">
       <div className="col-md-12">
         <div className="card card-body bg-light mb-3">
           <h3 className="text-center blue-font">{profile.name}'s Bio</h3>
           <p className="lead">
             {isEmpty(profile.bio) ? (
               <span>{profile.name} does not have a bio</span>
             ) : (
               <span>{profile.bio}</span>
             )}
           </p>
           {/* Edited below  changed was 2 times now 1 time*/}
           <a href={profile.website}>website</a>
           <hr />
           {/* <a  href={profile.social.twitter}>twitter <i className="fab fa-twitter fa-2x gray-icon" /></a>
           <a href={profile.social.facebook}>facebook <i className="fab fa-facebook fa-2x gray-icon"/></a>
           <a href={profile.social.linkedin}>linkedin <i className="fab fa-linkedin fa-2x gray-icon" /></a>
           <a href={profile.social.youtube}>youtube <i className="fab fa-youtube fa-2x gray-icon" /></a> */}
         </div>
       </div>
     </div>
   );
 }
}
ProfileAbout.propTypes = {
 profile: PropTypes.object.isRequired
};
export default ProfileAbout;