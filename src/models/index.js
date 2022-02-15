import Character from "./character";
import Quest from "./quest";
import User from "./user";
import UserCharacter from "./userCharacter";
import UserQuest from './userQuest';

const modelsAssociate = () => {
    
    User.associate();
    Character.associate();
    UserCharacter.associate();
    UserQuest.associate();
}

export default modelsAssociate;