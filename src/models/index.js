import Character from "./character";
import Quest from "./quest";
import User from "./user";
import UserCharacter from "./userCharacter";

const modelsAssociate = () => {
    
    User.associate();
    Character.associate();
    UserCharacter.associate();
}

export default modelsAssociate;