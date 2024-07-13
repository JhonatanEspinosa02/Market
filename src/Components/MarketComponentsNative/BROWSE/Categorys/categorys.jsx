import { Stores } from "../Stores/stores";
import { AllCategory } from "./allCategoryes/allCatagories";

// Import styles
import "./../browse_styles.css";

export function Categorys(){
    return(
        <>
            <AllCategory></AllCategory>
            <hr />
            <Stores></Stores>
        </>
    )
}
