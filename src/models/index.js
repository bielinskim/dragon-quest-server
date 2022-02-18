import Character from "./character";
import Quest from "./quest";
import User from "./user";
import UserCharacter from "./userCharacter";
import UserQuest from './userQuest';
import UserQuestUserCharacter from "./userQuestUserCharacter";

const modelsAssociate = () => {
    
    User.associate();
    Character.associate();
    UserCharacter.associate();
    UserQuest.associate();
    UserQuestUserCharacter.associate();
}

export default modelsAssociate;