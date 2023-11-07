import React, { useState } from 'react';
import './CSS/UserProfile.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


import SaveIcon from "@mui/icons-material/Save"; // Import the Save icon
import EditIcon from "@mui/icons-material/Edit";

export const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    const editableTextMiddle = document.querySelectorAll('.editableTextMiddle');

    if (!isEditing) {
      // Make the text editable
      editableTextMiddle.forEach((element) => (element.contentEditable = 'true'));
    } else {
      // Make the text non-editable
      editableTextMiddle.forEach((element) => (element.contentEditable = 'false'));
    }

    setIsEditing(!isEditing);
  };

  return (
    <div>
      <div className="container"><br/><br/>
        <h3>User Information</h3>

        {/* First Container */}
        <div className="rectangle-container" id="container1">
          <span className="editableText">NAME</span>
          <span className={`editableTextMiddle ${isEditing ? 'editable' : ''}`} contentEditable="false">
            LESEGO
          </span>
        </div>
        <br />

        {/* Second Container */}
        <div className="rectangle-container" id="container2">
          <span className="editableText">SURNAME</span>
          <span className={`editableTextMiddle ${isEditing ? 'editable' : ''}`} contentEditable="false">
            LETSONG
          </span>
        </div>
        <br />

        {/* Third Container */}
        <div className="rectangle-container" id="container3">
          <span className="editableText">CHANGE PASSWORD</span>
          <a href="Settings">change password?</a>
        </div>
        <br />

        {/* Fourth Container */}
        <div className="rectangle-container" id="container4">
          <span className="editableText">FARMER ID</span>
          <span className={`editableTextMiddle ${isEditing ? 'editable' : ''}`} contentEditable="false">
            24000157
          </span>
        </div>
        <br />

        {/* Fifth Container */}
        <div className="rectangle-container" id="container5">
          <span className="editableText">GENDER</span>
          <span className={`editableTextMiddle ${isEditing ? 'editable' : ''}`} contentEditable="false">
            FEMALE
          </span>
        </div>
        <br />

        {/* Sixth Container */}
        <div className="rectangle-container" id="container6">
        <label for="dob">Date of Birth:</label>
         <input type="date" id="dob" name="dob"/>

        </div>
        <br />

        {/* Seventh Container */}
        <div className="rectangle-container" id="accommodationContainer">
          <span className="editableText">FARM LOCATION</span>
          <span className={`editableTextMiddle ${isEditing ? 'editable' : ''}`} contentEditable="false">
          SEROWE
          </span>
        </div>
        
        <div className="icon-container">
  <div className='editIcon'>
    <EditIcon
      className="cursor-pointer"
      onClick={toggleEdit}
      style={{ width: '40px', height: '25px', marginRight: '500px' }}
    />
  </div>
  <div className="leave">
  <a href="LandingPage" className="leave-link">
  <ExitToAppIcon />
  </a>
</div>

</div>

                           
    
                            <div>


          <button className="button" onClick={toggleEdit}>
            {isEditing ? 'Save' : 'Save'}
          </button>
        </div>
        </div>

        {/* Save Button */}
        
      </div>

  );
};
