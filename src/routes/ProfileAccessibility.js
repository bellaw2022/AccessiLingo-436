import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import "./../styles/Profile.css";


const ProfileAccessibility = () => {
    return (
        <div className="profile-container">
            <ProfileHeader page="accessibility"/>
            <section className="accessibility">
                <h2>Accessibility</h2>
                <hr></hr>
                <form>
                    <div className="accessibility__learning">
                        <h3>Learning Modes</h3>
                        <div>
                            <div>
                                <label htmlFor="audio-mode" >Audio</label>
                                <input id="audio-mode" name="audio-mode" type="checkbox" defaultChecked/>
                            </div>
                            <div>
                                <label htmlFor="flashcards-mode" >Flashcards</label>
                                <input id="flashcards-mode" name="flashcards-mode" type="checkbox" defaultChecked/>
                            </div>
                            <div>
                                <label htmlFor="imagery-mode" >Imagery</label>
                                <input id="imagery-mode" name="imagery-mode" type="checkbox" defaultChecked/>
                            </div>
                            <div>
                                <label htmlFor="text-mode" >Text</label>
                                <input id="text-mode" name="text-mode" type="checkbox" defaultChecked/>
                            </div>
                            <div>
                                <label htmlFor="multiple-choice-mode" >Multiple Choice</label>
                                <input id="multiple-choice-mode" name="multiple-choice-mode" type="checkbox" defaultChecked/>
                            </div>
                            <div>
                                <label htmlFor="storytelling-mode" >Storytelling</label>
                                <input id="storytelling-mode" name="storytelling-mode" type="checkbox" defaultChecked/>
                            </div>
                        </div>
                    </div>
                    <div className="accessibility__speech">
                        <h3>Speech Assistant</h3>
                        <div>
                            <div>
                                <label htmlFor="speech-assistant">Enable Speech Assistant</label>
                                <input name="speech-assistant" type="checkbox" id="speech-assistant" />
                            </div>
                            <p>Enabling speech assistant will only allow you to use the audio and storytelling learning modes with the use of voice recognition and AI technologies.</p>
                        </div>
                    </div>
                    <div className="accessibility__motion">
                        <h3>Motion</h3>
                        <div>
                            <div>
                                <label htmlFor="enable-motion">Enable autoplay for animated images</label>
                                <input name="motion" type="radio" id="enable-motion" value="enable-motion" />
                            </div>
                            <div>
                                <label htmlFor="disable-motion">Prevent autoplay for animated images</label>
                                <input name="motion" type="radio" id="disable-motion" value="disable-motion" defaultChecked />
                            </div>
                        </div>
                    </div>
                    <button className='save-button'>Save</button>
                </form>
            </section>
        </div>
    )
}

export default ProfileAccessibility;